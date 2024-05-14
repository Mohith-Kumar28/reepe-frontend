import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

export const signInFormSchema = z.object({
  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),

  otp: z
    .string()
    .min(6, {
      message: 'Your one-time password must be 6 characters.',
    })
    .optional(),
});

export type SignInForm = z.infer<typeof signInFormSchema>;
