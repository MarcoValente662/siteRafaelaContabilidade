import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getPostBySlug, formatDate, blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div data-testid="blog-post-page">
      <article>
        <section className="border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-20 lg:pb-16">
            <Link
              to="/blog"
              data-testid="back-to-blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-navy mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.blog.backToBlog}
            </Link>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-6">
              <span className="uppercase tracking-[0.15em] text-navy font-medium">
                {post.category[lang]}
              </span>
              <span>·</span>
              <span>{formatDate(post.date, lang)}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readMin} {t.blog.minRead}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-[1.1] tracking-tight">
              {post.title[lang]}
            </h1>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <User className="w-4 h-4" />
              {t.blog.by} <span className="text-navy font-medium">{post.author}</span>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="aspect-[16/9] overflow-hidden bg-slate-100">
            <img src={post.image} alt={post.title[lang]} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-body">
            {post.content[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-10 tracking-tight">
            {t.blog.related}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                data-testid={`related-${p.slug}`}
                className="group block bg-white border border-slate-200 hover:border-navy transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-navy font-medium">
                    {p.category[lang]}
                  </p>
                  <h3 className="font-display text-lg font-bold text-navy mt-3 leading-snug">
                    {p.title[lang]}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
