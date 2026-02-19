import express from "express";
import { createService, getService, updateService, deleteService } from "../controllers/serviceController.js";
import { adminMiddleware, authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/create', authMiddleware, adminMiddleware, createService);
router.get('/get', authMiddleware, getService);
router.put('/update/:id', authMiddleware, adminMiddleware, updateService);
router.delete('/delete/:id', authMiddleware, adminMiddleware, deleteService);

export default router;