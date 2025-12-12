const express=require("express")
const cors=require("cors")

const port=6002
const app=express()

app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://imnithyania_db_user:popeyes@cluster0.o9cfdis.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

     const productcollection=client.db("Popeyes").collection("products")
    
    await client.connect();

 app.post("/uploadproduct",async(req,res)=>{
    const data=req.body
    // console.log(data)
    const result=await productcollection.insertOne(data)
    res.send(result)
   }
   )
//    app.post("/uploadusers",async(req,res)=>{
//     const data=req.body
//     const result=await userscollection.insertOne(data)
//     res.send(result)
//    }
 //  )
   app.get("/getproduct",async(req,res)=>{
    const data=await productcollection.find();
    const result=await data.toArray()
    res.send(result)
   })

    app.get("/getsingleproduct/:id",async(req,res)=>{
    const id=req.params.id
    const obj={_id:new ObjectId(id)}
    const data=await productcollection.findOne(obj);
    res.send(data)
   })
//      app.get("/getuser",async(req,res)=>{
//       const data=await userscollection.find();
//       const result=await data.toArray()
//       res.send(result)
//    })

    app.delete("/deletesingleproduct/:id",async(req,res)=>{
    const id=req.params.id
    const obj={_id:new ObjectId(id)}
    const data=await productcollection.deleteOne(obj);
    res.send(data)
   })

   app.patch("/editsingleproduct/:id",async(req,res)=>{
    const id=req.params.id
    const obj={_id:new ObjectId(id)}
    const data=req.body
    const changedata={$set:{
      ...data
    }}
    const options={upsert:true}
    const result=await productcollection.updateOne(obj,changedata,options);
    res.send(result)
   })

   
  
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

 app.listen(port,()=>{ 
    console.log("running on port number",port)
})




// const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const cors = require('cors');
const dotenv=require("dotenv")
dotenv.config()
const { OAuth2Client } = require("google-auth-library");


// const { MongoClient, ServerApiVersion } = require('mongodb');


const Oauthclient = new OAuth2Client(process.env.CLIENT_ID);


// const app = express();
// const port = 6100;



app.use(express.json());
app.use(cors());


const secretKey = 'Popeyes';




let Productcollection;


async function connectDB() {
  try {
    await client.connect();
    const productcollection = client.db("Popeyes").collection("products");
   


app.post('/createaccount', async (req, res) => {
      try {
        const {firstname,lastname,email,password } = req.body;


        const existingUser = await productcollection.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });                                                                                                                                
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        await productcollection.insertOne({firstname,lastname,email,password: hashedPassword });


        res.status(201).json({ message: "User registered successfully" });
        console.log("User registered:", email);
      } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
      }
    });


   
    app.post('/loginpage', async (req, res) => {
        try {
          const { email, password } = req.body;


          const user = await productcollection.findOne({ email});
          if (!user) {
            return res.status(401).json({ message: "User not found. Please register." });
          }


          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
          }


          const token = jwt.sign({ email }, secretKey, { expiresIn: '10d' });
          res.json({ token });
          console.log("User logged in:", email);
        } catch (error) {
          res.status(500).json({ message: "Error logging in", error });
        }
    });


    app.post('/verifyToken', (req, res) => {
       console.log("testing")
        const token = req.headers.authorization?.split(' ')[1];
        console.log(token,"token received")

        if (!token) {
          return res.status(401).json({ valid: false, message: 'No token provided' });
        }


        jwt.verify(token, secretKey, (err, decoded) => {
          if (err) {
            // console.log(err)
            return res.status(401).json({ valid: false, message: 'Invalid or expired token' });
          }
          res.json({ valid: true, username: decoded.username });
        });
});


app.post("/google-login", async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await Oauthclient.verifyIdToken({
      idToken: token,
      audience:process.env.CLIENT_ID,
    });


    const payload = ticket.getPayload();
    const username = payload?.email; // use email as username
    const name = payload?.name;
    const picture = payload?.picture;


    // Check if user exists
    let user = await usersCollection.findOne({ username });


    if (!user) {
      // If user doesn't exist, create a new one
      const newUser = { username, password: null, name, picture, fromGoogle: true };
      await usersCollection.insertOne(newUser);
      console.log("New Google user created:", username);
    }


    // Create your own JWT (so your app uses one token type)
    const myToken = jwt.sign({ username:name }, secretKey, { expiresIn: "1h" });


    res.json({ token: myToken });
  } catch (err) {
    console.error("Google Login Error:", err);
    res.status(400).json({ message: "Invalid Google token" });
  }
});


    console.log("Connected to MongoDB and 'users' collection ready.");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}
connectDB();






app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});















