import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import userRoutes from './Routers/user.router.js'

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
