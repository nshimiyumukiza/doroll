import User from "../modal/modal.js";
import { Request, Response } from "express";
import bcrybt from "bcrypt"

class userController{
    static async createUser (req:Request, res:Response){
        try {
            const {firstName,lastName,email,phone,password,confrimPassword} = req.body
            const hash = bcrybt.hashSync(req.body.password,10);
            const user = await User.create({firstName,lastName,email,phone,password:hash,confrimPassword})
            res.status(201).json({message:"User Create SUccefully!",user})

            
        } catch (error) {
            res.status(500).json({error: error.message})
            
        }
    }

}

export {userController}