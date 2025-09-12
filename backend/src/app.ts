import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./router/user.router.js";

const app = express()
app.use(express.json());
app.use(cors())
app.use("/users",userRouter)

dotenv.config()

const port = process.env.PORT || 3000;
const database = process.env.DATABASE;

app.listen(port, () =>{
    console.log(`port is running on ${port}`)
})

mongoose.connect(database)
.then(()=>console.log("Database connection succefully!"))
.catch((error) =>console.log("connection faild!",error.message))
