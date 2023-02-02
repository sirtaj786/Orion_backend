const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}

})
const userModel=mongoose.model("user",UserSchema)
module.exports=userModel;