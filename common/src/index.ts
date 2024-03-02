import { z } from "zod";

export const signUpInput = z.object({
  username: z
    .string()
    .email()
    .min(5, { message: "Must be 5 or more characters long" }),
  password: z.string(),
});

export type signUpParams = z.infer<typeof signUpInput>;
