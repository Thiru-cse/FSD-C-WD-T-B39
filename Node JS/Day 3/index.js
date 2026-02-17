import express from 'express';
import employeeRouter from './Routers/employeeRouter.js'

const app = express();
const PORT = 4000;
app.use(express.json());

app.use("/api", employeeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})