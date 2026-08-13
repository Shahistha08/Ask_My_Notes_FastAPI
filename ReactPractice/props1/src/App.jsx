// import Student from "./Student";
// function App() {

//     return (
//         <div>
//             <Student
//                 name="Rahul"
//                 age={20}
//             />
//             <Student
//                 name="Priya"
//                 age={19}
//             />
//             <Student
//                 name="Kiran"
//                 age={21}
//             />
//         </div>
//     );
// }
// export default App;


// Employee details
// import Employee from "./Employee";
// function App() {
//   return (
//     <div>
//       <h1>Employee Profile Cards</h1>
//       <Employee
//         name="Ramesh"
//         id="EMP101"
//         department="HR"
//         designation="Manager"
//         salary="50000"
//       />
//       <Employee
//         name="Kavya"
//         id="EMP102"
//         department="IT"
//         designation="Developer"
//         salary="60000"
//       />
//       <Employee
//         name="Rahul"
//         id="EMP103"
//         department="Finance"
//         designation="Accountant"
//         salary="45000"
//       />
//       <Employee
//         name="Sneha"
//         id="EMP104"
//         department="Marketing"
//         designation="Executive"
//         salary="40000"
//       />
//     </div>
//   );
// }
// export default App;


//Like view
// import { useState } from "react";
// function App() {
//   const [likes, setLikes] = useState(0);
//   const handleLike = () => {
//     setLikes(likes + 1);
//   };
//   const handleReset = () => {
//     setLikes(0);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Like Button Application</h1>
//       <h2>Likes Count: {likes}</h2>
//       <button onClick={handleLike}>Like</button>
//       <button onClick={handleReset} style={{ marginLeft: "10px" }}>
//         Reset
//       </button>
//     </div>
//   );
// }
// export default App;


//Post Viewer
// import { useState, useEffect } from "react";
// function App() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "55px",
//           marginBottom: "20px",
//         }}
//       >
//         Posts Viewer
//       </h1>
//       <table
//         style={{
//           width: "100%",
//           borderCollapse: "collapse",
//           textAlign: "center",
//         }}
//         border="1"
//       >
//         <thead
//           style={{
//             backgroundColor: "#1565C0",
//             color: "white",
//           }}
//         >
//           <tr>
//             <th style={{ padding: "15px" }}>Post ID</th>
//             <th style={{ padding: "15px" }}>Title</th>
//             <th style={{ padding: "15px" }}>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {posts.map((post) => (
//             <tr key={post.id}>
//               <td style={{ padding: "12px" }}>{post.id}</td>
//               <td style={{ padding: "12px" }}>{post.title}</td>
//               <td style={{ padding: "12px" }}>{post.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;


//Language viewer
import React, { createContext, useContext, useState } from "react";
const LanguageContext = createContext();
function WelcomeMessage() {
  const { language } = useContext(LanguageContext);
  return (
    <h2>
      {language === "English"
        ? "Welcome to React"
        : "రియాక్ట్‌కు స్వాగతం"}
    </h2>
  );
}
function App() {
  const [language, setLanguage] = useState("English");
  return (
    <LanguageContext.Provider value={{ language }}>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "Arial",
        }}
      >
        <h1>Language Switcher</h1>
        <button
          onClick={() => setLanguage("English")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          English
        </button>

        <button
          onClick={() => setLanguage("Telugu")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          Telugu
        </button>
        <WelcomeMessage />
      </div>
    </LanguageContext.Provider>
  );
}
export default App;