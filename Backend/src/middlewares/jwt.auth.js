import jwt from "jsonwebtoken";

export default function jwtAuth(req, res, next) {
    const token = req.cookies.jwtToken;

    if (!token) {
        return res.status(401).send("Invalid credentials");
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_TOKEN_KEY);

        // Attach all user info to req object
        req.user = {
            UserID: payload.UserID,
            email: payload.email,
            role: payload.role
        };

        next();
    } catch (error) {
        return res.status(401).send("Invalid credentials");
    }
}
