import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

async function uploadToCloudinary ( localpath ){

  try {
  const uploadedFile = await cloudinary.uploader.upload(localpath,{
        resource_type: "image",
    });
    console.log(uploadedFile);
} catch (error) {
    fs.unlink(localpath);
    console.log(error);
}

}

export default uploadToCloudinary;