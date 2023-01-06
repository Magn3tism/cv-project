import Block from "./Block";
import uniqid from "uniqid";
import "./../styles/input.css";

export default function Input() {
  const personalInformation = [
    { name: "First Name", type: "text", id: uniqid() },
    { name: "Last Name", type: "text", id: uniqid() },
    { name: "Title", type: "text", id: uniqid() },
    // { name: "Photo", type: "file", id: "photo" },
    { name: "Address", type: "text", id: uniqid() },
    { name: "Phone Number", type: "tel", id: uniqid() },
    { name: "Email", type: "email", id: uniqid() },
    { name: "Description", type: "textarea", id: uniqid() },
  ];

  const workExperience = [
    { name: "Position", type: "text" },
    { name: "Company", type: "text" },
    { name: "City", type: "text" },
    { name: "From", type: "date" },
    { name: "To", type: "date" },
  ];

  const education = [
    { name: "Degree", type: "text" },
    { name: "University", type: "text" },
    { name: "City", type: "text" },
    { name: "From", type: "date" },
    { name: "To", type: "date" },
  ];

  return (
    <div className="input">
      <Block title="Personal Information" info={personalInformation} />
      <Block title="Work Experience" info={workExperience} />
      <Block title="Education" info={education} />
    </div>
  );
}
