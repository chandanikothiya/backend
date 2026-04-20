// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECREAT_KEY // Click 'View API Keys' above to copy your API secret
});

const cloudinaryupload = async (file,folder, resource_type = "auto") => {
    console.log("filefolder",file,folder)
    try {
        const uploadResult = await cloudinary.uploader
            .upload(
                file, {
                folder:folder,
                resource_type
            }
            )
            .catch((error) => {
                console.log(error);
            });

            console.log("uploadResult",uploadResult)

            return {
                public_id:uploadResult.public_id,
                url:uploadResult.url
            };

        console.log(uploadResult);
    } catch (error) {
        console.log(error)
    }
}

const cloudinarydelete = async (public_id,resource_type) => {
    console.log("publicid",public_id)
    try {
       const r = await cloudinary.uploader.destroy(public_id,{
        resource_type  
       })
       console.log("r",r)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    cloudinaryupload,cloudinarydelete
}

