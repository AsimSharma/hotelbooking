import express from "express";
import  connection  from "./database/Connection.js";
import router from "./router/auth.js";
import hotel from "./router/hotels.js"
import room from "./router/rooms.js"
import user from "./router/users.js"
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("this is express server")
})
app.use("/auth",router)
app.use("/hotels",hotel)
app.use("/users",user)
app.use("/rooms",room)
app.listen(8000,()=>{
    connection()
    console.log("server is running in port 8000")
})