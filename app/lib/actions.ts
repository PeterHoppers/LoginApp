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
    } catch (error) {      
      return "Something went wrong";
    }
  }