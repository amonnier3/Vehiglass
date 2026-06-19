import { Award, Wrench, Users, ArrowRight } from "lucide-react";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface AboutPageProps {
  onNavigate: (page: Page, anchor?: string) => void;
}

const values = [
  {
    icon: <Award size={22} className="text-[#ff6c1d]" />,
    title: "Excellence",
    desc: "Chaque intervention est réalisée avec rigueur, en respectant les préconisations constructeur.",
  },
  {
    icon: <Users size={22} className="text-[#ff6c1d]" />,
    title: "Proximité",
    desc: "Un interlocuteur dédié, des explications claires, une transparence totale sur les prix.",
  },
  {
    icon: <Wrench size={22} className="text-[#ff6c1d]" />,
    title: "Expertise",
    desc: "Formation continue de notre équipe aux évolutions technologiques du vitrage automobile.",
  },
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }} className="pt-16">
      {/* Header */}
      <section className="py-20 bg-[var(--vg-alt)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#033eff]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Notre histoire</p>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl text-[var(--vg-t1)] uppercase mb-6"
          >
            À propos
          </h1>
          <p className="text-[var(--vg-t3)] text-lg max-w-2xl mx-auto leading-relaxed">
            Une passion pour l'automobile et un engagement envers la qualité depuis plus de 10 ans.
          </p>
        </div>
      </section>

      {/* Le gérant */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Le fondateur</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase mb-6"
            >
              Charles Thébaud
            </h2>
            <p className="text-[var(--vg-t2)] text-sm leading-relaxed mb-5">
              Passionné d'automobile depuis mon plus jeune âge, je débute ma carrière comme technicien vitrage en 2017 dans une grande enseigne nationale. Fort de 7 années d'expérience terrain, ainsi qu'une expérience de 2 ans en tant qu'expert automobile, je décide en 2025 de créer <strong style={{ color: "var(--vg-t1)" }}>Vehiglass</strong>, avec l'ambition d'offrir un service de proximité alliant qualité professionnelle et relation humaine.
            </p>
            <p className="text-[var(--vg-t2)] text-sm leading-relaxed mb-5">
              Ma philosophie est simple : traiter chaque véhicule comme s'il était le mien, et chaque client comme un ami à qui je donne la meilleur qualité de service.
            </p>
            <p className="text-[var(--vg-t2)] text-sm leading-relaxed mb-8">
              Certifié par le GNFA, je suis formé régulièrement aux nouvelles technologies du vitrage embarqué : systèmes ADAS, caméras intégrées, connectivité numérique.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Certification GNFA vitrage automobile",
                "10+ années d'expertise sectorielle",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-2.5 text-sm text-[var(--vg-t2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6c1d] shrink-0" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-[var(--vg-input)] h-96">
              <img
                src="https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=600&h=800&fit=crop&auto=format"
                alt="Technicien Vehiglass au travail"
                className="w-full h-full object-cover opacity-[var(--vg-img-op)]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#ff6c1d] text-white rounded-xl p-5 shadow-xl shadow-[#ff6c1d]/20">
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl font-bold leading-none">
                10+
              </p>
              <p className="text-xs font-semibold leading-tight mt-1">années<br />d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Le garage */}
      <section className="py-20 bg-[var(--vg-alt)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="relative order-2 md:order-1">
              <div className="rounded-xl overflow-hidden bg-[var(--vg-input)] h-80">
                <img
                  src="https://images.unsplash.com/photo-1758767355046-1986dda2d967?w=600&h=500&fit=crop&auto=format"
                  alt="Garage Vehiglass"
                  className="w-full h-full object-cover opacity-[var(--vg-img-op)]"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Notre atelier</p>
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase mb-6"
              >
                Le garage
              </h2>
              <p className="text-[var(--vg-t2)] text-sm leading-relaxed mb-5">
                Implanté à Morlaas, zone de Berlanne, depuis 2025, mon atelier de <strong className="text-[var(--vg-t1)]">200 m²</strong> est équipé des derniers outils de pose et de calibrage.
              </p>
              <p className="text-[var(--vg-t2)] text-sm leading-relaxed mb-8">
                Notre stock de vitrages couvre plus de <strong className="text-[var(--vg-t1)]">3 000 références</strong> — des modèles courants aux véhicules de collection, en passant également par les véhicules poids lourd et l'agricole.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "200 m²", label: "Surface atelier" },
                  { val: "3 000+", label: "Références en stock" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-[var(--vg-card)] border border-[var(--vg-b1)]">
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[#ff6c1d] text-3xl mb-1">
                      {stat.val}
                    </p>
                    <p className="text-[var(--vg-t3)] text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Ce qui nous guide</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase"
            >
              Nos valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-xl bg-[var(--vg-card)] border border-[var(--vg-b1)] text-center hover:border-[#ff6c1d]/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff6c1d]/10 flex items-center justify-center mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[var(--vg-t1)]text-2xl uppercase mb-3">
                  {v.title}
                </h3>
                <p className="text-[var(--vg-t3)] text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#033eff] to-[#ff6c1d]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl md:text-5xl text-white uppercase mb-4">
            Venez nous rencontrer
          </h2>
          <p className="text-blue-200 mb-8">
            Notre équipe est disponible du lundi au vendredi pour répondre à vos questions.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-colors group"
          >
            Voir nos coordonnées
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
