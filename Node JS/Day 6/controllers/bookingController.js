import Booking from "../models/Booking.js";
import sendEmail from "../utils/emailService.js";

export const bookService = async (req, res) => {
    try {
        const { service, date } = req.body;
        
// Check if the service and date are valid
        const existingBooking = await Booking.findOne({
            user: req.user._id,
            service,
            date
        });
        if (existingBooking) {
            return res.status(400).json({ message: "You have already booked this service for the selected date" });
        }

        const booking = new Booking({user: req.user._id, service, date });
        await booking.save();

// Send confirmation email
        const userEmail = req.user.email;
        await sendEmail(
            userEmail,
            "Booking Confirmation",
            `Your booking for service ${service} on ${date} has been confirmed.`
        )
        res.status(201).json({ message: "Service booked successfully", data: booking });
    } catch (error) {
        res.status(500).json({ message: "Error booking service", error });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("user").populate("service");
        res.status(200).json({ message: "Bookings retrieved successfully", data: bookings });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving bookings", error });
    }
};