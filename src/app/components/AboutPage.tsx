import { Award, Wrench, Users, ArrowRight } from "lucide-react";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const milestones = [
  { year: "2008", event: "Fondation de Vehiglass à Saint-Priest par Marc Dupont" },
  { year: "2012", event: "Extension du garage et ouverture d'un second atelier spécialisé" },
  { year: "2016", event: "Obtention de la certification professionnelle GNFA vitrage" },
  { year: "2019", event: "Intégration des prestations ADAS et technologies embarquées" },
  { year: "2023", event: "Lancement de la rénovation d'optiques et passage à 4 techniciens" },
  { year: "2025", event: "Cap des 8 000 clients satisfaits franchi" },
];

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
      <section className="py-20 bg-[#080f1d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#033eff]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Notre histoire</p>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl text-white uppercase mb-6"
          >
            À propos
          </h1>
          <p className="text-[#7a9bbf] text-lg max-w-2xl mx-auto leading-relaxed">
            Une passion pour l'automobile et un engagement envers la qualité depuis plus de 15 ans.
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
              className="text-4xl md:text-5xl text-white uppercase mb-6"
            >
              Marc Dupont
            </h2>
            <p className="text-[#a0bcd4] text-sm leading-relaxed mb-5">
              Passionné d'automobile depuis son plus jeune âge, Marc Dupont débute sa carrière comme technicien vitragiste en 2001 dans une grande enseigne nationale. Fort de 7 années d'expérience terrain, il décide en 2008 de créer <strong className="text-white">Vehiglass</strong>, avec l'ambition d'offrir un service de proximité alliant qualité professionnelle et relation humaine.
            </p>
            <p className="text-[#a0bcd4] text-sm leading-relaxed mb-5">
              Sa philosophie est simple : traiter chaque véhicule comme s'il était le sien, et chaque client comme un ami à qui l'on donne le meilleur conseil.
            </p>
            <p className="text-[#a0bcd4] text-sm leading-relaxed mb-8">
              Certifié par le GNFA, Marc forme régulièrement ses techniciens aux nouvelles technologies du vitrage embarqué : systèmes ADAS, caméras intégrées, connectivité numérique.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Certification GNFA vitrage automobile",
                "Agrément assurances tous réseaux",
                "15+ années d'expertise sectorielle",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-2.5 text-sm text-[#a0bcd4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6c1d] shrink-0" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-[#1a2d4a] h-96">
              <img
                src="https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=600&h=800&fit=crop&auto=format"
                alt="Technicien Vehiglass au travail"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#ff6c1d] text-white rounded-xl p-5 shadow-xl shadow-[#ff6c1d]/20">
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl font-bold leading-none">
                15+
              </p>
              <p className="text-xs font-semibold leading-tight mt-1">années<br />d'expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Le garage */}
      <section className="py-20 bg-[#080f1d]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="relative order-2 md:order-1">
              <div className="rounded-xl overflow-hidden bg-[#1a2d4a] h-80">
                <img
                  src="https://images.unsplash.com/photo-1758767355046-1986dda2d967?w=600&h=500&fit=crop&auto=format"
                  alt="Garage Vehiglass"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Notre atelier</p>
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-4xl md:text-5xl text-white uppercase mb-6"
              >
                Le garage
              </h2>
              <p className="text-[#a0bcd4] text-sm leading-relaxed mb-5">
                Implanté à Saint-Priest depuis 2008, notre atelier de <strong className="text-white">450 m²</strong> est équipé des derniers outils de pose et de calibrage. Nous disposons de 4 ponts de travail permettant d'intervenir simultanément sur plusieurs véhicules.
              </p>
              <p className="text-[#a0bcd4] text-sm leading-relaxed mb-8">
                Notre stock de vitrages couvre plus de <strong className="text-white">3 000 références</strong> — des modèles courants aux véhicules de collection. En cas de référence rare, un approvisionnement en 24h est possible.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "450 m²", label: "Surface atelier" },
                  { val: "4", label: "Ponts de travail" },
                  { val: "3 000+", label: "Références en stock" },
                  { val: "4", label: "Techniciens certifiés" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-[#121e35] border border-[rgba(3,62,255,0.12)]">
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[#ff6c1d] text-3xl mb-1">
                      {stat.val}
                    </p>
                    <p className="text-[#7a9bbf] text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Chronologie</p>
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-4xl md:text-5xl text-white uppercase"
          >
            Notre parcours
          </h2>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-0">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-5 items-start">
              {/* Line + dot */}
              <div className="flex flex-col items-center w-10 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff6c1d] shrink-0 mt-1.5 ring-4 ring-[#ff6c1d]/15" />
                {i < milestones.length - 1 && (
                  <div className="w-px flex-1 min-h-8 bg-gradient-to-b from-[#ff6c1d]/40 to-[#033eff]/20 mt-1" />
                )}
              </div>
              <div className="pb-8">
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[#ff6c1d] text-xl mb-1">
                  {m.year}
                </p>
                <p className="text-[#a0bcd4] text-sm leading-relaxed">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-[#080f1d]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">Ce qui nous guide</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-4xl md:text-5xl text-white uppercase"
            >
              Nos valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)] text-center hover:border-[#ff6c1d]/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff6c1d]/10 flex items-center justify-center mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-white text-2xl uppercase mb-3">
                  {v.title}
                </h3>
                <p className="text-[#7a9bbf] text-sm leading-relaxed">{v.desc}</p>
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
            Notre équipe est disponible du lundi au samedi pour répondre à vos questions.
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
