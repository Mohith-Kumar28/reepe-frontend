import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

export const signUpFormSchema = z.object({
  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
  userName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  otp: z
    .string()
    .min(6, {
      message: 'Your one-time password must be 6 characters.',
    })
    .optional(),
});

export const signUpOtpSchema = z.object({
  otp: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
});

export type SignUpForm = z.infer<typeof signUpFormSchema>;
export type SignUpOtp = z.infer<typeof signUpOtpSchema>;
