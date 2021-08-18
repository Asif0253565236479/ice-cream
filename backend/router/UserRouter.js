import  express  from "express";
import User from '../models/usermodels.js'
import {users} from '../data.js'
import mongoose  from "mongoose";
import expressAsyncHandler from 'express-async-handler'


const UserRouter = express.Router();

UserRouter.get('/seed' , expressAsyncHandler( async(req , res) =>{
    await User.remove({});
    const createdUser = await User.insertMany(users);
    res.send({ createdUser });
}))


export default UserRouter;