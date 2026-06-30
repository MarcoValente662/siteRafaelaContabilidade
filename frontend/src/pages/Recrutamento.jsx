import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin, Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Recrutamento = () => {
  const { t } = useLanguage();
  return (
    <div data-testid="recruitment-page">
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="overline mb-6">— {t.recruitment.eyebrow}</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.05]">
                {t.recruitment.title}
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t.recruitment.sub}
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src="https://images.pexels.com/photos/12903168/pexels-photo-12903168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Team"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-12 tracking-tight">
            {t.recruitment.whyJoinTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {[
              t.recruitment.benefit1,
              t.recruitment.benefit2,
              t.recruitment.benefit3,
              t.recruitment.benefit4,
            ].map((b, i) => (
              <div key={i} className="bg-white p-8" data-testid={`benefit-${i}`}>
                <Check className="w-6 h-6 text-navy" strokeWidth={2} />
                <p className="font-display text-lg font-medium text-navy mt-4 leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-20 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              {t.recruitment.openPositions}
            </h2>
            <span className="text-sm text-slate-500 hidden sm:block">
              {t.recruitment.positions.length} {t.recruitment.openPositions.toLowerCase()}
            </span>
          </div>

          <div className="space-y-px bg-slate-200 border border-slate-200">
            {t.recruitment.positions.map((p, i) => (
              <div
                key={i}
                data-testid={`position-${i}`}
                className="bg-white p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                    <Briefcase className="w-3.5 h-3.5" />
                    {p.type}
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-navy mt-2 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
                <div className="lg:col-span-3 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-navy" />
                  {p.location}
                </div>
                <div className="lg:col-span-2 lg:text-right">
                  <Link
                    to="/contactos"
                    data-testid={`apply-${i}`}
                    className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-[#102F63] text-white text-sm font-medium px-5 py-3 rounded-sm transition-colors w-full lg:w-auto"
                  >
                    {t.recruitment.apply}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 lg:p-10 border border-slate-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-navy">{t.recruitment.noPositionsTitle}</h3>
              <p className="mt-2 text-sm text-slate-600">{t.recruitment.noPositionsSub}</p>
            </div>
            <Link
              to="/contactos"
              data-testid="spontaneous-application"
              className="inline-flex items-center gap-2 border border-navy text-navy hover:bg-navy hover:text-white text-sm font-medium px-5 py-3 rounded-sm transition-colors"
            >
              {t.recruitment.apply}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recrutamento;
