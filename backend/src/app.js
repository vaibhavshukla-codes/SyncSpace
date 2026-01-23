import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import connectToSocket from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js';


const app = express();
const server = createServer(app); // connects socket and express server
// const io = new Server(server);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:true}));

app.use("/api/v1/users", userRoutes);

app.get("/", (req,res) => {
    return res.json({ "Hello": "World" });
})

const start = async () => {
    const connectionDB = await mongoose.connect("mongodb+srv://vaibhav-space:Gqydz38QwBazT8Gt@cluster0.f7qjdf7.mongodb.net/syncspace?appName=Cluster0");
    console.log(`MONGO Connected DB Host:${connectionDB.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("App is listening on port: 8080");
    });
}

start();