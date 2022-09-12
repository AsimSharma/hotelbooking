import hotelmodel from "../database/models/Hotel.js"
export default class hotelController{
    //addhotel
    async addhotel(req,res){
        try{
         const response= new hotelmodel(req.body)
         const data= await response.save();
         res.json(data)
        
        }catch(e){
            console.log(e)
            res.status(500).json({message:e.message,stack:err.stack})
        }
    }
  //gethotel
  async gethotel(req,res){
    try{
  const response=await hotelmodel.find({})
     res.status(200).json(response)
     console.log(response)
    }catch(e){
     console.log(e)
     res.status(500).json({message:e.message,stack:e.stack})
    }
  }
  //deletehotel
  async delhotel(req,res){
    const id=req.params.id
    try{
     const response= await hotelmodel.findOneAndDelete({_id:id})
     
    }catch(e){
      console.log(e)
      res.status(500).json({message:e.message,stack:e.stack})
    }
  }
  async edithotel(req,res){
   const id=req.params.id
   const update={...req.body};
   const opt={new:true};

    try{
    const response=await hotelmodel.findOneAndUpdate({_id:id},update,opt)
    res.status(200).json(response)
    }catch(e){
      console.log(e)
      res.status(500).json({message:e.message,stack:e.stack})
    }
  }
  //edithotelbyid
  async editshotel(req,res){
   const id=req.params.id
    try{
   const response=await hotelmodel.findById(id)
   res.status(200).json({success:true,response})
    }catch(e){
      console.log(e)
      res.status(500).json({message:e.message,stack:e.stack})
    }
  }
}