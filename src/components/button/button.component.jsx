import React from "react";
import "./button.styles.scss";
//default button
//inverted button
//google sign in button
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
function Button({ children, buttonType, ...otherOptions }) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  );
}

export default Button;
