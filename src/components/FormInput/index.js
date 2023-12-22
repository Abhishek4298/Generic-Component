import React from "react";
import { useFormik } from "formik";

const InputFormControllers = ({
  label,
  name,
  type,
  placeholder,
  ...rest
}) => {
  const formik = useFormik({
    initialValues: {
      [name]: "",
    }
  });

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        {...rest}
      />
    </div>
  );
};

export default InputFormControllers;
