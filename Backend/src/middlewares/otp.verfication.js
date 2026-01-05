import { redis } from "../services/redis.io.js";

async function VerifyOtp(req, res, next) {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).send("Email and OTP are required");
        }

        const storedOtp = await redis.get(`otp:${email}`);

        if (!storedOtp) {
            return res.status(400).send("OTP expired or not found");
        }

        if (storedOtp !== otp) {
            return res.status(400).send("Invalid OTP");
        }

        // OTP matched then email is verified
        // MARK EMAIL AS VERIFIED
    await redis.set(`email_verified:${email}`, "true", "EX", 600); // 10 min
    await redis.del(`otp:${email}`);


        return res.status(200).json({
            message: "Email verified successfully"
        });

    } catch (error) {
        console.log("Verify OTP Error:", error.message);
        res.status(500).send("OTP verification failed");
    }
}

export default VerifyOtp;
