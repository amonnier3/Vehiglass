import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../imports/vehiglass_logo.png";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Accueil" },
  { id: "services", label: "Services" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0d1526]/96 backdrop-blur-md border-b border-[rgba(3,62,255,0.2)]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav("home")} className="flex items-center">
          <img src={logo} alt="Vehiglass — Vitrage Automobile" className="h-11 w-auto" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={`px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                  currentPage === item.id
                    ? "bg-[#ff6c1d]/15 text-[#ff6c1d]"
                    : "text-[#7a9bbf] hover:text-[#e8edf5] hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <button
          onClick={() => handleNav("contact")}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-[#ff6c1d] text-white text-sm font-semibold hover:bg-[#ff8a47] transition-colors duration-200"
        >
          Nous contacter
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#e8edf5] p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1526] border-t border-[rgba(3,62,255,0.15)] px-5 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left px-4 py-3 rounded-md text-sm transition-colors ${
                currentPage === item.id
                  ? "bg-[#ff6c1d]/15 text-[#ff6c1d]"
                  : "text-[#7a9bbf] hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-2 px-4 py-3 rounded-md bg-[#ff6c1d] text-white text-sm font-semibold"
          >
            Nous contacter
          </button>
        </div>
      )}
    </nav>
  );
}
