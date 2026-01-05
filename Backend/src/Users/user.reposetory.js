import { users } from "./user.schema.js";
import bcrypt from "bcrypt"

export default class Users {
    async Register(data) {
        try {
            const user = new users(data);
            await user.save();
            return user;
        }
        catch (err) {
            console.log(err.message);

        }
    }
    async Findemail(mail) {
        try {
            const email = await users.findOne({ email: mail })
            if (!email) {
                return null;
            }
            return email;
        }
        catch (err) {
            console.log(err.message);

        }
    }

    async Resetpassword(id, newpassword) {
        try {
            if (!id || !newpassword) {
                console.log("User ID and new password are required");

            }
            const hashedPassword = await bcrypt.hash(newpassword, 10);
            const reset = await users.findByIdAndUpdate(id,
                { $set: { password: hashedPassword } }, { new: true });
            return reset;
        } catch (err) {
            console.log(err.message);

        }
    }

    //Admin/Users Level api

    async Getallusers(roll) {
        try {
            return await users.find();
        } catch (err) {
            console.log(err.message);

        }
    }

}