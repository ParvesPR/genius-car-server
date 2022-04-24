const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONNECT TO MONGODB

const uri = "mongodb+srv://dbuser:<password>@cluster0.z9ugs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.get('/', (req, res) => {
    res.send('Genius car server running')
});

app.listen(port, () => {
    console.log('Listening to port', port)
})