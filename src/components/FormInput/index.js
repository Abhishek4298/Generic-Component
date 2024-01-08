import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { tw } from "@twind/react";

const InputFormControllers = ({
  fields,
  validationSchema,
  errorTextColor,
  errorTextSize,
  labelTextSize,
  labelTextColor,
  fieldClassName,
  fieldTextSize,
  fieldTextColor,
  formWidth,
  labelClassName,
  labelTextColorStrength,
  errorTextColorStrength,
  radioSpacing,
  checkboxRadioSize
}) => {
  const [submittedValues, setSubmittedValues] = useState(null);

  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? [] : "";
    return acc;
  }, {});

  const formStyle = {
    errorTextColor: tw`text-${errorTextColor}-${errorTextColorStrength}` || "text-red-500",
    errorTextSize: tw`text-[${errorTextSize}px]` || "text-xl",
    labelTextSize: tw`text-[${labelTextSize}px]` || "text-2xl",
    labelTextColor: tw`text-${labelTextColor}-${labelTextColorStrength}` || "text-black",
    fieldClassName: tw`${fieldClassName}` || "",
    fieldTextColor: tw`text-${fieldTextColor}-600` || "text-black",
    fieldTextSize: tw`text-[${fieldTextSize}px]` || "text-xl",
    formWidth: tw`w-[${formWidth}px]` || "w-full",
    labelClassName: tw`${labelClassName}` || "",
    radioSpacing : tw`space-x-${radioSpacing}` || "space-x-5",
    checkboxRadioSize : tw`scale-${checkboxRadioSize}` || "scale-105"
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setSubmittedValues(values);
        }}
      >
        <Form className={`${formStyle.formWidth} mx-auto my-8`}>
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className={`block ${formStyle.labelTextSize} ${formStyle.labelTextColor} ${formStyle.labelClassName}`}
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <Field
                  as="textarea"
                  className={`${formStyle.fieldClassName} block w-full border rounded-md 4 ${formStyle.fieldTextSize} ${formStyle.fieldTextColor}`}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ) : field.type === "checkbox" ? (
                <div>
                  {field.options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <Field
                        type="checkbox"
                        name={field.name}
                        value={option.value}
                        className={`mr-1 ${formStyle.fieldClassName} ${formStyle.checkboxRadioSize}`}
                      />
                      <label
                        className={`${formStyle.fieldTextSize} ${formStyle.fieldTextColor} ml-3`}
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              ) : field.type === "radio" ? (
                <div className={`flex ${formStyle.radioSpacing}`}>
                  {field.options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <Field
                        type="radio"
                        name={field.name}
                        value={option.value}
                        className={`mr-1 ${formStyle.fieldClassName} ${formStyle.checkboxRadioSize}`}
                      />
                      <label
                        className={`${formStyle.fieldTextSize} ${formStyle.fieldTextColor}`}
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              ) : field.type === "dropdown" ? (
                <Field
                  as="select"
                  name={field.name}
                  className={`mt-1 ${formStyle.fieldClassName} block w-full border rounded-md ${formStyle.fieldTextSize} ${formStyle.fieldTextColor}`}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              ) : (
                <Field
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={`mt-1 ${formStyle.fieldClassName} block w-full border rounded-md ${formStyle.fieldTextSize} ${formStyle.fieldTextColor}`}
                />
              )}
              {field.validation && (
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className={`${formStyle.errorTextColor} ${formStyle.errorTextSize} pt-2 pb-2`}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-xl mt-5 mb-10"
          >
            Submit
          </button>
        </Form>
      </Formik>

      {submittedValues && (
        <div className="mt-10 flex justify-center items-center">
          <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default InputFormControllers;
