import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  Receipt,
  Users,
  LineChart,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Award,
  Clock4,
  HandshakeIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts, formatDate } from "../data/blogPosts";

const serviceIcons = {
  general: Calculator,
  tax: Receipt,
  hr: Users,
  consulting: LineChart,
  audit: ShieldCheck,
  startup: Rocket,
};

const Home = () => {
  const { t, lang } = useLanguage();
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div data-testid="home-page">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 fade-up">
              <p className="overline mb-6" data-testid="hero-eyebrow">
                — {t.home.eyebrow}
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight"
                data-testid="hero-title"
              >
                {t.home.heroTitle}
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                {t.home.heroSub}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/servicos"
                  data-testid="hero-cta-primary"
                  className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-[#102F63] text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
                >
                  {t.home.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contactos"
                  data-testid="hero-cta-secondary"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-navy text-navy text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
                >
                  {t.home.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 fade-up fade-up-delay-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#F1F5F9] -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1547321627-2479fe834b1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHdoaXRlfDE3ODI4MzMwOTN8MA&ixlib=rb-4.1.0&q=85"
                  alt="Corporate office"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-slate-200 pt-12">
            {[
              { value: "[XX]+", label: t.home.statsLabel1 },
              { value: "[XXX]+", label: t.home.statsLabel2 },
              { value: "98%", label: t.home.statsLabel3 },
              { value: "[XX]", label: t.home.statsLabel4 },
            ].map((s, i) => (
              <div key={i} data-testid={`stat-${i}`} className="px-2">
                <div className="font-display text-4xl font-bold text-navy tracking-tight">
                  {s.value}
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <p className="overline mb-4">— {t.home.sectionEyebrow}</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
                {t.home.sectionTitle}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-base text-slate-600 leading-relaxed">
                {t.home.sectionSub}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {t.servicesPage.list.map((s) => {
              const Icon = serviceIcons[s.key] || Calculator;
              return (
                <Link
                  to={`/servicos#${s.key}`}
                  key={s.key}
                  data-testid={`home-service-${s.key}`}
                  className="group bg-white p-8 hover:bg-[#F8F9FA] transition-colors flex flex-col"
                >
                  <Icon className="w-7 h-7 text-navy" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-bold text-navy mt-6">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-navy">
                    {t.servicesPage.learnMore}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="overline mb-4">— {t.home.whyEyebrow}</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight">
                {t.home.whyTitle}
              </h2>
              <p className="mt-6 text-base text-slate-600 leading-relaxed">
                {t.home.whySub}
              </p>
              <Link
                to="/quem-somos"
                data-testid="why-cta"
                className="inline-flex items-center gap-2 mt-8 text-navy font-medium text-sm hover:gap-3 transition-all"
              >
                {t.about.eyebrow}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 space-y-px bg-slate-200 border border-slate-200">
              {[
                { icon: Award, title: t.home.why1Title, text: t.home.why1Text },
                { icon: Clock4, title: t.home.why2Title, text: t.home.why2Text },
                { icon: HandshakeIcon, title: t.home.why3Title, text: t.home.why3Text },
              ].map((item, i) => {
                const Ic = item.icon;
                return (
                  <div key={i} className="bg-white p-8 flex gap-6">
                    <Ic className="w-7 h-7 text-navy flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Latest blog */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="overline mb-4">— {t.home.blogEyebrow}</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
                {t.home.blogTitle}
              </h2>
            </div>
            <Link
              to="/blog"
              data-testid="home-blog-cta"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:gap-3 transition-all"
            >
              {t.home.blogCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                data-testid={`home-blog-${post.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="uppercase tracking-[0.15em] text-navy font-medium">
                      {post.category[lang]}
                    </span>
                    <span>·</span>
                    <span>{formatDate(post.date, lang)}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mt-3 leading-snug group-hover:underline decoration-1 underline-offset-4">
                    {post.title[lang]}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt[lang]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {t.home.ctaBlockTitle}
              </h2>
              <p className="mt-5 text-base text-slate-300 max-w-2xl leading-relaxed">
                {t.home.ctaBlockSub}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                to="/contactos"
                data-testid="home-bottom-cta"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-navy text-sm font-medium px-7 py-4 rounded-sm transition-colors"
              >
                {t.home.ctaBlockButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
