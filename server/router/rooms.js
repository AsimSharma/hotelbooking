import express from "express";
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("hey rooms")
})
export default router;