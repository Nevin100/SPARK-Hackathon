// // src/Login.js
// import React, { useState } from "react";
// import axios from "axios";
// import "./Signup.css";
// import logo from "./logo.jpg";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     password: ""
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await axios.post("mongodb+srv://root:sanidhyavats@signuplogin.oojkz.mongodb.net/users", formData);
//       const response = await axios.post("http://localhost:8000/api/signup", formData);
//       setMessage(response.data.message);
//       localStorage.setItem("token", response.data.token);
//     } catch (error) {
//       if (error.response && error.response.data) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <div>
      
//         <div className="signup-container">
//           <div className="form-wrapper">
//             <div className="container">
//               <div className="container1">
//                 <h1 className="title">Login</h1>
//                 <form onSubmit={handleSubmit}>
//                   <div className="input-group">
//                     <label htmlFor="name">Username</label>
//                     <input
//                       type="text"
//                       id="name"
//                       placeholder="Enter your name"
//                       value={formData.name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="input-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                       type="password"
//                       id="password"
//                       placeholder="Enter your password"
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <button type="submit" id="button1">Submit</button>
//                 </form>
//                 {message && <p>{message}</p>}
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>
    
//   );
// };

// export default Login;

// src/Login.js
import React, { useState } from "react";
import "./Signup.css";
import logo from "./logo.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        localStorage.setItem("token", data.token);
      } else {
        setMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div className="form-wrapper">
          <div className="container">
            <div className="container1">
              <h1 className="title">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" id="button1">Submit</button>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
