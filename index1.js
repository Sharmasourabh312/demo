// const server = require("http")
const path = require("path")
const dictionary = require("dictionary-en")
const nspell =require("nspell")
const express = require("express");
const app = express()
const staticPath =path.join(__dirname,'public');

app.use(express.static(staticPath));
const staticPath1 =require(path.join(__dirname,"router/app.js"))
app.use('/',staticPath1)
app.use(express.json()) 

app.post("/spell/",(req,res)=>{
    const sp =req.body;
    let ret ={}
    dictionary(ondictionary)
    function ondictionary(err,dict){
        if(err){
            throw err;
        }
        var spell = nspell(dict)
        let check =sp["data"]
        ret["c"]=spell.correct(check)
        ret["s"]=spell.suggest(check)
        console.log(ret["s"])
        res.json(ret)
    }
})
app.listen(8000,()=>{
    console.log(__dirname);
    console.log("listening");
});

