import { v2 } from "cloudinary";
import fs from "fs";

v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_APIKEY,
    api_secret: process.env.CLOUDINARY_CLOUD_APISECRET
});

const UploadFile = async (localfile) => {
    try {
        // Check if a file path is provided
        if (!localfile) {
            console.error("No file provided for upload");
            return null;
        }

        // Upload to Cloudinary
        const response = await v2.uploader.upload(localfile, {
            resource_type: "auto", // Automatically detect the file type (image, video, etc.)
        });

        // Return only the URL or handle any other necessary info from the response
        console.log("Uploaded file URL:", response.url);
        return {
            url: response.url,  // You can add other properties if needed (e.g., public_id, etc.)
        };

    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
        // Cleanup file from local storage if upload fails
        try {
            fs.unlinkSync(localfile);
            console.log("Local file deleted successfully");
        } catch (err) {
            console.error("Error deleting local file:", err);
        }

        return null;
    }
}

export { UploadFile };
