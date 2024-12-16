const express = require("express")
const app = express()
const data = require("./data.json")

app.use((req, res, next) => {
    console.log("middleware start 1")
    next()
})

app.use((req, res, next) => {
    console.log("middleware start 2")
    next()
})

app.get("/users", (req, res) => {
    // res.send("hello world")
    res.json(data)
})
app.get("/users2", (req, res) => {
    res.send("next route")
})

app.listen(8000, () => {
    console.log("Server is running on port sfdsf 8000")
})

// changes made by arshia