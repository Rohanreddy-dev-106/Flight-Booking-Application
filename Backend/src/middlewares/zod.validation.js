//future validations

import { z } from "zod";

const registerValidation = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(100, { message: "Name must not exceed 100 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(10, { message: "Email must be at least 10 characters long" })
    .max(100, { message: "Email must not exceed 100 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password must be at least 5 characters long" })
    .max(15, { message: "Password must not exceed 15 characters" }),
});

export default registerValidation;


// in user do const{data,err}=registerValidation.safepars(req.body)