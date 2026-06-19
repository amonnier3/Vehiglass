import { useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface ServicesPageProps {
  onNavigate: (page: Page, anchor?: string) => void;
  anchor?: string;
}

const vitragesServices = [
  {
    title: "Remplacement de pare-brise",
    desc: "Remplacement complet de votre pare-brise avec des vitrages homologués. Pose avec mastic polyuréthane haute résistance.",
    features: ["Toutes marques et modèles", "Verre homologué constructeur", "Calibrage caméra inclus si nécessaire", "Garantie 2 ans"],
    img: "https://images.unsplash.com/photo-1618934116136-16d28f184b10?w=600&h=400&auto=format&fit=crop",
    alt: "Remplacement pare-brise",
  },
  {
    title: "Glaces latérales",
    desc: "Remplacement de vos vitres de portières, vitres de custode ou de déflecteur. Vitrages trempés ou feuilletés selon spécification constructeur.",
    features: ["Vitres avant et arrière", "Compatibles lève-glaces", "Joints et agrafes inclus", "Intervention rapide"],
    img: "https://images.unsplash.com/photo-1773900225803-657359a1312a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Glace latérale voiture",
  },
  {
    title: "Lunette arrière",
    desc: "Remplacement de la lunette arrière avec ou sans dégivrage intégré. Reconnexion du réseau chauffant incluse.",
    features: ["Dégivrage préservé", "Antenne intégrée si équipé", "Vitrage homologué", "Pose étanche garantie"],
    img: "https://images.unsplash.com/photo-1751615713841-6468b0a2441e?w=600&h=400&auto=format&fit=crop",
    alt: "Lunette arrière automobile",
  },
];

const optiquesServices = [
  {
    title: "Rénovation de phares",
    desc: "Polissage et rénovation complète de vos optiques jaunies ou rayées. Résultat comme neuf, visibilité retrouvée.",
    features: ["Polissage multi-étapes", "Protection UV appliquée", "Durée : 1h par phare", "Résultat garanti 12 mois"],
    img: "https://images.unsplash.com/photo-1528964132366-4409d2d4a862?w=600&h=400&fit=crop&auto=format",
    alt: "Rénovation phare automobile",
  },
  {
    title: "Remplacement d'optiques",
    desc: "Si vos phares sont trop endommagés pour être rénovés, nous procédons au remplacement complet par des pièces d'origine ou équivalentes.",
    features: ["Pièces d'origine ou OEM", "Réglage des feux inclus", "Conformité au contrôle technique", "Toutes technologies (LED, Xénon, Halogène)"],
    img: "https://images.unsplash.com/photo-1616761879141-f485e5fed5df?w=600&h=400&fit=crop&auto=format",
    alt: "Remplacement phare voiture",
  },
];

const complementairesServices = [
  { icon: "🔧", title: "Calibrage ADAS", desc: "Recalibrage des systèmes d'aide à la conduite après remplacement de pare-brise." },
  { icon: "💧", title: "Traitement hydrophobe", desc: "Application d'un traitement hydrophobe pour améliorer la visibilité par temps de pluie." },
  { icon: "📡", title: "Pose de télépeage", desc: "Installation professionnelle de badge télépéage sur votre pare-brise." },
  { icon: "📱", title: "Pose de CarPlay", desc: "Installation professionnelle de CarPlay sans fil ou filaire sur votre pare-brise." },
  { icon: "🔍", title: "Diagnostic vitrage", desc: "Évaluation complète de l'état de vos vitrages, gratuitement." },
  { icon: "🚗", title: "Véhicule de courtoisie", desc: "Mise à disposition d'un véhicule de courtoisie gratuit pendant l'intervention." },
];

function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="h-px flex-1 bg-gradient-to-r from-[#033eff]/30 to-transparent" />
      <div className="text-center">
        <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-1">Catégorie {number}</p>
        <h2
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase"
        >
          {title}
        </h2>
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-[#033eff]/30 to-transparent" />
    </div>
  );
}

export function ServicesPage({ onNavigate, anchor }: ServicesPageProps) {
  useEffect(() => {
    if (!anchor) {
      return;
    }

    const normalizedAnchor = anchor.replace(/^#/, "");
    const targetElement = document.getElementById(normalizedAnchor);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [anchor]);

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }} className="pt-16">
      {/* Header */}
      <section className="py-20 bg-[var(--vg-alt)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#033eff]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Notre savoir-faire</p>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl text-[var(--vg-t1)] uppercase mb-6"
          >
            Nos services
          </h1>
          <p className="text-[var(--vg-t3)] text-lg max-w-2xl mx-auto leading-relaxed">
            Des prestations complètes pour tous vos besoins en vitrage et optique automobile, réalisées par des techniciens certifiés.
          </p>
        </div>
      </section>

      {/* Vitrages */}
      <section id="vitrages" className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <SectionDivider number="01" title="Vitrages" />
        <div className="flex flex-col gap-10">
          {vitragesServices.map((service, i) => (
            <div
              key={service.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden bg-[var(--vg-card)] border border-[var(--vg-b1)]"
            >
              <div className={`relative h-64 md:h-auto bg-[#1a2d4a] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={service.img} alt={service.alt} className="w-full h-full object-cover opacity-[var(--vg-img-op)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121e35]/50 to-transparent" />
              </div>
              <div className={`p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-3xl text-[var(--vg-t1)] uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--vg-t3)] text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="flex flex-col gap-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--vg-t2)]">
                      <CheckCircle size={15} className="text-[#ff6c1d] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate("contact")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#ff6c1d] text-white text-sm font-semibold hover:bg-[#ff8a47] transition-colors group"
                >
                  Obtenir un rendez-vous
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optiques */}
      <section id="optiques" className="py-20 bg-[var(--vg-alt)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <SectionDivider number="02" title="Optiques" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optiquesServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl overflow-hidden bg-[var(--vg-card)] border border-[var(--vg-b1)] hover:border-[#ff6c1d]/30 transition-all duration-200 group"
              >
                <div className="relative h-52 bg-[var(--vg-input)]">
                  <img src={service.img} alt={service.alt} className="w-full h-full object-cover opacity-[var(--vg-img-op)] group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121e35] to-transparent" />
                </div>
                <div className="p-7">
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-2xl text-[var(--vg-t1)] uppercase mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--vg-t3)] text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="flex flex-col gap-1.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[var(--vg-t2)]">
                        <CheckCircle size={13} className="text-[#ff6c1d] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="inline-flex items-center gap-2 text-[#ff6c1d] text-sm hover:text-[#ff8a47] transition-colors group/btn"
                  >
                    Demander un devis
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complémentaires */}
      <section id="complementaires" className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <SectionDivider number="03" title="Services complémentaires" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {complementairesServices.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl bg-[var(--vg-card)] border border-[var(--vg-b1)] hover:border-[#ff6c1d]/30 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-xl text-[var(--vg-t1)] uppercase mb-2">
                {s.title}
              </h3>
              <p className="text-[var(--vg-t3)] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#033eff] to-[#ff6c1d]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl md:text-5xl text-white uppercase mb-4">
            Besoin d'un service sur mesure ?
          </h2>
          <p className="text-blue-200 mb-8 text-base max-w-xl mx-auto">
            Contactez-nous pour discuter de votre besoin. Devis gratuit et sans engagement.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-colors group"
          >
            Nous contacter
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
