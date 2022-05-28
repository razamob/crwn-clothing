import React from "react";
import {
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDoc(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Log in with Google</button>
    </div>
  );
}

export default SignIn;
