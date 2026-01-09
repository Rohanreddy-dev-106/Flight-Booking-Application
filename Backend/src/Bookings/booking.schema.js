import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
    Flight: {
        type: Schema.Types.ObjectId,
        ref: "flights",
        required: true
    },
    Seat: {
        type: String,
        required: true
    },
    Cost: {
        type: Number,
        required: true
    },
    Status: {
        type: String,
        enum: ["Booked", "Cancelled", "Pending"],
        default: "Pending"
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    BookingDate: {
        type: Date,
        default: Date.now
    },

}, { timestamps: true }) ;

export default mongoose.model("Booking",BookingSchema);