
// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import "./Signup.css";
// import Loader from "../../components/Loader";

// const Signup = () => {
//   const [loading,setLoading]=useState(false)
//   useEffect(()=>{
//     setLoading(true)
//     setTimeout(() => {
//       setLoading(false)
//     }, 2750);
//   },[])
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     description: "",
//     linkedin: "",
//     github: "",
//     location: "",
//     college: ""
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
//       const response = await axios.post("http://localhost:8000/api/signup", formData);
//       setMessage(response.data.message);
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
//       {loading ? <Loader/>:(
//       <div className="signup-container">
//         <div className="bg-image"></div>
//         <div className="form-wrapper">
//           <div className="container">
//             <div className="container1">
//               <h1 className="title">Sign up</h1>
//               <p>
//                 Already have an account? <a href="/login">Login here</a>
//               </p>
//               <form onSubmit={handleSubmit}>
//                 <div className="input-group">
//                   <label htmlFor="name">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     placeholder="Enter your name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <label htmlFor="email">Email ID</label>
//                   <input
//                     type="email"
//                     id="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <h1 className="title1">Details</h1>
//                 <div className="input-group">
//                   <label htmlFor="description">Description</label>
//                   <input
//                     type="text"
//                     id="description"
//                     placeholder="Tell us about yourelf"
//                     value={formData.description}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <label htmlFor="linkedin">LinkedIn</label>
//                   <input
//                     type="text"
//                     id="linkedin"
//                     placeholder="Enter your LinkedIn link"
//                     value={formData.linkedin}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <label htmlFor="github">GitHub</label>
//                   <input
//                     type="text"
//                     id="github"
//                     placeholder="Enter your Github link"
//                     value={formData.github}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <label htmlFor="location">Location</label>
//                   <input
//                     type="text"
//                     id="location"
//                     placeholder="Enter your location"
//                     value={formData.location}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <label htmlFor="college">College</label>
//                   <input
//                     type="text"
//                     id="college"
//                     placeholder="Enter your College"
//                     value={formData.college}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <button type="submit" id="button1">Submit</button>
//               </form>
//               {message && <p>{message}</p>}
//             </div>
//           </div>
//         </div>
//       </div>)}
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from "react";
import "./Signup.css";
import Loader from "../../components/Loader";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
    linkedin: "",
    github: "",
    location: "",
    college: ""
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2750);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {loading ? <Loader /> : (
        <div className="signup-container">
          <div className="bg-image"></div>
          <div className="form-wrapper">
            <div className="container">
              <div className="container1">
                <h1 className="title">Sign up</h1>
                <p>Already have an account? <a href="/login">Login here</a></p>
                <form onSubmit={handleSubmit}>
                  {/* Input fields */}
                  {Object.keys(formData).map((key) => (
                    <div className="input-group" key={key}>
                      <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                      <input
                        type={key === "password" ? "password" : "text"}
                        id={key}
                        placeholder={`Enter your ${key}`}
                        value={formData[key]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                  <button type="submit" id="button1">Submit</button>
                </form>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
