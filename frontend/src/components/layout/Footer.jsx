import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0A1F44] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-white flex items-center justify-center">
                <span className="text-navy font-display font-bold text-lg leading-none">
                  RR
                </span>
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                Reis&Reis
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="overline !text-slate-400 mb-4">{t.footer.navLabel}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" data-testid="footer-home" className="text-slate-200 hover:text-white">{t.nav.home}</Link></li>
              <li><Link to="/quem-somos" data-testid="footer-about" className="text-slate-200 hover:text-white">{t.nav.about}</Link></li>
              <li><Link to="/servicos" data-testid="footer-services" className="text-slate-200 hover:text-white">{t.nav.services}</Link></li>
              <li><Link to="/blog" data-testid="footer-blog" className="text-slate-200 hover:text-white">{t.nav.blog}</Link></li>
              <li><Link to="/recrutamento" data-testid="footer-recruitment" className="text-slate-200 hover:text-white">{t.nav.recruitment}</Link></li>
              <li><Link to="/contactos" data-testid="footer-contact" className="text-slate-200 hover:text-white">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="overline !text-slate-400 mb-4">{t.footer.servicesLabel}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicos#general" className="text-slate-200 hover:text-white">{t.services.generalAccounting}</Link></li>
              <li><Link to="/servicos#tax" className="text-slate-200 hover:text-white">{t.services.taxation}</Link></li>
              <li><Link to="/servicos#hr" className="text-slate-200 hover:text-white">{t.services.humanResources}</Link></li>
              <li><Link to="/servicos#consulting" className="text-slate-200 hover:text-white">{t.services.consulting}</Link></li>
              <li><Link to="/servicos#audit" className="text-slate-200 hover:text-white">{t.services.auditing}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="overline !text-slate-400 mb-4">{t.footer.contactLabel}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t.contact.address1}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-200">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t.contact.address2}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-200">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{t.contact.phone}</span>
              </li>
            </ul>

            <h4 className="overline !text-slate-400 mt-6 mb-3">{t.footer.followLabel}</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/reisreis.pt/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-facebook"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 hover:bg-white hover:text-navy text-white rounded-sm flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="instagram.com/reisreis.pt/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-instagram"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 hover:bg-white hover:text-navy text-white rounded-sm flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/reisreis/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-social-linkedin"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-white/20 hover:bg-white hover:text-navy text-white rounded-sm flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {year} Reis&Reis. {t.footer.rights}
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-400">
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
