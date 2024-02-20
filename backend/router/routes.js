const express=require('express');
const router=express.Router();
const  { CreateTask, GetTasks,GetSingleTask,UpdateTask,DeleteTask }=require('../controller/controller')

router.post("/create",CreateTask)
router.get("/",GetTasks)
router.delete("/:id",DeleteTask)
router.patch("/:id",UpdateTask)
router.get("/:id",GetSingleTask)

module.exports=router;