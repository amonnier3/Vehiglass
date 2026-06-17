import { Phone, MapPin, Clock } from "lucide-react";
import logo from "../../imports/vehiglass_logo.png";
import facebookIcon from "../../imports/facebook.svg";
import instagramIcon from "../../imports/instagram.svg";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface FooterProps {
  onNavigate: (page: Page, anchor?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="bg-[var(--vg-alt)] border-t border-[var(--vg-b1)] pt-14 pb-8"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <button onClick={() => onNavigate("home")} className="mb-4 block">
              <img src={logo} alt="Vehiglass" className="h-14 w-auto" />
            </button>
            <p className="text-[var(--vg-t3)] text-sm leading-relaxed">
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
                      className="text-[var(--vg-t3)] hover:text-[#ff6c1d] text-sm transition-colors"
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
              <li className="flex items-start gap-3 text-sm text-[var(--vg-t3)]">
                <MapPin size={16} className="text-[#ff6c1d] mt-0.5 shrink-0" />
                12 Rue de l'Ayguelongue, 64160 Morlaàs
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--vg-t3)]">
                <Phone size={16} className="text-[#ff6c1d] shrink-0" />
                06 58 13 04 52
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--vg-t3)]">
                <Clock size={16} className="text-[#ff6c1d] mt-0.5 shrink-0" />
                Lun – Ven : 10h – 19h
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--vg-t3)]">
                <img src={instagramIcon} alt="Instagram Vehiglass" className="size-[16px]" />
                vehiglass64
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--vg-t3)]">
                <img src={facebookIcon} alt="facebook Vehiglass" className="size-[16px]" />
                vehiglass64
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--vg-b1)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[var(--vg-t4)] text-xs">
            © 2026 Vehiglass — Tous droits réservés
          </p>
          <p className="text-[var(--vg-t4)] text-xs">
            Spécialiste vitrage automobile
          </p>
        </div>
      </div>
    </footer>
  );
}
