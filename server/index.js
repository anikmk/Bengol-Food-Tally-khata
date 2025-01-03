const express = require('express');
require('dotenv').config();
const { ObjectId } = require('mongodb');
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;;
// middleware start
app.use(cors(
  {
    origin:["http://localhost:5173"],
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
app.put('/updateUser/:role', async(req,res) => {
  try{
    const role = req.params.role;
    let newRole;
    if(role === 'buyer'){
      newRole = 'seller';
    }
    else if(role === 'seller'){
      newRole = 'admin'
    }
    else{
      return res.send({message:"invalid role provided"})
    }
    const filter = {role: role};
    const updateDoc = {
      $set: {
        role: newRole
      },
    };
    const result = await userCollection.updateOne(filter,updateDoc)
    if(result.matchedCount === 0){
      res.send({message:"no role matched"})
    }
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
}) 





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
    const { searchText,sorting,status,page = 1,limit = 1 } = req.query;
    console.log(page,limit);
    const pageNumber = Number(page);
    const perPageLimit = Number(limit)
    const filter = { status: "create" };

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
app.put('/updateSingleDebtsBelance/:id', async(req,res) => {
  try{
    const {id,moreMoney,backMoeny} = req.query;
    const filter = {_id: new ObjectId(id)};
    const updateDoc = {$set: updateData};
    const result = await debtsCollection.updateOne(filter,updateDoc);
    res.send(result)
    
  }
  catch(err){res.send({message:"internal server error"})}
})

// get more signle debts transjection details
app.get('/moreTransjection/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const filter = {UpdateBelanceId: new ObjectId(id)};
    const result = await debtsCollection.find(filter).toArray();
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})};
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})