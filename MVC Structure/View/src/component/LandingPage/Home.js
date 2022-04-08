import React from "react";
import Footer from "../Shared/Footer/Footer";
import Chefs from "./Chefs/Chefs";
import Contact from "./Contact/Contact";
import "./Home";
import HomeHeader from "./HomeHeader";
import Services from "./Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="home-container">
      <HomeHeader></HomeHeader>
      <Services></Services>
      <Chefs></Chefs>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
