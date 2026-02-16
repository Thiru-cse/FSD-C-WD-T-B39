import express from "express";
import employeeRouter from './Routes/employeeRoutes.js';

const app = express();
const PORT = 4000;

app.use("/api", employeeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});