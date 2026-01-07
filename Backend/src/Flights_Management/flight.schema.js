import mongoose, { Schema } from "mongoose"

const FlightSchema = new Schema({
    Flightname: {
        type: String,
        required: [true, "Flight name is required"],
        trim: true,
        minlength: [3, "Flight name must be at least 3 characters"],
        maxlength: [50, "Flight name cannot exceed 50 characters"],
    },
    airline: {
        type: String,
        required: [true, "Airline name is required"],
        trim: true,
        minlength: [2, "Airline name must be at least 2 characters"],
        maxlength: [50, "Airline name cannot exceed 50 characters"],
    },
    source: {
        type: String,
        required: [true, "Source is required"],
        trim: true,
        minlength: [2, "Source must be at least 2 characters"],
        maxlength: [50, "Source cannot exceed 50 characters"],
    },
    destination: {
        type: String,
        required: [true, "Destination is required"],
        trim: true,
        minlength: [2, "Destination must be at least 2 characters"],
        maxlength: [50, "Destination cannot exceed 50 characters"],
    },
    departureTime: {
        type: Date,
    },
    aravileTime: {
        type: Date,
    },
    totalseats: {
        type: Number,
        min: [1, "There must be at least 1 seat"],
        max: [180, "Seats cannot exceed 180"],
        required: [true, "Total seats are required"]
    },
    price: { type: Number, min: 1000, max: 10000, required: true },
    Howcreated: {
        type: String,
        trim: true,
        required: [true, "Howcreated seat is required"]
    }
}, { timestamps: true });


export default mongoose.model("Flight", FlightSchema);