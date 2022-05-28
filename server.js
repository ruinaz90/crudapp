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
        app.use()
        app.get()
        app.post()
        app.listen()
    })
    .catch(error => console.error(error))

app.get('/', (req, res) => { //request, response
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

app.listen(3000, function() {
    console.log("listening on 3000")
})