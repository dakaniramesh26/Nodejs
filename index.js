let express=require("express")
let app=express()
app.use(express.json())
app.get("/register",(req,res)=>{
    res.send("Welcome to 10kcoders")

}).listen(3025,()=>{
    console.log("port 3025 is working")
})