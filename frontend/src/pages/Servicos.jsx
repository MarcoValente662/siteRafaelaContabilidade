import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  Receipt,
  Users,
  LineChart,
  ShieldCheck,
  Rocket,
  Check,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  general: Calculator,
  tax: Receipt,
  hr: Users,
  consulting: LineChart,
  audit: ShieldCheck,
  startup: Rocket,
};

const Servicos = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="services-page">
      <section className="border-b border-slate-200 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-24">
          <div className="max-w-3xl">
            <p className="overline mb-6">— {t.servicesPage.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.05]">
              {t.servicesPage.title}
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{t.servicesPage.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-px bg-slate-200 border border-slate-200">
            {t.servicesPage.list.map((s, idx) => {
              const Ic = icons[s.key] || Calculator;
              const reversed = false;//idx % 2 === 1;
              return (
                <div
                  key={s.key}
                  id={s.key}
                  data-testid={`service-${s.key}`}
                  className="bg-white scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-14`}>
                    <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#F1F5F9] flex items-center justify-center">
                          <Ic className="w-6 h-6 text-navy" strokeWidth={1.5} />
                        </div>
                        <p className="overline">— 0{idx + 1}</p>
                      </div>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight mt-6 leading-tight">
                        {s.title}
                      </h2>
                      <p className="mt-4 text-base text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                    <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {s.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-3 p-4 border border-slate-200 bg-white">
                            <Check className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                            <span className="text-sm text-slate-700">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contactos"
                        data-testid={`service-cta-${s.key}`}
                        className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-navy hover:gap-3 transition-all"
                      >
                        {t.home.ctaSecondary}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white max-w-2xl">
            {t.home.ctaBlockTitle}
          </h2>
          <Link
            to="/contactos"
            data-testid="services-bottom-cta"
            className="inline-flex items-center gap-2 bg-white text-navy text-sm font-medium px-6 py-3.5 rounded-sm"
          >
            {t.home.ctaBlockButton}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
