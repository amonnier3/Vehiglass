import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { FAQPage } from "./components/FAQPage";

type Page = "home" | "services" | "about" | "contact" | "faq";
export type Theme = "dark" | "light";

const pageRoutes: Record<Page, string> = {
  home: "/",
  services: "/services",
  about: "/about",
  contact: "/contact",
  faq: "/faq",
};

function getPageFromPath(pathname: string): Page {
  switch (pathname) {
    case "/services":
      return "services";
    case "/about":
      return "about";
    case "/contact":
      return "contact";
    case "/faq":
      return "faq";
    default:
      return "home";
  }
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = getPageFromPath(location.pathname);
  const [theme, setTheme] = useState<Theme>("dark");

  // Scroll vers le haut quand il n'y a pas d'ancre
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleNavigate = (page: Page, anchor?: string) => {
    const normalizedAnchor = anchor ? anchor.replace(/^#/, "") : undefined;
    navigate({ pathname: pageRoutes[page], hash: normalizedAnchor ? `#${normalizedAnchor}` : undefined });
  };

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div
      className={`min-h-screen bg-[var(--vg-page)] text-[var(--vg-t1)] font-sans ${theme === "dark" ? "theme-dark" : "theme-light"}`}
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} anchor={location.hash} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage onNavigate={handleNavigate} />} />
          <Route path="*" element={<HomePage onNavigate={handleNavigate} />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
