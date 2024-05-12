import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

interface InputOTPControlledProps {
  value: string;
  setOtpValue: Dispatch<SetStateAction<string>>;
}

export function InputOTPControlled({
  value,
  setOtpValue,
}: InputOTPControlledProps) {
  return (
    <div className="flex w-full justify-center space-y-2">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(newValue) => setOtpValue(newValue)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
