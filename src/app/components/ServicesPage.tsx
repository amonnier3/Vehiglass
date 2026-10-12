import { useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import site from "../../content/site.json";

type Page = "home" | "services" | "about" | "contact" | "faq";

type ServiceItem = {
  title: string;
  desc: string;
  features: string[];
  alt: string;
  imageUrl: string;
  icon: string;
};

type ServiceCategory = {
  number: string;
  title: string;
  id: string;
  items: ServiceItem[];
};

const serviceCategories = site.services.categories as unknown as ServiceCategory[];

interface ServicesPageProps {
  onNavigate: (page: Page, anchor?: string) => void;
  anchor?: string;
}

function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="h-px flex-1 bg-gradient-to-r from-[#033eff]/30 to-transparent" />
      <div className="text-center">
        <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-1">{site.services.categoryLabel} {number}</p>
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
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-4">{site.services.eyebrow}</p>
          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-5xl md:text-7xl text-[var(--vg-t1)] uppercase mb-6"
          >
            {site.services.title}
          </h1>
          <p className="text-[var(--vg-t3)] text-lg max-w-2xl mx-auto leading-relaxed">
            {site.services.intro}
          </p>
        </div>
      </section>

      {/* Vitrages */}
      <section id="vitrages" className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <SectionDivider number={serviceCategories[0].number} title={serviceCategories[0].title} />
        <div className="flex flex-col gap-10">
          {serviceCategories[0].items.map((service, i) => (
            <div
              key={service.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-xl overflow-hidden bg-[var(--vg-card)] border border-[var(--vg-b1)]"
            >
              <div className={`relative h-64 md:h-auto bg-[#1a2d4a] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                {service.imageUrl && <img src={service.imageUrl} alt={service.alt} className="w-full h-full object-cover opacity-[var(--vg-img-op)]" />}
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
                  {site.services.appointmentButton}
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
          <SectionDivider number={serviceCategories[1].number} title={serviceCategories[1].title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories[1].items.map((service) => (
              <div
                key={service.title}
                className="rounded-xl overflow-hidden bg-[var(--vg-card)] border border-[var(--vg-b1)] hover:border-[#ff6c1d]/30 transition-all duration-200 group"
              >
                <div className="relative h-52 bg-[var(--vg-input)]">
                  {service.imageUrl && <img src={service.imageUrl} alt={service.alt} className="w-full h-full object-cover opacity-[var(--vg-img-op)] group-hover:opacity-90 transition-opacity duration-300" />}
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
                    {site.services.quoteButton}
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
        <SectionDivider number={serviceCategories[2].number} title={serviceCategories[2].title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories[2].items.map((s) => (
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
            {site.services.ctaTitle}
          </h2>
          <p className="text-blue-200 mb-8 text-base max-w-xl mx-auto">
            {site.services.ctaDescription}
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-colors group"
          >
            {site.services.ctaButton}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
