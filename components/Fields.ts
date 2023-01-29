import { FaFemale, FaMale } from 'react-icons/fa';
export const InputFields = (state, handleChange)=>{
    console.log(state)
    return [
        {
            label: "First Name",
            type: "text",
            value: state.first_name,
            change: handleChange,
            required: true,
            id: "first_name",
            placeholder: "Enter your first name",
            description:
              "",
            disabled: false,
          },
        {
            label: "Last Name",
            type: "text",
            value: state.last_name,
            change: handleChange,
            required: true,
            id: "last_name",
            placeholder: "Enter your last name",
            description:
              "",
            disabled: false,
          },
        {
            label: "Phone",
            type: "text",
            value: state.mobile_number,
            change: handleChange,
            required: true,
            id: "mobile_number",
            placeholder: "",
            description:
              "",
            disabled: false,
          },
        {
            label: "Email",
            type: "email",
            value: state.email,
            change: handleChange,
            required: true,
            id: "email",
            placeholder: "example@example.com",
            description:
              "",
            disabled: false,
          },
        {
            label: "MyGov Username",
            type: "text",
            value: state.my_gov_username,
            change: handleChange,
            required: true,
            id: "my_gov_username",
            placeholder: "",
            description:
              "",
            disabled: false,
          },
        {
            label: "MyGov Password",
            type: "text",
            value: state.my_gov_password,
            change: handleChange,
            required: true,
            id: "my_gov_password",
            placeholder: "",
            description:
              "",
            disabled: false,
          },
        {
            label: "Security Question",
            type: "text",
            value: state.security_question,
            change: handleChange,
            required: true,
            id: "security_question",
            placeholder: "",
            description:
              "",
            disabled: false,
          },
        {
            label: "Security Answer",
            type: "text",
            value: state.security_answer,
            change: handleChange,
            required: true,
            id: "security_answer",
            placeholder: "",
            description:
              "",
            disabled: false,
          },
        {
            label: "What position are you applying for?",
            type: "text",
            value: state.position,
            change: handleChange,
            required: true,
            id: "position",
            placeholder: "",
            description:
              "",
            disabled: false,
          },
        {
            label: "Education Qualification",
            type: "text",
            value: state.qualification,
            change: handleChange,
            required: true,
            id: "qualification",
            placeholder: "",
            description:
              "",
            disabled: false,
          },
        {
            label: "Previous Work",
            type: "text",
            value: state.prev_work,
            change: handleChange,
            required: true,
            id: "prev_work",
            placeholder: "",
            description:
              "Answer no if not applicable",
            disabled: false,
          },
        {
            label: "Skills & Qualifications",
            type: "text",
            value: state.skills,
            change: handleChange,
            required: true,
            id: "skills",
            placeholder: "",
            description:
              "Please list qualifications such as special skills, abilities, or honors that should be considered:",
            disabled: false,
          },
    ]
}