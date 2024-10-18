import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="absolute inset-0 -z-10 min-h-screen-full overflow-x-hidden w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="max-w-7xl mx-auto pt-20 px-6 overflow-x-hidden  ">
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
