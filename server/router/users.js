import express from "express";
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("hey user")
})

export default router;