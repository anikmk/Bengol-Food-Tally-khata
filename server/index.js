const express = require('express');
require('dotenv').config();
const { ObjectId } = require('mongodb');
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const { runInNewContext } = require('vm');
const app = express();
const port = process.env.PORT || 5000;;
// middleware start
app.use(cors(
  {
    origin:["http://localhost:5173","https://bengol-food.web.app"],
    credentials:true,
    
  }
));
app.use(express.json());

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@anik.34iapyi.mongodb.net/?retryWrites=true&w=majority&appName=Anik`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const userCollection = client.db("BengolShop").collection("users");
const debtsCollection = client.db("BengolShop").collection("debts");
const fastFoodCollection = client.db("BengolShop").collection("fastFoods");
const fastFoodOrderCollection = client.db("BengolShop").collection("fastFoodOrder");
const packageCollection = client.db("BengolShop").collection("packages");
const CustomPriceCollection = client.db("BengolShop").collection("customPrices");
const packageOrderCollection = client.db("BengolShop").collection("packageOrders");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(" connected to MongoDB!");
  } 
  catch(error) {
    console.log(error)
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('BENGOL SHOP SERVER IS READY')
})



// ----------users related api handler--------------



// post request for single users
app.post('/users',async(req,res) => {
  try{
    const usersData = req.body;
    console.log(usersData);
    const query = {email:usersData.email};
    const existingUser = await userCollection.findOne(query);
    if(existingUser){
      return res.send({message:"user already store in db"})
    }
    else{
      const result = await userCollection.insertOne(usersData);
      res.send(result);
    }
  }
  catch(err){res.send({error:"internal server error"})}
})

// get all users route
app.get('/allUsers',async(req,res) => {
  try{
    const result = await userCollection.find().toArray();
    res.send(result);
  }
  catch(err){
    res.send({message:"internal server error"})
  }
})

// get single user
app.get('/singleUser/:email',async(req,res) => {
  try{
    const email = req.params.email;
    const query = {email: email};
    const result = await userCollection.findOne(query);
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})
// delete user by admin
app.delete('/deleteUser/:id',async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await userCollection.deleteOne(query);
    if(result.deletedCount === 0){
      return res.status(400).send({message:"user not found"})
    }
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

// update user role route:todo
app.put('/updateUser', async(req,res) => {
  try{
    const {id,role} = req.query;
    const filter = {_id: new ObjectId(id)};
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        status: role
      }
    };
    const result = await userCollection.updateOne(filter,updateDoc,options)
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
}) 



// ---------debts api handler------------



// debts route here:
app.post('/createAllDebts',async(req,res) => {
  try{
    const createAllDebts = req.body;
    const result = await debtsCollection.insertOne(createAllDebts);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

// get all debts by filtering,searching,sorting: 
app.get('/findAllDebtsByQuery/search',async(req,res) => {
  try {
    const { searchText,sorting,status,email,page = 1,limit = 1 } = req.query;
    const pageNumber = Number(page);
    const perPageLimit = Number(limit)
    const filter = { status: email };

    if (searchText) {
        filter.name = { $regex: searchText, $options: "i" };
    }
    // todo:status will make
    if (status) {
  if (status === 'unpaid') {
    filter.$or = [
      { balance: 0 },   
      { balance: { $exists: false } },
    ];
  } else if (status === 'clear') {
    filter.balance = { $gt: 0 };
  }
}

    let sortCriteria = {};
    switch (sorting) {
        case 'lowToHigh':
            sortCriteria = { balance: 1 };
            break;
        case 'highToLow':
            sortCriteria = { balance: -1 };
            break;
        default:
            sortCriteria = {};
    }
    const result = await debtsCollection.find(filter).skip((pageNumber - 1) * limit).limit(perPageLimit).sort(sortCriteria).toArray();
    res.send(result);
} 
catch (err) {
    res.send({message:"internal server error"}) 
    }
})

// get signle debts:
app.get('/findSingleDebtsById/:id',async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await debtsCollection.findOne(query);
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})

// update debts balance : todo:
app.put('/updateSingleDebtsBelance/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const { moreMoney, backMoney, name, formattedDate } = req.body;

    const filter = { _id: new ObjectId(id) }; 
    const debtData = await debtsCollection.findOne(filter); 

    if (!debtData) {
      return res.status(404).send({ message: "Debt data not found" });
    }

    let currentBalance = parseFloat(debtData.balance || 0); 
    const additionalMoney = parseFloat(moreMoney || 0); 
    const deductedMoney = parseFloat(backMoney || 0); 

    const updatedBalance = currentBalance + additionalMoney - deductedMoney; 

   const updateDoc = { $set: { balance: updatedBalance } };
   const updatedDebt =  await debtsCollection.updateOne(filter, updateDoc);

    
    const newTransactionData = {
      name,
      moreMoney: additionalMoney,
      backMoney: deductedMoney,
      formattedDate,
      updateBalanceId: id,
    };
    const result = await debtsCollection.insertOne(newTransactionData);
    res.send({updatedDebt,result,});
  } catch (err) {
    res.status(500).send({ message: "Internal server error", error: err.message });
  }
});







// get more signle debts transjection details
app.get('/moreTransjection/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const transactionHistory = await debtsCollection.find({ updateBalanceId: id }).toArray();
    res.send(transactionHistory)
  }
  catch(err){res.send({message:"internal server error"})};
})


// delete single debts with money transactionHistory:
app.delete('/deleteSingleDebtsWithMoneyTransactions/:id',async(req,res) => {
  try{
    const {id} = req.params;
    const filter = {
      $or: [
          { _id: new ObjectId(id) },     
          { updateBalanceId: id }       
      ]
  };
    const result = await debtsCollection.deleteMany(filter);
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})




// fast food related handler:
app.post('/fastFoods',async(req,res) => {
  try{
    const fastFoodsData = req.body;
    const result = await fastFoodCollection.insertOne(fastFoodsData);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
});

app.get('/all/fast/foods', async(req,res) => {
  try{
    const result = await fastFoodCollection.find().toArray();
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})


app.get('/getFastFood', async(req,res) => {
  try{
    const {searchText,category} = req.query;
    const query = {};
    if(searchText){
      query.foodName = { $regex: searchText, $options: 'i' };
    }
    if (category) {
      query.foodName = {$regex: category,$options: 'i'};
  }
  const result = await fastFoodCollection.find(query).toArray();
  res.send(result); 

  }
  catch(err){res.send({message:"internal server error"})}
})

app.get('/getSingleFastFood/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await fastFoodCollection.findOne(query);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

app.post("/customerOrder", async(req,res) => {
  try{
    const customerOrderData = req.body;
    const result = await fastFoodOrderCollection.insertOne(customerOrderData);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

// order product 
app.get("/customer/allOrders",async(req,res) => {
  try{
    const result = await fastFoodOrderCollection.find().toArray();
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

app.delete('/deleteCustomerOrder/:id',async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await fastFoodOrderCollection.deleteOne(query);
    if(result.deletedCount === 0){
      return res.status(400).send({message:"user not found"})
    }
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

app.get('/singleShopingCartProduct/:email', async(req,res) => {
  try{
    const email = req.params.email;
    const query = {customerEmail:email}
    const result = await fastFoodOrderCollection.find(query).toArray();
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})






// package handlers:
app.post('/createPackages',async(req,res) => {
  try{
    const packages = req.body;
    const result = await packageCollection.insertOne(packages);
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})

app.get("/packages",async(req,res)=> {
  try{
    const result = await packageCollection.find().toArray();
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

app.get("/morePackages/:id", async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await packageCollection.find(query).toArray();
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})};
})

// custom handler
// app.post('/customPrice', async(req,res) => {
//   try{
//     const pricingData = req.body;
//     const result = await CustomPriceCollection.insertOne(pricingData);
//     res.send(result);
//   }
//   catch(err){res.send({message:"internal server error"})};
// })

// get per kg price
app.get('/customPerKgPrice', async (req, res) => {
  try {
    const result = await CustomPriceCollection.findOne({ status: "perkg" });
    console.log("PerKg Data:", result);
    
    if (result) {
      res.send(result);
    } else {
      res.status(404).send({ message: "No data found for status 'perkg'" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

// update per kg
app.patch('/updateCustomPerKgPrice', async (req, res) => {
  try {
    const updateFields = req.body;

    const result = await CustomPriceCollection.updateOne(
      { status: "perkg" },
      { $set: updateFields }
    );

    if (result.modifiedCount > 0) {
      res.send({ message: "প্রত্যেক কেজির মূল্য আপডেড হয়েছে" });
    } else {
      res.status(404).send({ message: "No matching document found or nothing to update" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

// get per pich price
app.get('/customPerPichPrice', async (req, res) => {
  try {
    const result = await CustomPriceCollection.findOne({ status: "perPich" });
    console.log("PerPich Data:", result);
    
    if (result) {
      res.send(result);
    } else {
      res.status(404).send({ message: "No data found for status 'perPich'" });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
});
// update per pich 
app.patch('/updateCustomPerPichPrice', async (req, res) => {
  try {
    const updateFields = req.body;

    const result = await CustomPriceCollection.updateOne(
      { status: "perPich" },
      { $set: updateFields }
    );

    if (result.modifiedCount > 0) {
      res.send({ message: "প্রত্যেক পিচের মূল্য আপডেড হয়েছে" });
    } else {
      res.status(404).send({ message: "No matching document found or nothing to update" });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// package order handler:
// with package handler
app.post('/user/create/order/withPackage',async(req,res) => {
  try{
    const data = req.body;
    console.log(data);
    const result = await packageOrderCollection.insertOne(data);
    res.send(result);
  }
  catch(err) {
  res.status(500).send({ message: "Internal server error" });
  }
})
// with out package handler:
app.post('/user/create/order/withOutPackage',async(req,res) => {
  try{
    const data = req.body;
    const result = await packageOrderCollection.insertOne(data);
    res.send(result);
  }
  catch(err) {
  res.status(500).send({ message: "Internal server error" });
  }
})

// find with package order data:
app.get('/with/package/all/orders', async (req, res) => {
  try {
    // শুধুমাত্র "With Package" স্ট্যাটাসের ডাটা ফেচ করা হচ্ছে
    const query = { status: 'With Package' };

    const result = await packageOrderCollection.find(query).toArray();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

// find with out package order data:
app.get('/with/out/package/all/orders', async (req, res) => {
  try {
    // শুধুমাত্র "With Package" স্ট্যাটাসের ডাটা ফেচ করা হচ্ছে
    const query = { status: 'WithOut Package' };

    const result = await packageOrderCollection.find(query).toArray();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})