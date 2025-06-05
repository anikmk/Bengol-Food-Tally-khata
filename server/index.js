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
const birthdayCollection = client.db("BengolShop").collection("birthday");
const birthdayOrderCollection = client.db("BengolShop").collection("birthdayOrders");
const allProductCollection = client.db("BengolShop").collection("allProducts");
const allProductsOrderCollection = client.db("BengolShop").collection("allProductOrders")

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

app.put('/update/and/edit/fast/food',async(req,res) => {
  try{
    const updateData = req.body;
    const foodName = req.body.foodName;
    delete foodName;
    const result = await fastFoodCollection.updateOne({foodName},{$set:updateData});
    res.send(result)
  }

  catch (err) {
    res.status(500).send({ message: "Internal server error", error: err.message });
  }
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



// main package handler:
app.post('/customer/order/main/package',async(req,res) => {
  try{
    const data = req.body;
    const result = await packageOrderCollection.insertOne(data);
    res.send(result);
  }
  catch(err) {
  res.status(500).send({ message: "Internal server error" });
  }
})

// main package get handler:

app.get('/main/package/all/customers/orders', async (req, res) => {
  try {
    // শুধুমাত্র "main package" স্ট্যাটাসের ডাটা ফেচ করা হচ্ছে
    const query = { status: 'main package' };

    const result = await packageOrderCollection.find(query).toArray();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.delete('/delete/main/package/order/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await packageOrderCollection.deleteOne(query);
    if(result.deletedCount === 0){
      return res.status(400).send({message:"order not found"})
    }
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})




// with package handler
app.post('/user/create/order/withPackage',async(req,res) => {
  try{
    const data = req.body;
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
// delete with package order:
app.delete('/delete/with/package/order/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await packageOrderCollection.deleteOne(query);
    if(result.deletedCount === 0){
      return res.status(400).send({message:"order not found"})
    }
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})
// delete with out package order:
app.delete('/delete/with/out/package/order/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await packageOrderCollection.deleteOne(query);
    if(result.deletedCount === 0){
      return res.status(400).send({message:"order not found"})
    }
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})



// birthday handler:
app.get('/all/birthday/categories',async(req,res) => {
  try{
    const {flavor,size} = req.query;
    const query = {};
    if(flavor){
      query.flavor = flavor;
    }
    if(size){
      query.size = size;
    }
    const result = await birthdayCollection.find(query).toArray();
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

app.get('/all/birthday/categories/:id',async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)}
    const result = await birthdayCollection.findOne(query);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

app.post('/create/birthday/order/info',async(req,res) => {
  try{
    const orderInfo = req.body;
    const result = await birthdayOrderCollection.insertOne(orderInfo);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

// birthday order handler:
app.get('/find/all/birthday/cake/orders',async(req,res) => {
  try{
    const result = await birthdayOrderCollection.find().toArray();
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

app.delete('/remove/birthday/order/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await birthdayOrderCollection.deleteOne(query);
    if(result.deletedCount === 0){
      res.status(400).send({message:"order not found"})
    }
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})
// add new cake design:
app.put('/addBirthday/cake/design', async(req,res) => {
  try{
    const {flavor,size,design} = req.body;
    const query = {flavor,size};
    const update = {
      $push: {designs: design}
    };
    const result = await birthdayCollection.updateOne(query,update);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

// update cake design:
app.put('/update/birthday/cake/design', async (req, res) => {
  try {
    const { flavor, size, design } = req.body;
    const { name, image, price, availability, description } = design;

    const query = {
      flavor,
      size,
      "designs.name": name
    };

    // Dynamic update doc তৈরি করছি
    const setDoc = {};
    if (image !== undefined) setDoc["designs.$.image"] = image;
    if (price !== undefined) setDoc["designs.$.price"] = price;
    if (availability !== undefined) setDoc["designs.$.availability"] = availability;
    if (description !== undefined) setDoc["designs.$.description"] = description;

    const updateDoc = { $set: setDoc };

    const result = await birthdayCollection.updateOne(query, updateDoc);
    res.send(result);
  } catch (err) {
    res.status(500).send({ message: "internal server error" });
  }
});

// all product page handler here:
app.get('/allProducts', async (req, res) => {
  try {
    const { category } = req.query;
    const query = {};

    if (category) {
      // category থাকলে কেস-ইনসেন্সিটিভ সার্চ
      query.category = { $regex: new RegExp(category, "i") };
    }

    const result = await allProductCollection.find(query).toArray();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "internal server error" });
  }
});
// save all product order information:
app.post('/allProducts/createOrders',async(req,res) => {
  try{
    const orderInfo = req.body;
    const result = await allProductsOrderCollection.insertOne(orderInfo);
    res.send(result);
  }
  catch(err){
    res.status(500).send({message:"internal server error"})
  }
})

app.get('/allProducts/allOrders',async(req,res) => {
  try{
    const result = await allProductsOrderCollection.find().toArray();
    res.send(result);
  }
  catch(err){
    res.status(500).send({message:"internal server error"})
  }
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})