import app from './app.js';
import connectToDB from './db/db.connect.js'
import dotenv from "dotenv"

dotenv.config();
connectToDB();

app.get('/api',(req,res)=>{
       res.status(400).json({hello: "world"})
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})