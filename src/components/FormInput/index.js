import React from "react";
import { useFormik } from "formik";

const InputFormControllers = ({
  label,
  name,
  type,
  placeholder,
  className,
  minLength,
  maxLength,
  boxPosition,
  labelColor,
  ...rest
}) => {
  const formik = useFormik({
    initialValues: {
      [name]: "",
    },
    validate: (values) => {
      const errors = {};

      if (minLength && values[name].length < minLength) {
        errors[name] = `${label} must be at least ${minLength} characters`;
      }

      if (maxLength && values[name].length > maxLength) {
        errors[name] = `${label} must be at most ${maxLength} characters`;
      }

      switch (type) {
        case "email":
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[name])) {
            errors[name] = "Invalid email address";
          }
          break;
          case "password":
           
            if (values[name].length < 8) {
              errors[name] = "Password must be at least 8 characters";
            }
            
            else if (!/[A-Z]/.test(values[name])) {
              errors[name] = "Password must contain at least one uppercase letter";
            }
            
            else if (!/[a-z]/.test(values[name])) {
              errors[name] = "Password must contain at least one lowercase letter";
            }
          
            else if (!/\d/.test(values[name])) {
              errors[name] = "Password must contain at least one digit";
            }
            
            else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values[name])) {
              errors[name] = "Password must contain at least one special character";
            }
            break;
        
        default:
          break;
      }

      return errors;
    },
  });
  
  const containerClasses = `flex mb-4 mt-10 ${className} ${boxPosition}`;
  const labelClasses = `text-gray-700 mt-2 text-sm font-bold mr-3 ${labelColor}`;
  const inputClasses = `${
    formik.touched[name] && formik.errors[name]
      ? "border-red-500"
      : "border-gray-300"
  } appearance-none block w-4/12 bg-white border ${
    formik.touched[name] && formik.errors[name]
      ? "text-red-500"
      : "text-gray-700"
  } rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`;

  return (
    <div>
      <div className={containerClasses}>
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched(name, true)}
          value={formik.values[name]}
          className={inputClasses}
          {...rest}
        />
      </div>
      <div className={`flex ${boxPosition}`}>
        {formik.touched[name] && formik.errors[name] && (
          <div className="text-red-500 text-xs mt-1">{formik.errors[name]}</div>
        )}
      </div>
    </div>
  );
};

export default InputFormControllers;
