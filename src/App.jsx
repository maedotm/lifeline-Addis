import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import Counter from "./components/counter";
import Partner from "./components/partner";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import SocialLinks from "./components/socialLinks"; 
import Blog from "./components/blog"; // Import Blog

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
  
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Counter data={landingPageData.Counter} />
      <Services data={landingPageData.Services} />
      <Partner data={landingPageData.Partner} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <SocialLinks />
      {/* <Blog data={landingPageData.Blog} /> Add the Blog component */}
    </div>
  );
};

export default App;