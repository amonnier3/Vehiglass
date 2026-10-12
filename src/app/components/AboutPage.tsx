import { Award, Wrench, Users, ArrowRight } from "lucide-react";
import site from "../../content/site.json";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface AboutPageProps {
  onNavigate: (page: Page, anchor?: string) => void;
}

const valueIcons = [
  <Award size={22} className="text-[#ff6c1d]" />,
  <Users size={22} className="text-[#ff6c1d]" />,
  <Wrench size={22} className="text-[#ff6c1d]" />,
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }} className="pt-16">
      {/* Header */}
      <section className="py-20 bg-[var(--vg-alt)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#033eff]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">{site.about.eyebrow}</p>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl text-[var(--vg-t1)] uppercase mb-6"
          >
            {site.about.title}
          </h1>
          <p className="text-[var(--vg-t3)] text-lg max-w-2xl mx-auto leading-relaxed">
            {site.about.intro}
          </p>
        </div>
      </section>

      {/* Le gérant */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">{site.about.founderEyebrow}</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase mb-6"
            >
              {site.about.founderName}
            </h2>
            {site.about.founderParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-[var(--vg-t2)] text-sm leading-relaxed mb-5">{paragraph}</p>
            ))}
            <div className="flex flex-col gap-3">
              {site.about.certifications.map((cert) => (
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
                alt="Remplacement de pare-brise sur véhicule à Pau"
                className="w-full h-full object-cover opacity-[var(--vg-img-op)]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#ff6c1d] text-white rounded-xl p-5 shadow-xl shadow-[#ff6c1d]/20">
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-4xl font-bold leading-none">
                {site.about.experienceValue}
              </p>
              <p className="text-xs font-semibold leading-tight mt-1">{site.about.experienceLabel}</p>
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
                  alt="Garage Vehiglass à Pau"
                  className="w-full h-full object-cover opacity-[var(--vg-img-op)]"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">{site.about.garageEyebrow}</p>
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase mb-6"
              >
                {site.about.garageTitle}
              </h2>
              {site.about.garageParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-[var(--vg-t2)] text-sm leading-relaxed mb-5">{paragraph}</p>
              ))}
              <div className="grid grid-cols-2 gap-4">
                {site.about.garageStats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-[var(--vg-card)] border border-[var(--vg-b1)]">
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif" }} className="text-[#ff6c1d] text-3xl mb-1">
                      {stat.value}
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
            <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">{site.about.valuesEyebrow}</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase"
            >
              {site.about.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.about.values.map((v, index) => (
              <div
                key={v.title}
                className="p-8 rounded-xl bg-[var(--vg-card)] border border-[var(--vg-b1)] text-center hover:border-[#ff6c1d]/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#ff6c1d]/10 flex items-center justify-center mx-auto mb-5">
                  {valueIcons[index]}
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
            {site.about.ctaTitle}
          </h2>
          <p className="text-blue-200 mb-8">
            {site.about.ctaDescription}
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-colors group"
          >
            {site.about.ctaButton}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
