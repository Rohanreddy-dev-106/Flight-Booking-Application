import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
    Flight: {
        type: Schema.Types.ObjectId,
        ref: "flights",
        required: true
    },
    Seat: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "seat",
        required: true
    },
    Cost: {
        type: Number
    },
    Status: {
        type: String,
        enum: ["Booked", "Cancelled", "Pending"],
        default: "Pending"
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    BookingDate: {
        type: Date,
        default: Date.now
    },

}, { timestamps: true });

export default mongoose.model("booking", BookingSchema);