import { Phone, MapPin, Clock } from "lucide-react";
import logo from "../../imports/vehiglass_logo.png";
import facebookIcon from "../../imports/facebook.svg";
import instagramIcon from "../../imports/instagram.svg";
import site from "../../content/site.json";

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
              {site.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-[#ff6c1d] uppercase tracking-widest text-sm mb-4"
            >
              {site.footer.navigationTitle}
            </h4>
            <ul className="flex flex-col gap-2">
              {site.navigation.items.map((item) => {
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id as Page)}
                      className="text-[var(--vg-t3)] hover:text-[#ff6c1d] text-sm transition-colors"
                    >
                      {item.label}
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
              {site.footer.contactTitle}
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-[var(--vg-t3)]">
                <MapPin size={16} className="text-[#ff6c1d] mt-0.5 shrink-0" />
                {site.contact.addressLines.join(", ")}
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--vg-t3)]">
                <Phone size={16} className="text-[#ff6c1d] shrink-0" />
                {site.contact.phone}
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--vg-t3)]">
                <Clock size={16} className="text-[#ff6c1d] mt-0.5 shrink-0" />
                {site.footer.hours}
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--vg-t3)]">
                <img src={instagramIcon} alt="Instagram Vehiglass" className="size-[16px]" />
                {site.contact.socialHandle}
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--vg-t3)]">
                <img src={facebookIcon} alt="facebook Vehiglass" className="size-[16px]" />
                {site.contact.socialHandle}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--vg-b1)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[var(--vg-t4)] text-xs">
            {site.footer.copyright}
          </p>
          <p className="text-[var(--vg-t4)] text-xs">
            {site.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
