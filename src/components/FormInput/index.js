import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be more than 3 characters")
    .max(20, "It must not be more than 20"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
      "Password must be at least 8 characters, must contain at least one uppercase letter, must contain at least one lowercase letter, must contain at least one digit, must contain at least one special character"
    )
    .required("Password is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  acceptTerms: Yup.array().of(Yup.string()).min(1, "You must accept the terms and conditions").required("You must accept the terms and conditions"),
  radio: Yup.string().required("Please select one option"),
  dropdown: Yup.string().required("Please select an option"),
  hobbies: Yup.array()
    .of(Yup.string())
    .min(1, "At least one hobby must be checked")
    .required("At least one hobby must be checked"),
});

const InputFormControllers = ({ fields }) => {
  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? [] : "";
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="max-w-md mx-auto my-8">
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-600"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <Field
                as="textarea"
                name={field.name}
                placeholder={field.placeholder}
                className="mt-1 p-2 block w-full border rounded-md"
              />
            ) : field.type === "checkbox" ? (
              <div>
                {field.options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <Field
                      type="checkbox"
                      name={field.name}
                      value={option.value}
                      className="mr-1"
                    />
                    <label className="text-sm">{option.label}</label>
                  </div>
                ))}
              </div>
            ) : field.type === "radio" ? (
              <div className="flex space-x-2">
                {field.options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <Field
                      type="radio"
                      name={field.name}
                      value={option.value}
                      className="mr-1"
                    />
                    <label className="text-sm">{option.label}</label>
                  </div>
                ))}
              </div>
            ) : field.type === "dropdown" ? (
              <Field
                as="select"
                name={field.name}
                className="mt-1 p-2 block w-full border rounded-md"
              >
                <option value="">Select...</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
            ) : (
              <Field
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="mt-1 p-2 block w-full border rounded-md"
              />
            )}
            <ErrorMessage
              name={field.name}
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default InputFormControllers;
