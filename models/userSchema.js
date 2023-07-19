// import mongoose from "mongoose";
const mongoose = require ('mongoose')

const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema  = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
      
    },
    password: {
        type: String,
        require: true,
   
  

    },
    favoriteList: {
        type: Array

    }

});


const User = model('User', userSchema);

// export default User;
module.exports=User 
