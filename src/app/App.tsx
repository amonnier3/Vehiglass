import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { FAQPage } from "./components/FAQPage";

type Page = "home" | "services" | "about" | "contact" | "faq";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "services" && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === "about" && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "faq" && <FAQPage onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
