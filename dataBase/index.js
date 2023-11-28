import mongoose from "mongoose";

const Connection = async (url) => {
    try {
        await mongoose.connect(url,
            { useNewUrlParser: true })
        console.log("DATABASE Connected Succesfully");

    } catch (error) {
        console.log('Error in connecting with DataBase', error);
    }
}

export { Connection };