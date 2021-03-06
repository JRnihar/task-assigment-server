const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;
const cors = require('cors');



app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://task-assignment:dt60p5L85A0Lfi2J@cluster0.dctmt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
        await client.connect();
        const personalCollection = client.db('Task').collection('personal')
        const BusinessCollection = client.db('Task').collection('Business')
        const LoanCollection = client.db('Task').collection('Loan')
        //Personal-Details
        app.post('/review', async (req, res) => {
            const newProduct = req.body
            // console.log(newProduct);
            const result = await personalCollection.insertOne(newProduct)
            res.send(result)
        })  
        //Business-Details
        app.post('/Business', async (req, res) => {
            const newProduct = req.body
            // console.log(newProduct);
            const result = await BusinessCollection.insertOne(newProduct)
            res.send(result)
        })  
        //Loan-Details
        app.post('/loan', async (req, res) => {
            const newProduct = req.body
            console.log(newProduct);
            const result = await LoanCollection.insertOne(newProduct)
            res.send(result)
        })  

    } finally {

    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Running my  server')
})

app.listen(port, () => {
    console.log(' server is running ');
})