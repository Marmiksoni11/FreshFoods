// this is for file upload on cloudnary!
const cloudinary = require('cloudinary').v2;

// file module!
const fs = require('fs');


// this is our private credential details for the security purpose!
// just need to create account and use service!
cloudinary.config({
    cloud_name:String(process.env.cloud_name),
    api_key:String(process.env.api_key),
    api_secret:String(process.env.api_secret)
});

// this function wants only file to upload on cloudinary!
 const UploadOnCloudnary = async (uploadfile)=>{
try {
    if(!uploadfile) return null
    const file = await cloudinary.uploader.upload(uploadfile,{
        // here we can specify any details of file we want !
        // if we can assign auto it will get all info of file!
        resource_type:"auto"
    });

    // file.url gonna be store in database
    //after upload image it will remove from the public/temp/
    // this is method to unlinkSync!
    
    fs.unlinkSync(uploadfile)
    return file;
    
} catch (error) {
    fs.unlinkSync(uploadfile) //remove the locally saved temprory file as upload operation failed!
    return null;
}  
}

module.exports = UploadOnCloudnary;