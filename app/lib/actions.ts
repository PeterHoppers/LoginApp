'use server';

import { signIn } from "next-auth/react";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password')
      });
    } catch (error: any) {   
        const err = error as Error;
        return err.message;
    }
  }