import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { FAQPage } from "./components/FAQPage";

type Page = "home" | "services" | "about" | "contact" | "faq";

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

  const handleNavigate = (page: Page, anchor?: string) => {
    const normalizedAnchor = anchor ? anchor.replace(/^#/, "") : undefined;
    navigate({ pathname: pageRoutes[page], hash: normalizedAnchor ? `#${normalizedAnchor}` : undefined });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

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
