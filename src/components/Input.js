import Block from "./Block";
import uniqid from "uniqid";
import "./../styles/input.css";

export default function Input() {
  const personalInformation = [
    { name: "First Name", type: "text", id: uniqid() },
    { name: "Last Name", type: "text", id: uniqid() },
    { name: "Title", type: "text", id: uniqid() },
    // { name: "", type: "" },
    { name: "Address", type: "text", id: uniqid() },
    { name: "Phone Number", type: "tel", id: uniqid() },
    { name: "Email", type: "email", id: uniqid() },
    // { name: "Description", type: "textbox", id: uniqid() },
  ];
  return (
    <div className="input">
      <Block
        title="Personal Information"
        info={personalInformation}
        extra={false}
      />
    </div>
  );
}
