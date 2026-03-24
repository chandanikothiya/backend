// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECREAT_KEY // Click 'View API Keys' above to copy your API secret
});

const cloudinaryupload = async (file,folder) => {
    try {
        const uploadResult = await cloudinary.uploader
            .upload(
                file, {
                public_id: 'shoes',
                folder:folder
            }
            )
            .catch((error) => {
                console.log(error);
            });

            console.log("uploadResult",uploadResult)

        console.log(uploadResult);
    } catch (error) {
        console.log(error)
    }
}

const cloudinarydelete = async () => {
    try {
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    cloudinaryupload,cloudinarydelete
}

