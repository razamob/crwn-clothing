import React from "react";
import "./form-input.styles.scss";

function FormInput({ labelText, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {labelText && (
        <label
          className={`${
            otherProps.value.length > 0 ? "shrink" : ""
          } form-input-label`}
        >
          {labelText}
        </label>
      )}
    </div>
  );
}

export default FormInput;
