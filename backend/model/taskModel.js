const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const schema =mongoose.Schema;

const TaskSchema= new schema({
title:{
   type: String,
    required:true
},
description:{
    type:String
}

},{Timestamp:true})




module.exports=mongoose.model('Task',TaskSchema)