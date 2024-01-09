import country from "./components/FormInput/country.json";
import graduation from "./components/FormInput/graduation.json";
import state from "./components/FormInput/state.json";

export const trueIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export const sideNavIcon = (
  <svg viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="20"></rect>
    <rect y="30" width="100" height="20"></rect>
    <rect y="60" width="100" height="20"></rect>
  </svg>
);

export const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
</svg>
)

export const defaultImageUrl =
  "https://oui.edu.in/wp-content/themes/eikra/assets/img/noimage-420x273.jpg";

export const sampleImage1 =
  "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png";

  export const carouselImages = [
    "https://images.unsplash.com/photo-1703433690150-2ac5b9edd095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1703814174877-8ac670d89c38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  export const sideNavItem = [
    { label: "Presentation", link: "/presentation" },
    { label: "Button", link: "/button" },
    { label: "Modal", link: "/modal" },
    { label: "Card", link: "/card" },
    { label: "Table", link: "/table" },
    { label: "Date Picker", link: "/datepicker" },
    { label: "Menu Bar", link: "/menu" },
    { label: "Carousel", link: "/carousel" },
    { label: "Toast Message", link: "/toast" },
    { label: "Form Input Controller", link: "/input" },
  ];

 export const menuItems = [
    {
      label: "Home",
      link: "/",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 italic">
          <h1>This is Home component</h1>
        </div>
      ),
    },
    {
      label: "About",
      link: "/about",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-thin">
          <h1>This is About component</h1>
        </div>
      ),
    },
    {
      label: "Music",
      link: "/music",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-semibold">
          <h1>This is Music component</h1>
        </div>
      ),
    },
    {
      label: "Contact",
      link: "/contact",
      linkedComponent: (
        <div className="flex justify-center text-8xl text-red-600 mt-12 font-bold">
          <h1>This is Contact component</h1>
        </div>
      ),
    },
  ];

  export const fields = [
    {
      name: "first_name",
      label: "First Name",
      type: "text",
      placeholder: "Enter your First Name",
      validation: true,
      firstNameValidation: {
        minLength: 3,
        maxLength: 20,
      },
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
      passwordValidation: {
        minimumLength: 8,
        pattern:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
        message:
          "Password must contain at least one uppercase letter, must contain at least one lowercase letter, must contain at least one digit, must contain at least one special character",
      },
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