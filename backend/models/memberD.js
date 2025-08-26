const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
    email : {type : email , required : true} , 
    mobileNo : {type : Number }
})