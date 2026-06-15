import { CheckCircle, ArrowRight, Star, Award, Clock, Users } from "lucide-react";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface HomePageProps {
  onNavigate: (page: Page, anchor?: string) => void;
}

const engagements = [
  {
    icon: <Award size={24} className="text-[#ff6c1d]" />,
    title: "Expertise certifiée",
    desc: "Techniciens formés et certifiés aux dernières normes de pose vitrage automobile.",
  },
  {
    icon: <Clock size={24} className="text-[#ff6c1d]" />,
    title: "Intervention rapide",
    desc: "Remplacement réalisé en moins de 2 heures. Prise en charge le jour même selon disponibilité.",
  },
  {
    icon: <CheckCircle size={24} className="text-[#ff6c1d]" />,
    title: "Garantie 2 ans",
    desc: "Chaque prestation est garantie 2 ans, pièces et main d'œuvre incluses.",
  },
  {
    icon: <Users size={24} className="text-[#ff6c1d]" />,
    title: "Prise en charge assurance",
    desc: "Nous gérons directement les démarches avec votre assureur pour vous simplifier la vie.",
  },
];

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "8 000+", label: "Clients satisfaits" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "2h", label: "Délai d'intervention moyen" },
];

const testimonials = [
  {
    name: "Marie L.",
    rating: 5,
    text: "Remplacement de pare-brise réalisé en moins de 2h, personnel très professionnel et prix compétitif. Je recommande vivement !",
  },
  {
    name: "Thomas R.",
    rating: 5,
    text: "Rénovation des phares de ma berline : résultat bluffant ! On dirait un véhicule neuf. Merci à l'équipe Vehiglass.",
  },
  {
    name: "Sandrine M.",
    rating: 5,
    text: "Devis rapide, rendez-vous obtenu le lendemain. Équipe à l'écoute et travail soigné. Très satisfaite.",
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526459915562-c5ca724b1d02?w=1600&h=900&fit=crop&auto=format')",
            backgroundColor: "#0d1526",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1526]/88 via-[#0d1526]/72 to-[#0d1526]" />

        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2/9 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6c1d]/20 to-transparent" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6c1d]/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff6c1d]/40 bg-[#ff6c1d]/10 text-[#ff6c1d] text-xs tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6c1d] animate-pulse" />
            Spécialiste vitrage automobile
          </div>

          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
            className="text-5xl md:text-7xl lg:text-8xl text-white uppercase mb-6 leading-none"
          >
            La clarté,{" "}
            <span className="text-[#ff6c1d]">notre métier.</span>
          </h1>

          <p className="text-[#a0bcd4] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Vehiglass vous accompagne pour tout remplacement ou réparation de vitrage automobile.
            Intervention rapide, résultat impeccable, prix transparents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-all duration-200 group"
            >
              Prendre rendez-vous
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/25 text-[#e8edf5] hover:border-[#ff6c1d]/60 hover:text-[#ff6c1d] transition-all duration-200"
            >
              Voir nos services
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7a9bbf] text-xs">
          <span className="tracking-widest uppercase">Défiler</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#ff6c1d]/60 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#121e35] border-y border-[rgba(3,62,255,0.15)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  className="text-4xl md:text-5xl text-[#ff6c1d] mb-1"
                >
                  {stat.value}
                </p>
                <p className="text-[#7a9bbf] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements & valeurs */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Nos engagements</p>
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-4xl md:text-5xl text-white uppercase"
          >
            Ce qui nous distingue
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 p-6 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)] hover:border-[#ff6c1d]/30 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#ff6c1d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff6c1d]/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  className="text-white text-xl uppercase mb-1"
                >
                  {item.title}
                </h3>
                <p className="text-[#7a9bbf] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-[#080f1d]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Ce que nous faisons</p>
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-4xl md:text-5xl text-white uppercase"
              >
                Nos prestations
              </h2>
            </div>
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 text-[#ff6c1d] text-sm hover:text-[#ff8a47] transition-colors group shrink-0"
            >
              Voir tous les services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1618934116136-16d28f184b10?w=600&h=400&auto=format&fit=crop",
                title: "Vitrages automobiles",
                desc: "Pare-brise, glaces latérales, lunette arrière — remplacement toutes marques.",
                alt: "Remplacement de vitrage automobile",
                anchor: "#vitrages"
              },
              {
                img: "https://images.unsplash.com/photo-1528964132366-4409d2d4a862?w=600&h=400&fit=crop&auto=format",
                title: "Rénovation de phares",
                desc: "Polissage et restauration des optiques pour retrouver éclat et sécurité.",
                alt: "Rénovation de phare automobile",
                anchor: "#optiques"
              },
              {
                img: "https://images.unsplash.com/photo-1771340012319-0b4fca008b54?w=600&h=400&fit=crop&auto=format",
                title: "Services complémentaires",
                desc: "Calibrage ADAS, traitement hydrophobe, télépeage et bien plus.",
                alt: "Services complémentaires garage",
                anchor: "#complementaires"
              },
            ].map((card) => (
              <button
                key={card.title}
                onClick={() => onNavigate("services", card.anchor)}
                className="group rounded-xl overflow-hidden bg-[#121e35] border border-[rgba(3,62,255,0.12)] hover:border-[#ff6c1d]/40 transition-all duration-300 text-left"
              >
                <div className="relative h-48 overflow-hidden bg-[#1a2d4a]">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121e35]/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    className="text-white text-xl uppercase mb-2 group-hover:text-[#ff6c1d] transition-colors"
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#7a9bbf] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Avis clients</p>
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-4xl md:text-5xl text-white uppercase"
          >
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)]"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#ff6c1d] fill-[#ff6c1d]" />
                ))}
              </div>
              <p className="text-[#a0bcd4] text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <p
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-white uppercase tracking-wide"
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-gradient-to-br from-[#033eff] to-[#ff6c1d]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-4xl md:text-5xl text-white uppercase mb-4"
          >
            Un vitrage endommagé ? Agissez vite.
          </h2>
          <p className="text-blue-200 mb-8 text-base max-w-xl mx-auto leading-relaxed">
            Ne roulez pas avec un pare-brise fissuré. Contactez-nous dès aujourd'hui pour un devis gratuit et une intervention rapide.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-colors group"
          >
            Demander un devis gratuit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
