const { z } = require("zod");

//create an object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 chars" })
    .max(255, { message: "Name must not be more than 255 character" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 chars" })
    .max(255, { message: "Email must not be more than 255 character" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 chars" })
    .max(20, { message: "Email must not be more than 20 character" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 chars" })
    .max(1025, { message: "Password must not be more than 1025 character" }),
});

//login schema
const loginSchema = z.object({
  email: z
    .string({ require_err: "Enter is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 chars" })
    .max(255, { message: "Email must not be more than 255 character" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 chars" })
    .max(1025, { message: "Password must not be more than 1025 character" }),
});

module.exports = { signupSchema, loginSchema };
