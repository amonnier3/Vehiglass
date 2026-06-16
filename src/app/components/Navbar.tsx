import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Theme } from "../App";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, anchor?: string) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Accueil" },
  { id: "services", label: "Services" },
  { id: "about", label: "À propos" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export function Navbar({ currentPage, onNavigate, theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--vg-nav)]/96 backdrop-blur-md border-b border-[var(--vg-nav-border)]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav("home")} className="flex items-center gap-1 bg-white/5 rounded-md px-2 py-1">
          <div className="w-9 h-9 rounded-full bg-white border border-2 border-[#033eff] flex items-center justify-center p-px">
            <div className="rounded-full border border-3 border-[#ff6c1d] flex items-center justify-center p-px">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 423 423" version="1.1">
                <path d="M 118 127.131 C 78.051 128.596, 67.972 129.453, 63.500 131.766 C 58.935 134.127, 52.365 140.728, 49.057 146.275 C 45.001 153.077, 8.395 227.181, 2.758 240 C -0.128 246.565, 0.029 254.484, 3.107 257.561 C 6.219 260.673, 17.829 263.641, 31.769 264.888 C 37.671 265.416, 51.950 266.765, 63.500 267.886 C 75.050 269.007, 93.950 270.653, 105.500 271.543 C 158.412 275.621, 267.613 275.361, 322.500 271.026 C 374.987 266.880, 404.565 263.448, 414.148 260.390 C 418.763 258.918, 419.662 257.812, 421.450 251.410 C 422.506 247.628, 418.148 236.527, 405.128 209.830 C 398.066 195.349, 388.788 176.300, 384.510 167.500 C 372.490 142.769, 366.351 134.483, 357.394 130.903 C 355.670 130.214, 337.527 129.007, 312.500 127.916 C 267.244 125.943, 161.974 125.518, 118 127.131 M 157 137.672 C 129.724 138.196, 87.067 140.114, 79.500 141.158 C 63.093 143.419, 62.964 143.600, 32.084 207.354 C 17.955 236.524, 15.813 241.566, 16.599 243.801 C 18.294 248.619, 22.299 249.884, 42.623 252.017 C 53.005 253.106, 62.625 254.214, 64 254.479 C 68.247 255.298, 104.127 257.901, 133 259.486 C 165.339 261.262, 247.663 261.515, 280 259.939 C 312.371 258.361, 345.303 255.632, 345.617 254.500 C 346.003 253.114, 336.173 245.170, 329.242 241.266 C 318.092 234.986, 309.862 232.794, 295.500 232.278 C 280.772 231.749, 273.327 233.018, 262.583 237.890 C 255.039 241.310, 249.234 245.183, 243.084 250.897 C 238.878 254.804, 238.365 255, 232.334 255 C 228.850 255, 226 254.709, 226 254.353 C 226 252.654, 234.092 244.156, 240.739 238.874 C 250.367 231.223, 262.309 225.505, 274.095 222.902 C 281.780 221.205, 285.786 220.911, 296 221.294 C 303.138 221.561, 311.065 222.477, 314.480 223.428 C 328.757 227.406, 342.639 235.479, 353.500 246.119 C 361.645 254.098, 360.160 253.827, 382.778 251.458 C 405.926 249.034, 408.569 246.747, 403.013 233.948 C 401.235 229.852, 391.347 209.400, 381.039 188.500 C 360.820 147.504, 358.728 144.350, 350.238 142.064 C 337.947 138.755, 229.273 136.285, 157 137.672"
                  stroke="black" fill="black" fillRule="evenodd" strokeWidth={9} strokeOpacity={1} />
              </svg>
            </div>
          </div>
          <span
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
            className="text-xl text-white font-bold tracking-widest uppercase"
          >
            <span className="text-[#033eff]">Vehi</span>
            <span className="text-[#ff6c1d]">glass</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={`px-4 py-2 rounded-md text-sm transition-all duration-200 ${currentPage === item.id
                  ? "bg-[#ff6c1d]/15 text-[#ff6c1d]"
                  : "text-[var(--vg-t3)] hover:text-[var(--vg-t1)] hover:bg-[var(--vg-t1)]/5"
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-md text-[var(--vg-t3)] border border-[var(--vg-b1)] flex items-center justify-center hover:border-[#ff6c1d] hover:text-[#ff6c1d] transition-all duration-200"
            aria-label={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <button
            onClick={() => handleNav("contact")}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#ff6c1d] text-white text-sm font-semibold hover:bg-[#ff8a47] transition-colors duration-200"
          >
            Nous contacter
          </button>
        </div>


        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="text-[var(--vg-t3)] p-1.5"
            aria-label="Changer le thème"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-[var(--vg-t1)] p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div >

      {/* Mobile menu */}
      {
        menuOpen && (
          <div className="md:hidden bg-[var(--vg-page)] border-t border-[var(--vg-b1)] px-5 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left px-4 py-3 rounded-md text-sm transition-colors ${currentPage === item.id
                  ? "bg-[#ff6c1d]/15 text-[#ff6c1d]"
                  : "text-[var(--vg-t3)] hover:text-[var(--vg-t1)] hover:bg-[var(--vg-t1)]/5"
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
        )
      }
    </nav >
  );
}
