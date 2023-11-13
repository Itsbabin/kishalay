import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'


const connectToDB = async () =>{
        try {
           const connection = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
           console.log(`connected to DB on port ${connection.connection.port} successfully !!!`)
        } catch (error) {
            console.error(`MONGO_DB connection error: ${error}`);
            process.exit(1)
        }
}

export default connectToDB;