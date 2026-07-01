import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const QuemSomos = () => {
  const { t } = useLanguage();
  return (
    <div data-testid="about-page">
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 fade-up">
              <p className="overline mb-6">— {t.about.eyebrow}</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.05]">
                {t.about.title}
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t.about.sub}
              </p>
            </div>
            <div className="lg:col-span-5 fade-up fade-up-delay-2">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBtZWV0aW5nfGVufDB8fHx8MTc4MjgzMzA5M3ww&ixlib=rb-4.1.0&q=85"
                alt="Team meeting"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {[
              { icon: Target, label: t.about.missionLabel, text: t.about.mission },
              { icon: Eye, label: t.about.visionLabel, text: t.about.vision },
              { icon: Heart, label: t.about.valuesLabel, text: t.about.values },
            ].map((b, i) => {
              const Ic = b.icon;
              return (
                <div key={i} className="bg-white p-10" data-testid={`mvv-${i}`}>
                  <Ic className="w-8 h-8 text-navy" strokeWidth={1.5} />
                  <h3 className="overline mt-6">— {b.label}</h3>
                  <p className="font-display text-lg font-medium text-navy mt-3 leading-relaxed">
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="overline mb-4">— {t.about.storyEyebrow}</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight">
                {t.about.storyTitle}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-base text-slate-600 leading-relaxed">
              <p>{t.about.storyP1}</p>
              <p>{t.about.storyP2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="overline mb-4">— {t.about.teamEyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
              {t.about.teamTitle}
            </h2>
            <p className="mt-5 text-base text-slate-600 leading-relaxed">{t.about.teamSub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Carlos Reis", role: "Contabilista Certificado", img: "https://reisreis.pt/wp-content/uploads/2023/01/Carlos_Reis.png" },
              { name: "Aurora Reis", role: "Gestora Financeira", img: "https://reisreis.pt/wp-content/uploads/2023/01/Aurora.png" },
              { name: "Francisco Mata", role: "Contabilista Certificado", img: "https://reisreis.pt/wp-content/uploads/2026/06/Francisco-Mata-2-scaled.jpg" },
              { name: "Bruno B", role: "Gestor de Clientes", img: "https://reisreis.pt/wp-content/uploads/2026/06/BRUNO-B.jpg" },
              { name: "Rafaela Reis", role: "Finalista da Licenciatura em Fiscalidade", img: "https://reisreis.pt/wp-content/uploads/2026/06/RafaelaReis.jpg" },
              { name: "Ana Pais", role: "Secretária", img: "https://reisreis.pt/wp-content/uploads/2023/01/Ana_pais.png" },
              { name: "Recrutamento", role: "Submete aqui a tua candidatura espontânea e envia-nos o teu CV em 'Recrutamento'", img: "https://reisreis.pt/wp-content/uploads/2026/06/interrogacao.png" },
            ].map((m, i) => (
              <div key={i} data-testid={`team-${i}`}>
                <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mt-4">{m.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{m.role}</p>
              </div>
            ))}
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
            data-testid="about-cta"
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

export default QuemSomos;
