const http = require("http")
const app = http.createServer(function (req, res) {
    //  res.end("hello from server")
    if (req.url === "/") res.end("Home page")
    else if (req.url === "/about") res.end("About page")
    else if (req.url === "/contact") res.end("Contact page")
    else res.end("404 not found")
})


app.listen(8000)