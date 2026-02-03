const mongoose=require("mongoose");
const albumschema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    releaseYear:{
        type:Number,
        required:true
    },
    album:[{
            type: mongoose.Schema.Types.ObjectId, ref: 'Album'
    }]
})
const Album=mongoose.model("Album",albumschema)
module.exports=Album