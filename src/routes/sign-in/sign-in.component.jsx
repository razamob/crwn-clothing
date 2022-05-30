import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDoc(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Log in with Google</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
