import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import Workflow from "./components/Workflow.jsx";
import Footer from "./components/Footer.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Chatgpt from "./pages/Chatgpt/chatbot/Chatgpt.jsx"; // Import the ChatGPT page
import Login from "./pages/signup-frontend/Login.jsx"
import Signup from "./pages/signup-frontend/Signup.jsx"
import { useEffect, useState } from "react";
import { div } from "framer-motion/client";
import Loader from "./components/Loader.jsx";


const App = () => {
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)      
    }, 5700);
  },[])
  return (
    <div>
      {loading ? <Loader/> : (
      <Router>
        {/* <Login/> */}
        <Navbar />
        <div className="absolute inset-0 -z-10 min-h-screen-full overflow-x-hidden w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <div className="max-w-7xl mx-auto pt-20 px-6 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<>
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <Testimonials />
                <Footer />
              </>} />
              <Route path="/chatgpt" element={<Chatgpt />} /> {/* Route to ChatGPT page */}
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </div>
        </div>
      </Router>)}
    </div>
  );
};

export default App;

