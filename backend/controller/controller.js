const taskModel = require('../model/taskModel')
const mongoose=require('mongoose')


const CreateTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        let task = await taskModel.create({ title, description });
        res.status(200).json(task)

    }
    catch {
        (err) => {

            res.status(400).json({message:err})
        }
    }
}

const GetTasks = async (req, res) => {

    try {
        let task = await taskModel.find({})
        res.status(200).json(task)
    }
    catch {
        (err) => {
            res.status(400).json({message:err})
        }
    }

}


const GetSingleTask = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "Task Not Found" });
    }
    try {
        let task = await taskModel.findById(id )
        res.status(200).json(task)
    }
    catch {
        err => {
            res.status(400).json({message:err})
        }
    }
}
const UpdateTask = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "Task Not Found" });
    }
    try {
        let task = await taskModel.findByIdAndUpdate( {_id:id} ,
            {...req.body}
            )
            res.status(200).json(task)
    }
    catch {
        err => {
            res.status(400).json({message:err})
        }
    }
}

const DeleteTask = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "Task Not Found" });
    }
    try {
        let task = await taskModel.findByIdAndDelete( id  )
        res.status(200).json(task)
    }
    catch {
        err => {
            res.status(400).json({message:err})
        }
    }
}




module.exports = { CreateTask, GetTasks,GetSingleTask,UpdateTask,DeleteTask }