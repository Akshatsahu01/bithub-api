const mongoose=require("mongoose")
const artistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        enum:["Pop","Hip-Hop","Rock","Electronic"]
    },
    bio:{
        type:String,
        
    }
})


const Artist= mongoose.model("Artist",artistSchema);
module.exports=Artist