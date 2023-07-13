import React, { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { BenefitPage } from "./pages/BenefitPage";
import { OurClassesPage } from "./pages/OurClassesPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { Footer } from "./components/Footer";
function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    // if scrollY===0 => isTOpOfPage is true, otherwise false
    const handleScrolling = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  });
  return (
    <div className="app">
      <NavBar isTopOfPage={isTopOfPage} />
      <HomePage />
      <BenefitPage />
      <OurClassesPage />
      <ContactUsPage />
      <Footer />
    </div>
  );
}

export default App;
