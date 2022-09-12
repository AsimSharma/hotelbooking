import express from "express";
import hotelController from "../Controller/hotelscontroller.js"
const router=express.Router()
const controller =new hotelController()
router.post("/add",controller.addhotel)
router.get("/get",controller.gethotel)
router.delete("/del/:id",controller.delhotel)
router.post("/edit/:id",controller.edithotel)
router.get("/edits/:id",controller.editshotel)
export default router;