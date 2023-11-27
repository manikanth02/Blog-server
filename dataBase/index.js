import mongoose from "mongoose";

const Connection = async (DB_USERNAME, DB_PASSWORD) => {
    try {
        // const URL = "mongodb+srv://mani84asia:5XN4ybXCL4FDav8w@blog-app.q5qyjra.mongodb.net/";
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@blog-app.q5qyjra.mongodb.net/`,
            { useNewUrlParser: true })
        console.log("DATABASE Connected Succesfully");

    } catch (error) {
        console.log('Error in connecting with DataBase', error);
    }
}

export { Connection };