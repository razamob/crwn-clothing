import React, { useState } from "react";
import {
  createAuthUserWithEmailPassword,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailPassword(email, password);
      await createUserDoc(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.error(err);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelText={"Display Name"}
          onChange={handleChange}
          name="displayName"
          type="text"
          required
          value={displayName}
        />
        <FormInput
          labelText={"Email"}
          onChange={handleChange}
          name="email"
          type="email"
          required
          value={email}
        />

        <FormInput
          labelText={"Password"}
          onChange={handleChange}
          name="password"
          type="password"
          required
          value={password}
        />

        <FormInput
          labelText={"Confirm Password"}
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
