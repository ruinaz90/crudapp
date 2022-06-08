const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express()
const connectionString = 'mongodb+srv://admin:pass@cluster0.1brh5bj.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.urlencoded({ extended: true}))

MongoClient.connect(connectionString, {
    useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to database")
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')

        app.get('/', (req, res) => { //request, response
            const cursor = db.collection('quotes').find().toArray()
            .then(results => {
                console.log(results)
            })
            .catch(error => console.error(error))

            console.log(__dirname)
            res.sendFile(__dirname + "/index.html")
        })
        
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        
        app.listen(3000, function() {
            console.log("listening on 3000")
        })
    })
    .catch(error => console.error(error))