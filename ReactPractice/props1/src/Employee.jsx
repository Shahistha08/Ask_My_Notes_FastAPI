// function Employee(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Employee ID: {props.id}</p>
//       <p>Department: {props.department}</p>
//       <p>Designation: {props.designation}</p>
//       <p>Salary: {props.salary}</p>
//     </div>
//   );
// }

// export default Employee;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);