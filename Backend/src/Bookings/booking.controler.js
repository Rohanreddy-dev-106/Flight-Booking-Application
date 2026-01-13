import BookingRepo from "./booking.repository.js";

export default class BookingFlights {
    _bookingrepo;

    constructor() {
        this._bookingrepo = new BookingRepo();
    }

    // Create a new booking
    async CreateBooking(req, res, next) {
        try {
            const data = req.body;

            if (!data) {
                return res.status(400).json({
                    success: false,
                    message: "Booking data is required",
                });
            }

            const booking = await this._bookingrepo.creatbooking(data);

            return res.status(201).json({
                success: true,
                message: "Booking created successfully",
                data: booking,
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    // Create payment for a booking
    async PaymentCreate(req, res, next) {
        try {
            const data = req.body;

            if (!data) {
                return res.status(400).json({
                    success: false,
                    message: "Payment data is required",
                });
            }

            const payment = await this._bookingrepo.payment(data, data.Booking);

            return res.status(201).json({
                success: true,
                message: "Payment created successfully",
                data: payment,
            });
        } catch (error) {
            console.log(error.message);

        }
    }
    async cancelbooking(req, res, next) {
        try {
            const { bid, pid } = req.body;
            await this._bookingrepo.Cancellation(bid, pid)
            return res.status(200).send("canceled.... ok")
        } catch (error) {
            console.log(error.message);

        }
    }
}
