const mongoose=require("mongoose")
const playlistschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    songs:[{

        type:mongoose.Schema.Types.ObjectId,
        ref:"song"
}]
    
},{
    timestamps:true
})

const Playlist=mongoose.model("Playlist",playlistschema);

module.exports=Playlist