import { CheckCircle, ArrowRight, Star, Award, Clock, Users } from "lucide-react";
import site from "../../content/site.json";

type Page = "home" | "services" | "about" | "contact" | "faq";

interface HomePageProps {
  onNavigate: (page: Page, anchor?: string) => void;
}

const engagementIcons = [
  <Award size={24} className="text-[#ff6c1d]" />,
  <Clock size={24} className="text-[#ff6c1d]" />,
  <CheckCircle size={24} className="text-[#ff6c1d]" />,
  <Users size={24} className="text-[#ff6c1d]" />,
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
            {site.home.heroBadge}
          </div>

          <h1
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
            className="text-5xl md:text-7xl lg:text-8xl text-white uppercase mb-6 leading-none"
          >
            {site.home.heroTitle}{" "}
            <span className="text-[#ff6c1d]">{site.home.heroTitleAccent}</span>
          </h1>

          <p className="text-[#a0bcd4] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {site.home.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-all duration-200 group"
            >
              {site.home.appointmentCta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/25 text-[#e8edf5] hover:border-[#ff6c1d]/60 hover:text-[#ff6c1d] transition-all duration-200"
            >
              {site.home.servicesCta}
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7a9bbf] text-xs">
          <span className="tracking-widest uppercase">{site.home.scrollLabel}</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#ff6c1d]/60 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[var(--vg-stats)] border-y border-[var(--vg-stats-b)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {site.home.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  className="text-4xl md:text-5xl text-[#ff6c1d] mb-1"
                >
                  {stat.value}
                </p>
                <p className="text-[var(--vg-t3)] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <span className="text-[var(--vg-t3)] text-sm absolute right-[1rem] mt-[2rem]">{site.home.statsDisclaimer}</span>
      </section>

      {/* Engagements & valeurs */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">{site.home.engagementsEyebrow}</p>
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase"
          >
            {site.home.engagementsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {site.home.engagements.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-5 p-6 rounded-xl bg-[var(--vg-card)] border border-[var(--vg-b1)] hover:border-[#ff6c1d]/30 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#ff6c1d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff6c1d]/20 transition-colors">
                {engagementIcons[index]}
              </div>
              <div>
                <h3
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  className="text-[var(--vg-t1)] text-xl uppercase mb-1"
                >
                  {item.title}
                </h3>
                <p className="text-[var(--vg-t3)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-[var(--vg-alt)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">{site.home.servicesEyebrow}</p>
              <h2
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase"
              >
                {site.home.servicesTitle}
              </h2>
            </div>
            <button
              onClick={() => onNavigate("services")}
              className="inline-flex items-center gap-2 text-[#ff6c1d] text-sm hover:text-[#ff8a47] transition-colors group shrink-0"
            >
              {site.home.servicesViewAll}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.home.serviceCards.map((card) => (
              <button
                key={card.title}
                onClick={() => onNavigate("services", card.anchor)}
                className="group rounded-xl overflow-hidden bg-[var(--vg-card)] border border-[var(--vg-b1)] hover:border-[#ff6c1d]/40 transition-all duration-300 text-left"
              >
                <div className="relative h-48 overflow-hidden bg-[var(--vg-input)]">
                  <img
                    src={card.imageUrl}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-[var(--vg-img-op)] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121e35]/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    className="text-[var(--vg-t1)] text-xl uppercase mb-2 group-hover:text-[#ff6c1d] transition-colors"
                  >
                    {card.title}
                  </h3>
                  <p className="text-[var(--vg-t3)] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[#ff6c1d] uppercase tracking-widest text-xs mb-3">{site.home.testimonialsEyebrow}</p>
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-4xl md:text-5xl text-[var(--vg-t1)] uppercase"
          >
            {site.home.testimonialsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.home.testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl bg-[var(--vg-card)] border border-[var(--vg-b1)]"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#ff6c1d] fill-[#ff6c1d]" />
                ))}
              </div>
              <p className="text-[var(--vg-t2)] text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <p
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                className="text-[var(--vg-t1)] uppercase tracking-wide"
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://www.google.com/maps/place/Vehiglass/@43.32579,-0.3057327,17z/data=!3m1!4b1!4m6!3m5!1s0xd56496c58f7b5ed:0x1a3765d16a47dfd7!8m2!3d43.32579!4d-0.3031578!16s%2Fg%2F11mm082dm3?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-[var(--primary)] bg-white/5 text-[var(--primary)] font-semibold hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/5 transition-colors group"
          >
            {site.home.reviewCta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-gradient-to-br from-[#033eff] to-[#ff6c1d]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            className="text-4xl md:text-5xl text-white uppercase mb-4"
          >
            {site.home.finalCtaTitle}
          </h2>
          <p className="text-blue-200 mb-8 text-base max-w-xl mx-auto leading-relaxed">
            {site.home.finalCtaDescription}
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-[#ff6c1d] text-white font-semibold hover:bg-[#ff8a47] transition-colors group"
          >
            {site.home.finalCtaButton}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section >
    </div >
  );
}
