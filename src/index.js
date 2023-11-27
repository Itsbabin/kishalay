import app from './app.js';
import connectToDB from './db/db.connect.js'
import dotenv from "dotenv";

dotenv.config();
connectToDB();


app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})