const express = require('express')
const app = express()
app.listen(3000, function() {
    console.log("listening on 3000")
})

app.get('/', (req, res) => { //request, response
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})