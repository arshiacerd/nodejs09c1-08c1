const express = require("express")
const app = express()
const data = require("./data.json")

app.get("/users", (req, res) => {
    // res.send("hello world")
    res.json(data)
})
app.get("/users/:id", (req, res) => {
    // res.send(req.params.id)
})

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})