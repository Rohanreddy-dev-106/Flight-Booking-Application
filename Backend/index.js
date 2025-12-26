import express from "express";
import dotenv from "dotenv";
dotenv.config();


const server=express();


server.get("/",(req,res,next)=>res.status(200).send("Server is Created..."))

export{server};