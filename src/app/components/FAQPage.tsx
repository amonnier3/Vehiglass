import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface FAQPageProps {
  onNavigate: (page: Page) => void;
}

const faqCategories = [
  {
    category: "Généralités",
    items: [
      {
        question: "Quels types de véhicules prenez-vous en charge ?",
        answer: "Nous intervenons sur tous types de véhicules : voitures de tourisme, SUV, monospaces, utilitaires légers, camionnettes, véhicules de collection, ainsi que certains poids lourds. Contactez-nous pour votre cas spécifique.",
      },
      {
        question: "Proposez-vous un véhicule de courtoisie pendant l'intervention ?",
        answer: "Oui, nous mettons à disposition un véhicule de courtoisie gratuit sous réserve de disponibilité. Merci de nous en faire la demande lors de la prise de rendez-vous.",
      },
      {
        question: "Combien de temps dure un remplacement de pare-brise ?",
        answer: "Un remplacement de pare-brise standard dure entre 1h30 et 2h00. Pour les véhicules équipés de caméras ADAS nécessitant un calibrage, compter environ 3h au total.",
      },
    ],
  },
  {
    category: "Vitrage",
    items: [
      {
        question: "Puis-je conduire immédiatement après le remplacement de mon pare-brise ?",
        answer: "Non. Après la pose, un temps de séchage du mastic polyuréthane est impératif. Pour un pare-brise standard, comptez 1h minimum avant toute conduite, et évitez les autoroutes dans les 24 heures suivant la pose.",
      },
      {
        question: "Dois-je remplacer mon pare-brise si j'ai un impact sans fissure ?",
        answer: "Pas nécessairement. Une petite étoile ou un impact sans propagation peut souvent être réparé par injection de résine, à condition que l'impact soit inférieur à 1 euro de diamètre et hors champ du conducteur. Nous évaluons gratuitement la réparabilité.",
      },
      {
        question: "Mon pare-brise est-il d'origine constructeur ?",
        answer: "Nous proposons deux niveaux de qualité : des vitrages d'origine constructeur (OEM) et des vitrages équivalents homologués de marques premium (Saint-Gobain, AGC, Pilkington). Les deux répondent aux normes ECE R43.",
      },
      {
        question: "Le remplacement de vitrage affecte-t-il la garantie de mon véhicule ?",
        answer: "Non, si la pose est réalisée par un professionnel certifié et avec des pièces homologuées. Vehiglass est agréé par les principaux constructeurs et assureurs.",
      },
    ],
  },
  {
    category: "Assurance",
    items: [
      {
        question: "Mon assurance prend-elle en charge le remplacement de pare-brise ?",
        answer: "Si vous avez souscrit à une garantie bris de glace, le remplacement est généralement pris en charge sans franchise. Nous gérons directement les démarches avec votre assureur : Macif, MAIF, AXA, Allianz, GMF, MAAF et tous les principaux réseaux.",
      },
      {
        question: "Comment se déroule la prise en charge par l'assurance ?",
        answer: "Appelez-nous en indiquant votre assureur. Nous ouvrons le dossier sinistre directement en votre nom, réalisons l'intervention et facturons directement l'assurance. Vous n'avez rien à avancer en cas de garantie bris de glace sans franchise.",
      },
      {
        question: "Est-ce que le remplacement de vitrage fait perdre mon bonus ?",
        answer: "Non. Le recours à votre garantie bris de glace n'affecte pas votre coefficient de bonus-malus. Cette garantie est indépendante de votre responsabilité civile.",
      },
    ],
  },
  {
    category: "Phares & Optiques",
    items: [
      {
        question: "Mes phares sont jaunes et opaques, que pouvez-vous faire ?",
        answer: "Nous proposons une rénovation par polissage multi-étapes qui élimine les couches oxydées et restaure la transparence. Le résultat est visible immédiatement. Une protection UV est ensuite appliquée pour prolonger l'effet jusqu'à 3 ans.",
      },
      {
        question: "La rénovation de phares est-elle durable ?",
        answer: "Avec notre technique et l'application d'un vernis protecteur UV, la rénovation tient 2 à 3 ans selon les conditions d'utilisation. Les phares exposés au soleil intense vieillissent plus vite.",
      },
      {
        question: "Le contrôle technique accepte-t-il des phares rénovés ?",
        answer: "Oui, à condition que la transparence et l'homogénéité de l'optique soient correctement rétablies. Notre prestation garantit la conformité au contrôle technique.",
      },
    ],
  },
  {
    category: "ADAS",
    items: [
      {
        question: "Qu'est-ce qu'une caméra ADAS et pourquoi doit-elle être calibrée ?",
        answer: "ADAS signifie Advanced Driver Assistance Systems : ce sont les systèmes d'aide à la conduite (freinage automatique, maintien de voie, etc.) qui utilisent une caméra souvent fixée sur le pare-brise. Lors d'un remplacement, la caméra est légèrement déplacée, ce qui désynchronise ses angles de vision. Le calibrage remet à zéro ces paramètres.",
      },
      {
        question: "Comment savoir si mon véhicule est équipé d'un système ADAS ?",
        answer: "La plupart des véhicules récents (à partir de 2015 environ) en sont équipés. Vous pouvez repérer la présence d'une caméra dans le rétroviseur intérieur, ou retrouver ces informations dans votre carnet de bord. Nous vérifions systématiquement cela lors de votre prise de rendez-vous.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[rgba(3,62,255,0.1)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[#e8edf5] text-sm font-semibold leading-relaxed group-hover:text-[#ff6c1d] transition-colors">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#ff6c1d] shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-[#7a9bbf] text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [activeCategory, setActiveCategory] = useState("Généralités");
  const current = faqCategories.find((c) => c.category === activeCategory) ?? faqCategories[0];

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }} className="pt-16">
      {/* Header */}
      <section className="py-20 bg-[#080f1d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#033eff]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">Questions fréquentes</p>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl text-white uppercase mb-6"
          >
            FAQ
          </h1>
          <p className="text-[#7a9bbf] text-lg max-w-xl mx-auto leading-relaxed">
            Retrouvez les réponses aux questions les plus fréquemment posées par nos clients.
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Category sidebar */}
          <div className="lg:col-span-1">
            <p
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-[#7a9bbf] uppercase tracking-widest text-xs mb-4"
            >
              Thèmes
            </p>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {faqCategories.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`shrink-0 lg:w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                    activeCategory === cat.category
                      ? "bg-[#ff6c1d]/15 text-[#ff6c1d] border border-[#ff6c1d]/30"
                      : "text-[#7a9bbf] hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {cat.category}
                  <span className="ml-2 text-xs opacity-60">({cat.items.length})</span>
                </button>
              ))}
            </div>

            <div className="hidden lg:block mt-10 p-5 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)]">
              <p className="text-[#7a9bbf] text-sm leading-relaxed mb-4">
                Vous n'avez pas trouvé la réponse à votre question ?
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-1.5 text-[#ff6c1d] text-sm hover:text-[#ff8a47] transition-colors group"
              >
                Nous contacter
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Questions */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-3xl text-white uppercase mb-1"
              >
                {current.category}
              </h2>
              <p className="text-[#7a9bbf] text-sm">
                {current.items.length} question{current.items.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="bg-[#121e35] rounded-xl border border-[rgba(3,62,255,0.12)] px-6">
              {current.items.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>

            <div className="lg:hidden mt-8 p-5 rounded-xl bg-[#121e35] border border-[rgba(3,62,255,0.12)]">
              <p className="text-[#7a9bbf] text-sm mb-3">Vous n'avez pas trouvé la réponse à votre question ?</p>
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-1.5 text-[#ff6c1d] text-sm hover:text-[#ff8a47] transition-colors group"
              >
                Nous contacter
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#033eff]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl md:text-5xl text-white uppercase mb-4">
            Encore des doutes ?
          </h2>
          <p className="text-blue-200 mb-8 text-base max-w-xl mx-auto">
            Appelez-nous directement au <strong>04 78 12 34 56</strong> ou venez nous voir au garage. Nos techniciens répondent à toutes vos questions sans engagement.
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
