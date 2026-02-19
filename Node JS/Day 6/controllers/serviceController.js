import Service from "../models/Service.js";

export const createService = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).json({ message: "Service created successfully", data: newService });
    } catch (error) {
        res.status(500).json({ message: "Error creating service", error });
    }
};

export const getService = async (req, res) => {
    try {
        const service = await Service.find();
        res.status(200).json({ message: "Services retrieved successfully", data: service });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving services", error });
    }
};

export const updateService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const { name, description, price } = req.body;
        const updatedService = await Service.findByIdAndUpdate(
            serviceId, { name, description, price },
            { new: true });
        if (!updatedService) {
            return res.status(404).json({ message: "Service not found" });
        }
        
        res.status(200).json({ message: "Service updated successfully", data: updatedService });
    } catch (error) {
        res.status(500).json({ message: "Error updating service", error });
    }
};

export const deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const deletedService = await Service.findByIdAndDelete(serviceId);
        if (!deletedService) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json({ message: "Service deleted successfully", data: deletedService });
    } catch (error) {
        res.status(500).json({ message: "Error deleting service", error });
    }   
};