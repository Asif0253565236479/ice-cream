import  express  from "express";
import User from '../models/usermodels.js'
import {users} from '../data.js'
import mongoose  from "mongoose";
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import { tokenGenaretor } from "../utils.js";


const UserRouter = express.Router();

UserRouter.get('/seed' , expressAsyncHandler( async(req , res) =>{
    await User.remove({});
    const createdUser = await User.insertMany(users);
    res.send({ createdUser });
}))

UserRouter.post('/singin' , expressAsyncHandler(async (req , res) =>{
    const user = await User.findOne({email: req.body.email});
     if(user){
        
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id : user._id,
                name: user.name,
                email:user.email,
                isAdmin : user.isAdmin,
                token: tokenGenaretor(user)
            } )
            return
        }
        else{
            
            
            res.status(401).send({message: "Incorret User And Password"})
        }
     }
     else{
         res.status(401).send({message: "User Not Found"})
     }
    
    
}))

export default UserRouter;