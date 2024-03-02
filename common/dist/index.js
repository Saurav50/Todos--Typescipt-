"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpInput = void 0;
const zod_1 = require("zod");
exports.signUpInput = zod_1.z.object({
    username: zod_1.z
        .string()
        .email()
        .min(5, { message: "Must be 5 or more characters long" }),
    password: zod_1.z.string(),
});
