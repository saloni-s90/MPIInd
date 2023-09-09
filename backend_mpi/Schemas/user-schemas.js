import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    siteid: "String",
    esim:"String",
    cname : "String",
    device : "String"
})

const users = mongoose.model("configurations",userSchema)

export default users;