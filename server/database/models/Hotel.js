import mongoose from "mongoose";
const hotelschema= new mongoose.Schema({
    name:{
        require:true,
        type:String,
    },
    type:{
        require:true,
        type:String,
    },
    city:{
        require:true,
        type:String,
    },
    address:{
        require:true,
        type:String,
    },
    title:{
        require:true,
        type:String,
    },
    distance:{
        require:true,
        type:String,
    },
    photos:{
      
        type:[String],
    },
    desc:{
        require:true,
        type:String,
    },
    rating:{
        require:true,
        type:Number,
        min:0,
        max:5,
    },
    rooms:{
       
        type:[String],
    },
    cheapestprice:{
        require:true,
        type:Number,
    },
    featured:{
        type:Boolean,
        default:false,
    },
})
const hotelmodel=new mongoose.model("hotelbooking",hotelschema)
export default hotelmodel