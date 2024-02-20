const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const uri = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;
const router = express.Router();
const TaskRouter =require('./router/routes')
const cors =require('cors')
app.use(express.json())
app.use(cors())
mongoose.connect(uri)
.then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});



// BASE Routes (Common Routes Which is used to all Routes)
app.use('/api/tasks',TaskRouter)
