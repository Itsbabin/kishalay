import app from './app.js';
import connectToDB from './db/db.connect.js'
import dotenv from "dotenv";

dotenv.config();
connectToDB();

app.get('/api',(req,res)=>{
       res.status(200).json({success: true})
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})