import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { BenefitPage } from "./pages/BenefitPage";
import { OurClassesPage } from "./pages/OurClassesPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { Footer } from "./components/Footer";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(window.scrollY === 0);

  useEffect(() => {
    const handleScrolling = () => {
      // top of the page
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        return;
      }

      // not in the top of the page
      setIsTopOfPage(false);
    };

    handleScrolling();
    window.addEventListener("scroll", handleScrolling);

    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

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
