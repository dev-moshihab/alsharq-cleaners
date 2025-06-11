import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import { Route, Routes } from "react-router-dom";
import TabluRay from "./TabluRay";
import NewProduct from "./NewProduct";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const reveal = () => {
      const pages = document.querySelectorAll(".page");
      pages.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });

      if (window.scrollY > 200) setShowTopBtn(true);
      else setShowTopBtn(false);
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <a
                href="https://wa.me/+963947519598"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="whatsapp-icon"
                />
              </a>
            </>
          }
        />


        <Route path="/TabluRay" element={<TabluRay/>} ></Route>
        <Route path="/NewProduct" element={<NewProduct/>} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
