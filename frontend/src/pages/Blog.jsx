import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts, formatDate } from "../data/blogPosts";

const Blog = () => {
  const { t, lang } = useLanguage();
  const [featured, ...rest] = blogPosts;

  return (
    <div data-testid="blog-page">
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="max-w-3xl">
            <p className="overline mb-6">— {t.blog.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.05]">
              {t.blog.title}
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{t.blog.sub}</p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/blog/${featured.slug}`}
            data-testid={`blog-featured-${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7 overflow-hidden aspect-[16/10] bg-slate-100">
              <img
                src={featured.image}
                alt={featured.title[lang]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="uppercase tracking-[0.15em] text-navy font-medium">
                  {featured.category[lang]}
                </span>
                <span>·</span>
                <span>{formatDate(featured.date, lang)}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featured.readMin} {t.blog.minRead}
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mt-5 leading-tight group-hover:underline decoration-1 underline-offset-4">
                {featured.title[lang]}
              </h2>
              <p className="mt-5 text-base text-slate-600 leading-relaxed">
                {featured.excerpt[lang]}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy">
                {t.blog.readMore}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* List */}
      <section className="py-12 lg:py-20 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                data-testid={`blog-card-${post.slug}`}
                className="group block bg-white border border-slate-200 hover:border-navy transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="uppercase tracking-[0.15em] text-navy font-medium">
                      {post.category[lang]}
                    </span>
                    <span>·</span>
                    <span>{formatDate(post.date, lang)}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mt-3 leading-snug">
                    {post.title[lang]}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt[lang]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-navy">
                    {post.readMin} {t.blog.minRead}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
