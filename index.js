const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jeffersonuche:WIpD50OFEmK21Yld@cluster0.j7lvsmz.mongodb.net/?retryWrites=true&w=majority";


const connectDB = require('./dbConn');

// Connect to MongoDB
connectDB();
// built-in middleware for json 
app.use(express.json());
app.use('/pin', require('./pin'));
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(3500, () => console.log(`Server running on port 3500}`));
});
