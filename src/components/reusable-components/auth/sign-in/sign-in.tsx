'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { InputOTPControlled } from '../../atoms/input-otp-controlled';
import { PhoneInput } from '../../atoms/phone-input';
import { type SignInForm, signInFormSchema } from './data/schema';

interface SignInProps {
  // Define any props here if needed
}

export const SignIn: React.FC<SignInProps> = () => {
  // const [otpValue, setOtpValue] = useState<string>('');
  const [showOTP, setShowOTP] = useState<boolean>(false); // Control OTP visibility and interactivity
  const [resendTimer, setResendTimer] = useState<number>(10); // Initialize resend timer

  const form = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      // userName: '',
      phoneNumber: '',
      // otp: '',
    },
  });

  // Function to handle OTP submission
  const handleSubmit = () => {
    // Handle OTP submission logic here

    // After successful submission, hide fields and show a success message
    setShowOTP(true); // Show OTP input and controls
    setResendTimer(10); // Reset countdown timer
  };

  // Countdown timer logic
  useEffect(() => {
    if (resendTimer > 0) {
      const timerId = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timerId); // Cleanup on unmount
    }
    return undefined;
  }, [resendTimer]);

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-balance text-muted-foreground">
              {/* Enter your phone number below to login to your account */}
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className=" space-y-6"
            >
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      {/* <Input {...field} /> */}
                      <PhoneInput disabled={showOTP} {...field} />
                    </FormControl>
                    <FormDescription>
                      {/* This is your public display name. */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {showOTP && (
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <>
                          <InputOTPControlled
                            // value={otpValue}
                            // setOtpValue={setOtpValue}
                            {...field}
                          />
                          <FormMessage />
                          <div className="flex justify-between">
                            <Button
                              onClick={() => {
                                setShowOTP(false);
                              }}
                              variant="link"

                              // className="inline-block cursor-pointer text-sm underline"
                            >
                              Change number
                            </Button>
                            {resendTimer > 0 && (
                              <Button
                                variant="link"
                                disabled

                                // className="inline-block cursor-pointer text-sm underline"
                              >
                                Resend OTP in {resendTimer} seconds
                              </Button>
                            )}
                            {resendTimer === 0 && (
                              <Button
                                onClick={() => {
                                  setResendTimer(10);
                                }}
                                variant="link"

                                // className="inline-block cursor-pointer text-sm underline"
                              >
                                Resend OTP
                              </Button>
                            )}
                          </div>
                        </>
                      </FormControl>
                      <FormDescription>
                        {/* Please enter the one-time password sent to your phone. */}
                      </FormDescription>
                    </FormItem>
                  )}
                />
              )}

              <Button type="submit" variant="ringHover" className="w-full">
                {showOTP ? 'Submit OTP' : 'Submit'}
              </Button>
            </form>
          </Form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="size-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
