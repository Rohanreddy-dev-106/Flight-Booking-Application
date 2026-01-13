import mongoose, { Schema } from "mongoose";

const PaymentSchema = new Schema({
    Amount: {
        type: Number,
    },
    Currency: {
        type: String,
        default: "INR"
    },
    Receipt: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        enum: ["Pending", "Success", "Failed"],
        default: "Pending"
    },
    PaymentDate: {
        type: Date,
        default: Date.now
    },
    Booking: {
        type: Schema.Types.ObjectId,
        ref: "bookings"
    },
    User: {
        type: Schema.Types.ObjectId,//optional extra safty
        ref: "users"
    }
});

export default mongoose.model("payment", PaymentSchema);
