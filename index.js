const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send({data:'It works'})
})

app.post('/', (req, res) => {
    res.send({data:'POST'})
})

app.put('/', (req, res) => {
    res.send({data:'PUT'})
})

app.delete('/', (req, res) => {
    res.send({data:'DELETE'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
module.exports =app