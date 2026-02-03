const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
 username:{
    type:String,
    required:true,
    unique:true
 },
 email:{
    type:String,
    required:true,
    unique:true,
 },
 password:{
    type:String,
   //  required:true,
 },
 likedsongs:
    [{ type: mongoose.Schema.Types.ObjectId, 
      ref: 'Album'}],
 

 
},{
    timestamps:true
})

const User=new mongoose.model("User",userschema);

module.exports=User