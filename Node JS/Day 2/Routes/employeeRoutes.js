import express from 'express';
import { getEmployeeDetails, getEmployeeDetailsById } from '../Controller/employeeController.js';

const router = express.Router();

router.get("/get-empDetails", getEmployeeDetails);
router.get("/get-empDetails/:id", getEmployeeDetailsById);

export default router;