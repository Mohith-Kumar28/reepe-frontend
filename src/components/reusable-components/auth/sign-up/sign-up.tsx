'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { InputOTPControlled } from '../../atoms/input-otp-controlled';

interface SignUpProps {
  // Define any props here if needed
}

export const SignUp: React.FC<SignUpProps> = () => {
  const [otpValue, setOtpValue] = useState<string>('');
  const [showOTP, setShowOTP] = useState<boolean>(false); // Control OTP visibility and interactivity
  const [resendTimer, setResendTimer] = useState<number>(10); // Initialize resend timer

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
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="number"
              placeholder=""
              required
              disabled={showOTP}
            />
          </div>
          {!showOTP && (
            <div className="grid gap-2">
              <Label htmlFor="userName">User Name</Label>
              <Input
                id="userName"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
          )}
          {showOTP && (
            <div className="grid gap-2">
              <Label htmlFor="otp">OTP</Label>
              <InputOTPControlled value={otpValue} setOtpValue={setOtpValue} />
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
            </div>
          )}
          <Button type="submit" onClick={handleSubmit} className="w-full">
            {showOTP ? 'Login' : 'Submit OTP'}
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/sign-in" className="underline">
              Sign in
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
