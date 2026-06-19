import { Phone, MapPin, Clock, Mail, ArrowRight, Facebook, Instagram, ThumbsUp } from "lucide-react";
import { ContactForm } from "./ContactForm";

const hours = [
  { day: "Lundi", time: "10h00 – 19h00" },
  { day: "Mardi", time: "10h00 – 19h00" },
  { day: "Mercredi", time: "10h00 – 19h00" },
  { day: "Jeudi", time: "10h00 – 19h00" },
  { day: "Vendredi", time: "10h00 – 19h00" },
  { day: "Samedi", time: "Fermé" },
  { day: "Dimanche", time: "Fermé" },
];

const dayMap: Record<string, string> = {
  Monday: "Lundi",
  Tuesday: "Mardi",
  Wednesday: "Mercredi",
  Thursday: "Jeudi",
  Friday: "Vendredi",
  Saturday: "Samedi",
  Sunday: "Dimanche",
};

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[var(--vg-card)] border border-[var(--vg-b1)] p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#ff6c1d]/10 flex items-center justify-center shrink-0 mt-0.5">
          {icon}
        </div>
        <div className="flex-1">
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[var(--vg-t1)] text-xl uppercase mb-2">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  const todayEn = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayFr = dayMap[todayEn] ?? "";

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }} className="pt-16">
      {/* Header */}
      <section className="py-20 bg-[var(--vg-alt)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#033eff]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Nous joindre</p>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl text-[var(--vg-t1)] uppercase mb-6"
          >
            Contact
          </h1>
          <p className="text-[var(--vg-t3)] text-lg max-w-xl mx-auto leading-relaxed">
            Une question, un devis, une urgence ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: infos */}
          <div className="flex flex-col gap-6">
            {/* Phone CTA */}
            <div className="p-8 rounded-xl bg-[#ff6c1d]/10 border border-[#ff6c1d]/30">
              <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Appel direct</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#ff6c1d] flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <a
                    href="tel:0478123456"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    className="text-4xl text-[var(--vg-t1)] hover:text-[#ff6c1d] transition-colors"
                  >
                    06 58 13 04 52
                  </a>
                  <p className="text-[var(--vg-t3)] text-sm">Appel gratuit, pas de surcoût</p>
                </div>
              </div>
              <p className="text-[var(--vg-t3)] text-sm">
                Disponible du lundi au vendredi de 10h à 19h.
              </p>
            </div>

            {/* Address */}
            <InfoCard icon={<MapPin size={18} className="text-[#ff6c1d]" />} title="Adresse">
              <p className="text-[var(--vg-t2)] text-sm leading-relaxed">
                12 Rue de l'Ayguelongue<br />64160 Morlaàs
              </p>
              <a href="https://maps.app.goo.gl/4Sc5FgvrzVbiv6BMA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#ff6c1d] text-sm mt-3 hover:text-[#ff8a47] transition-colors group">
                Ouvrir dans Google Maps
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </InfoCard>

            {/* Email */}
            <InfoCard icon={<Mail size={18} className="text-[#ff6c1d]" />} title="Email">
              <a href="mailto:vehiglass64@gmail.com" className="text-sm text-[var(--vg-t2)] hover:text-[#ff6c1d] transition-colors">
                vehiglass64@gmail.com
              </a>
              <p style={{ color: "var(--vg-t3)" }} className="text-xs mt-1">Réponse sous 24h en jours ouvrés</p>
            </InfoCard>

            {/* Hours */}
            <InfoCard icon={<Clock size={18} className="text-[#ff6c1d]" />} title="Horaires d'ouverture">
              <div className="flex flex-col gap-1.5 mt-1">
                {hours.map((h) => {
                  const isToday = h.day === todayFr;
                  return (
                    <div
                      key={h.day}
                      style={
                        isToday
                          ? { color: "#ff6c1d", borderBottomColor: "var(--vg-b1)" }
                          : h.time === "Fermé"
                            ? { color: "var(--vg-t4)", borderBottomColor: "var(--vg-b1)" }
                            : { color: "var(--vg-t2)", borderBottomColor: "var(--vg-b1)" }
                      }
                      className="flex justify-between text-sm py-1.5 border-b last:border-0"
                    >
                      <span className={isToday ? "font-semibold" : ""}>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  );
                })}
              </div>
            </InfoCard>

            {/* Réseaux sociaux */}
            <InfoCard icon={<ThumbsUp size={18} className="text-[#ff6c1d]" />} title="Réseaux sociaux">
              <div className="flex items-center gap-4 mt-2">
                <a href="https://www.facebook.com/vehiglass64" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--vg-t2)] hover:text-[#ff6c1d] transition-colors flex items-center gap-1">
                  <Facebook />
                  vehiglass64
                </a>
                <a href="https://www.instagram.com/vehiglass64" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--vg-t2)] hover:text-[#ff6c1d] transition-colors flex items-center gap-1">
                  <Instagram />
                  vehiglass64
                </a>
              </div>
            </InfoCard>
          </div>

          {/* Right: map + form */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-[var(--vg-b1)] h-64 bg-[var(--vg-card)] relative">
              <img
                src="https://images.unsplash.com/photo-1779808109842-3be1f06929a7?w=800&h=400&fit=crop&auto=format"
                alt="Localisation garage Vehiglass"
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#ff6c1d] flex items-center justify-center shadow-lg shadow-[#ff6c1d]/30">
                  <MapPin size={22} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="text-center">
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xl text-[var(--vg-t1)] uppercase">
                    Vehiglass
                  </p>
                  <p className="text-sm text-[var(--vg-t3)]">12 Rue de l'Ayguelongue, 64160 Morlaàs</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/4Sc5FgvrzVbiv6BMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-[#ff6c1d] text-white text-sm font-semibold hover:bg-[#ff8a47] transition-colors"
                >
                  Voir sur la carte
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="p-8 rounded-xl border border-[var(--vg-b1)] bg-[var(--vg-card)]">
              <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Formulaire</p>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-3xl text-[var(--vg-t1)] uppercase mb-6">
                Demande de rendez-vous
              </h3>

              <ContactForm />

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
