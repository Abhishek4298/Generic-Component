import { Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Card from "./components/Card";
import { sampleImage1, trueIcon } from "./constant";
import InputFormControllers from "./components/FormInput";
import * as Yup from "yup";
import country from "./components/FormInput/country.json";
import graduation from "./components/FormInput/graduation.json";
import state from "./components/FormInput/state.json";

const CustomRoute = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleClickTwo = (data) => {
    alert(`Button clicked with data: ${data}`);
  };

  const fields = [
    {
      name: "first_name",
      label: "First Name",
      type: "text",
      placeholder: "Enter your First Name",
      validation: true,
    },
    {
      name: "last_name",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your Last Name",
      validation: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      validation: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      validation: true,
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Enter your phone number",
      validation: true,
    },
    {
      name: "hobbies",
      label: "Hobbies",
      type: "checkbox",
      options: [
        { value: "reading", label: "Reading" },
        { value: "traveling", label: "Traveling" },
        { value: "coding", label: "Coding" },
      ],
      validation: true,
    },
    {
      name: "highestdegree",
      label: "Highest Degree",
      type: "dropdown",
      placeholder: "Select Your Highest Degree",
      options: graduation.map(({ value, label }) => ({
        value: value,
        label: label,
      })),
      validation: true,
    },
    {
      name: "radio",
      label: "Gender",
      type: "radio",
      placeholder: "Select Gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "others", label: "Others" },
      ],
      validation: true,
    },
    {
      name: "country",
      label: "Country",
      type: "dropdown",
      placeholder: "Select Country",
      options: country.map(({ code, name }) => ({
        value: code,
        label: name,
      })),
      validation: true,
    },
    {
      name: "state",
      label: "State",
      type: "dropdown",
      placeholder: "Select State",
      options: state.map(({ code, name }) => ({
        value: code,
        label: name,
      })),
      validation: true,
    },
    {
      name: "city",
      label: "City",
      type: "dropdown",
      placeholder: "Select City",
      options: [
        { value: "ranchi", label: "Ranchi" },
        { value: "jamshedpur", label: "Jamshedpur" },
        { value: "varanasi", label: "Varanasi" },
      ],
      validation: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Enter your message",
      validation: false,
    },
    {
      name: "acceptTerms",
      label: "Accept Terms & Conditions",
      type: "checkbox",
      options: [
        { value: "acceptTerms", label: "I accept the terms and conditions" },
      ],
      validation: true,
    },
  ];

  const generateValidationSchema = (fields) => {
    const schema = {};

    fields.forEach((field) => {
      if (field.validation) {
        switch (field.type) {
          case "text":
            schema[field.name] = Yup.string()
              .required(`${field.label} is required`)
              .min(3, `${field.label} must be more than 3 characters`)
              .max(20, `${field.label} must not be more than 20 characters`);
            break;
          case "password":
            schema[field.name] = Yup.string()
              .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                `${field.label} must be at least 8 characters, must contain at least one uppercase letter, must contain at least one lowercase letter, must contain at least one digit, must contain at least one special character`
              )
              .required(`${field.label} is required`);
            break;
          case "textarea":
            schema[field.name] = Yup.string().required(
              `${field.label} is required`
            );
            break;
          case "email":
            schema[field.name] = Yup.string()
              .email("Invalid email")
              .required(`${field.label} is required`);
            break;
          case "radio":
            schema[field.name] = Yup.string().required(
              "Please select one option"
            );
            break;
          case "dropdown":
            schema[field.name] = Yup.string().required(
              `${field.label} is required`
            );
            break;
          case "checkbox":
            schema[field.name] = Yup.array()
              .of(Yup.string())
              .min(1, `${field.label} must be checked`)
              .required(`${field.label} is required`);
            break;
          default:
            break;
        }
      }
    });

    return Yup.object().shape(schema);
  };

  return (
    <>
      <Routes>
        <Route
          path="/button"
          element={
            <div className="flex justify-center items-center h-screen">
              <div className="grid grid-cols-3">
                <Button
                  color="red"
                  borderColor="purple"
                  rounded="md"
                  size="lg"
                  onClick={handleClick}
                >
                  Basic Button
                </Button>
                <Button
                  color="blue"
                  borderColor="blue"
                  rounded="md"
                  icon={trueIcon}
                  iconPosition="left"
                  onClick={() => handleClickTwo("Custom Value")}
                >
                  Button with Icon
                </Button>
                <Button
                  color="yellow"
                  borderColor="blue"
                  rounded="md"
                  icon={trueIcon}
                  iconPosition="right"
                  onClick={() => handleClickTwo("Custom Value")}
                >
                  Button with Icon
                </Button>
              </div>
            </div>
          }
        />
        <Route
          path="/modal"
          element={
            <div className="flex justify-center">
              <Modal
                color="blue"
                header="Generic Component"
                content="New Content"
                position="center"
              />
            </div>
          }
        />
        <Route
          path="/card"
          element={
            <div className="flex">
              <Card
                title="Example Card"
                content="This is a generic card component."
                imageUrl={sampleImage1}
                onClick={() => alert("Button clicked!")}
              />
              <Card
                title="Example Card"
                content="This is a generic card component."
                onClick={() => alert("Button clicked!")}
              />
            </div>
          }
        />
        <Route
          path="/input"
          element={
            <div>
              <InputFormControllers
                fields={fields}
                validationSchema={generateValidationSchema(fields)}
                errorTextColor="red"
                errorTextSize="16"
                errorTextColorStrength="700"
                labelTextSize="22"
                labelTextColor="black"
                labelTextColorStrength="500"
                labelClassName="mt-4"
                fieldClassName="p-3"
                fieldTextSize="22"
                fieldTextColor="black"
                formWidth="600"
                radioSpacing = "5"
                checkboxRadioSize = "125"
              />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default CustomRoute;
