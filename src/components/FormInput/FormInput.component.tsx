import React from "react";

import "./FormInput.styles.scss";

interface FormInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  name: string;
  type?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
