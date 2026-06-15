import { Phone, MapPin, Clock, Mail, ArrowRight } from "lucide-react";

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

export function ContactPage() {
  const todayEn = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayFr = dayMap[todayEn] ?? "";

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }} className="pt-16">
      {/* Header */}
      <section className="py-20 bg-[#080f1d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#033eff]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Nous joindre</p>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl text-white uppercase mb-6"
          >
            Contact
          </h1>
          <p className="text-[#7a9bbf] text-lg max-w-xl mx-auto leading-relaxed">
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
                    className="text-4xl text-white hover:text-[#ff6c1d] transition-colors"
                  >
                    06 58 13 04 52
                  </a>
                  <p className="text-[#7a9bbf] text-sm">Appel gratuit, pas de surcoût</p>
                </div>
              </div>
              <p className="text-[#7a9bbf] text-sm">
                Disponible du lundi au vendredi de 10h à 19h.
              </p>
            </div>

            {/* Address */}
            <div className="p-6 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff6c1d]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#ff6c1d]" />
                </div>
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-xl uppercase mb-1">
                    Adresse
                  </p>
                  <p className="text-[#a0bcd4] text-sm leading-relaxed">
                    12 Rue de l'Ayguelongue<br />64160 Morlaàs
                  </p>
                  <a
                    href="https://maps.app.goo.gl/4Sc5FgvrzVbiv6BMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#ff6c1d] text-sm mt-3 hover:text-[#ff8a47] transition-colors group"
                  >
                    Ouvrir dans Google Maps
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff6c1d]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={18} className="text-[#ff6c1d]" />
                </div>
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-xl uppercase mb-1">
                    Email
                  </p>
                  <a href="mailto:contact@vehiglass.fr" className="text-[#a0bcd4] text-sm hover:text-[#ff6c1d] transition-colors">
                    vehiglass64@gmail.com
                  </a>
                  <p className="text-[#7a9bbf] text-xs mt-1">Réponse sous 24h en jours ouvrés</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff6c1d]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={18} className="text-[#ff6c1d]" />
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-xl uppercase mb-4">
                    Horaires d'ouverture
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {hours.map((h) => {
                      const isToday = h.day === todayFr;
                      return (
                        <div
                          key={h.day}
                          className={`flex justify-between text-sm py-1.5 border-b border-[rgba(3,62,255,0.06)] last:border-0 ${isToday ? "text-[#ff6c1d]" : h.time === "Fermé" ? "text-[#4a6a8a]" : "text-[#a0bcd4]"
                            }`}
                        >
                          <span className={isToday ? "font-semibold" : ""}>{h.day}</span>
                          <span>{h.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map + form */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-[rgba(3,62,255,0.15)] h-64 bg-[#121e35] relative">
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
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-xl uppercase">
                    Vehiglass
                  </p>
                  <p className="text-[#7a9bbf] text-sm">12 Rue de l'Ayguelongue, 64160 Morlaàs</p>
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
            <div className="p-8 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)]">
              <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Formulaire</p>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-3xl uppercase mb-6">
                Demande de devis
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Votre demande a bien été envoyée ! Nous vous contacterons dans les plus brefs délais.");
                }}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#7a9bbf] text-xs uppercase tracking-wide mb-1.5">Prénom</label>
                    <input
                      type="text"
                      required
                      placeholder="Marc"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1a2d4a] border border-[rgba(3,62,255,0.2)] text-[#e8edf5] text-sm placeholder:text-[#4a6a8a] focus:outline-none focus:border-[#ff6c1d] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7a9bbf] text-xs uppercase tracking-wide mb-1.5">Nom</label>
                    <input
                      type="text"
                      required
                      placeholder="Dupont"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1a2d4a] border border-[rgba(3,62,255,0.2)] text-[#e8edf5] text-sm placeholder:text-[#4a6a8a] focus:outline-none focus:border-[#ff6c1d] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#7a9bbf] text-xs uppercase tracking-wide mb-1.5">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1a2d4a] border border-[rgba(3,62,255,0.2)] text-[#e8edf5] text-sm placeholder:text-[#4a6a8a] focus:outline-none focus:border-[#ff6c1d] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#7a9bbf] text-xs uppercase tracking-wide mb-1.5">Type de véhicule</label>
                  <input
                    type="text"
                    placeholder="Ex : Renault Clio 2021"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1a2d4a] border border-[rgba(3,62,255,0.2)] text-[#e8edf5] text-sm placeholder:text-[#4a6a8a] focus:outline-none focus:border-[#ff6c1d] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#7a9bbf] text-xs uppercase tracking-wide mb-1.5">Service souhaité</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-[#1a2d4a] border border-[rgba(3,62,255,0.2)] text-[#e8edf5] text-sm focus:outline-none focus:border-[#ff6c1d] transition-colors">
                    <option value="">Sélectionner un service</option>
                    <option>Remplacement pare-brise</option>
                    <option>Remplacement glace latérale</option>
                    <option>Remplacement lunette arrière</option>
                    <option>Rénovation phares</option>
                    <option>Remplacement phares</option>
                    <option>Calibrage ADAS</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#7a9bbf] text-xs uppercase tracking-wide mb-1.5">Message (optionnel)</label>
                  <textarea
                    rows={3}
                    placeholder="Décrivez votre situation..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#1a2d4a] border border-[rgba(3,62,255,0.2)] text-[#e8edf5] text-sm placeholder:text-[#4a6a8a] focus:outline-none focus:border-[#ff6c1d] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-colors flex items-center justify-center gap-2 group mt-2"
                >
                  Envoyer ma demande
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
