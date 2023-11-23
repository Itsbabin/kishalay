import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dn1zufxma', 
  api_key: '394742956795486', 
  api_secret: 'vvdcuuahS--AHVe167eJ0HFLLfA' 
});

function uploadToCloudinary( localpath ){

    cloudinary.v2.uploader.upload(localpath,{
        resource_type: "image",
    }, 
    function(error, result) {console.log(result || error); });

}

export default uploadToCloudinary;