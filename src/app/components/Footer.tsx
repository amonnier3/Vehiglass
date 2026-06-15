import { Phone, MapPin, Clock } from "lucide-react";
import logo from "../../imports/vehiglass_logo.png";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="bg-[#080f1d] border-t border-[rgba(3,62,255,0.15)] pt-14 pb-8"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <button onClick={() => onNavigate("home")} className="mb-4 block">
              <img src={logo} alt="Vehiglass" className="h-14 w-auto" />
            </button>
            <p className="text-[#7a9bbf] text-sm leading-relaxed">
              Votre spécialiste en vitrage automobile. Remplacement, réparation et rénovation pour tous types de véhicules.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-[#ff6c1d] uppercase tracking-widest text-sm mb-4"
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {(["home", "services", "about", "contact", "faq"] as Page[]).map((page) => {
                const labels: Record<Page, string> = {
                  home: "Accueil",
                  services: "Services",
                  about: "À propos",
                  contact: "Contact",
                  faq: "FAQ",
                };
                return (
                  <li key={page}>
                    <button
                      onClick={() => onNavigate(page)}
                      className="text-[#7a9bbf] hover:text-[#ff6c1d] text-sm transition-colors"
                    >
                      {labels[page]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-[#ff6c1d] uppercase tracking-widest text-sm mb-4"
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-[#7a9bbf]">
                <MapPin size={16} className="text-[#ff6c1d] mt-0.5 shrink-0" />
                12 Route de Lyon, 69800 Saint-Priest
              </li>
              <li className="flex items-center gap-3 text-sm text-[#7a9bbf]">
                <Phone size={16} className="text-[#ff6c1d] shrink-0" />
                04 78 12 34 56
              </li>
              <li className="flex items-start gap-3 text-sm text-[#7a9bbf]">
                <Clock size={16} className="text-[#ff6c1d] mt-0.5 shrink-0" />
                Lun – Ven : 8h – 18h<br />Sam : 9h – 13h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(3,62,255,0.1)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#4a6a8a] text-xs">
            © 2026 Vehiglass — Tous droits réservés
          </p>
          <p className="text-[#4a6a8a] text-xs">
            Spécialiste vitrage automobile depuis 2008
          </p>
        </div>
      </div>
    </footer>
  );
}
