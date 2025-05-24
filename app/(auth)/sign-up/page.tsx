"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validation";
import { signUpWithCredentials } from "@/lib/actions/auth.action";

const SignUp = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", name: "", username: "" }}
        onSubmit={signUpWithCredentials}
      />
    </div>
  );
};

export default SignUp;
