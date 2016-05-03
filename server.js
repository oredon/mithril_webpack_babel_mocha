var express = require("express")
var app = express();
var fs = require("fs")
var bodyParser = require("body-parser")

// save
app.use(bodyParser.json())
app.get("/ajax", function(req, res){
  try{
    res.send(JSON.parse(fs.readFileSync("./db/data.json", "utf8")))
    console.log("GET: return json from data.json.")
  }catch(err){
    res.send([])
    console.log("GET-ERROR: cannot read data.json.")
    console.log(err)
  }
})
app.post("/ajax", function(req, res){
  try{
    fs.writeFileSync("./db/data.json", JSON.stringify(req.body))
    res.status(200).end();
    console.log("POST: add data to data.json.")
  }catch(err){
    res.send([])
    console.log("POST-ERROR: cannot write data.json.")
    console.log(err)
  }
})

// static
app.use(express.static("."));

console.log("please open http://localhost:8000")
app.listen(8000)
