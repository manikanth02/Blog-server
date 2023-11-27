import dotenv from "dotenv";
import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb+srv://${username}:${password}@blog-app.q5qyjra.mongodb.net/`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "images/JPG"];

        if (match.indexOf(file.memetype === -1)) {
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({ storage });