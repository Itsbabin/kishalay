import app from './app.js';
import connectToDB from './db/db.connect.js'
import dotenv from "dotenv";
import ApiResponse from './utils/ApiResponse.js';
import { Manager } from './models/manager.model.js';

dotenv.config();
connectToDB();

app.get('/api', async(req,res)=>{
  const {userid , name , password} = req.body;
   const user =  await Manager.create({
    userid,
    name,
    password
  }) 
  const response = new ApiResponse(200,"created",user);
  res.status(200).json({response});

});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})