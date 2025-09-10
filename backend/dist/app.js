import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 3000;
const db = process.env.DATABASE;
app.listen(port, () => {
    console.log(`port is running on ${port}`);
});

mongoose.connect(db).then(()=>{
    console.log("database connection succefully!")
}).catch((err) =>{
    console.log(err.message)
})