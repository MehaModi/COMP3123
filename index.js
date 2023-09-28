var express = require('express')

var app = express()
const SERVER_PORT = 8081

app.use(express.json())

//static middleware
app.use("/test", express.static("./public"))

//http://localhost:8081/index
//app.get("/index", (req, res) => {
//    res.sendFile(__dirname + "/public/index.html")
//})

//http://localhost:8081/
app.get("/", (req, res) => {
    res.status(201).send("<h1>Welcome to Express Server</h1>")
    //res.send("<h1>Welcome to Express Server</h1>")
    //res.end()
})

//http://localhost:8081/home
app.get("/home", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

//http://localhost:8081/person
app.post("/person", (req, res) =>{
    const p = {
        pid: 1,
        pnm: "Meha Modi",
    }

    res.send(JSON.stringify(p))
    //res.json(p)
})

//http://localhost:8081/person
app.get("/person", (req, res) =>{
    const p = {
        pid: 1,
        pnm: "Meha Modi",
        city: "Toronto"
    }
    
    //res.send(p)
    res.json(p)
})

//http://localhost:8081/student/Meha/Modi
//Path Parameter
app.get("/student/:fname/:lname", (req, res) => {
    //res.json(req.params)
    const {fname, lname} = req.params
    res.send(`Welcome ${fname} ${lname}`)
})

//http://localhost:8081/student?fnm=Meha&lnm=Modi
//Query Parameter
app.get("/emp", (req, res) => {
    //res.json(req.query)
    if(req.query.fnm == undefined){
        res.send("Please send fnm as query parameter")
    }
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})