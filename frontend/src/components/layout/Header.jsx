import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useLanguage } from "../../context/LanguageContext";
import { LANGUAGES } from "../../i18n/translations";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setOpen(false);

  const services = [
    { key: "general", label: t.services.generalAccounting },
    { key: "tax", label: t.services.taxation },
    { key: "hr", label: t.services.humanResources },
    { key: "consulting", label: t.services.consulting },
    { key: "audit", label: t.services.auditing },
    { key: "startup", label: t.servicesPage.list[5].title },
  ];

  const navLinks = [
    { to: "/", label: t.nav.home, testid: "nav-home" },
    { to: "/quem-somos", label: t.nav.about, testid: "nav-about" },
    { to: "/blog", label: t.nav.blog, testid: "nav-blog" },
    { to: "/recrutamento", label: t.nav.recruitment, testid: "nav-recruitment" },
    { to: "/contactos", label: t.nav.contact, testid: "nav-contact" },
  ];

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          
          <Link
            to="/"
            data-testid="nav-logo"
            className="flex items-center gap-2 group"
            onClick={closeMobile}
          >
            <div className="w-9 h-9 bg-navy flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg leading-none">
                RR
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-navy text-base tracking-tight">
                Reis&Reis
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500 mt-0.5">
                Contabilidade
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            <NavLink
              to="/"
              end
              data-testid="nav-home"
              className={({ isActive }) =>
                `nav-link text-sm font-medium ${isActive ? "active text-navy" : "text-slate-700 hover:text-navy"}`
              }
            >
              {t.nav.home}
            </NavLink>
            <NavLink
              to="/quem-somos"
              data-testid="nav-about"
              className={({ isActive }) =>
                `nav-link text-sm font-medium ${isActive ? "active text-navy" : "text-slate-700 hover:text-navy"}`
              }
            >
              {t.nav.about}
            </NavLink>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                data-testid="nav-services-trigger"
                className={`nav-link flex items-center gap-1 text-sm font-medium outline-none ${
                  location.pathname.startsWith("/servicos")
                    ? "active text-navy"
                    : "text-slate-700 hover:text-navy"
                }`}
              >
                {t.nav.services}
                <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-64 rounded-sm border-slate-200"
                data-testid="nav-services-menu"
              >
                <DropdownMenuItem asChild>
                  <Link
                    to="/servicos"
                    data-testid="nav-services-all"
                    className="cursor-pointer text-sm font-medium text-navy"
                  >
                    {t.nav.services} →
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-slate-200 my-1" />
                {services.map((s) => (
                  <DropdownMenuItem key={s.key} asChild>
                    <Link
                      to={`/servicos#${s.key}`}
                      data-testid={`nav-service-${s.key}`}
                      className="cursor-pointer text-sm text-slate-700 hover:text-navy"
                    >
                      {s.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink
              to="/blog"
              data-testid="nav-blog"
              className={({ isActive }) =>
                `nav-link text-sm font-medium ${isActive ? "active text-navy" : "text-slate-700 hover:text-navy"}`
              }
            >
              {t.nav.blog}
            </NavLink>
            <NavLink
              to="/recrutamento"
              data-testid="nav-recruitment"
              className={({ isActive }) =>
                `nav-link text-sm font-medium ${isActive ? "active text-navy" : "text-slate-700 hover:text-navy"}`
              }
            >
              {t.nav.recruitment}
            </NavLink>
            <NavLink
              to="/contactos"
              data-testid="nav-contact"
              className={({ isActive }) =>
                `nav-link text-sm font-medium ${isActive ? "active text-navy" : "text-slate-700 hover:text-navy"}`
              }
            >
              {t.nav.contact}
            </NavLink>
          </nav>

          {/* Right - Lang switcher + Mobile menu trigger */}
          <div className="flex items-center gap-3">
            <div
              className="hidden sm:flex items-center gap-1 border border-slate-200 rounded-sm px-1 py-1"
              data-testid="lang-switcher"
            >
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  data-testid={`lang-${l.code}`}
                  onClick={() => setLang(l.code)}
                  className={`text-xs font-medium px-2 py-1 rounded-sm transition-colors ${
                    lang === l.code
                      ? "bg-navy text-white"
                      : "text-slate-600 hover:text-navy"
                  }`}
                  aria-label={`Switch language to ${l.label}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <Link
              to="/contactos"
              data-testid="header-cta"
              className="hidden md:inline-flex items-center text-sm font-medium px-5 py-2.5 bg-navy text-white rounded-sm transition-colors hover:bg-[#102F63]"
            >
              {t.home.ctaSecondary}
            </Link>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden p-2 text-navy"
                  data-testid="mobile-menu-trigger"
                  aria-label={t.nav.openMenu}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[360px] bg-white p-0"
                data-testid="mobile-menu-sheet"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-slate-200">
                    <span className="font-display font-bold text-navy">
                      Reis&Reis
                    </span>
                    <button
                      onClick={closeMobile}
                      data-testid="mobile-menu-close"
                      aria-label={t.nav.closeMenu}
                    >
                      <X className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                  <nav className="flex-1 px-6 py-6 flex flex-col gap-1">
                    {navLinks.slice(0, 2).map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        end={l.to === "/"}
                        onClick={closeMobile}
                        data-testid={`mobile-${l.testid}`}
                        className={({ isActive }) =>
                          `py-3 text-base font-medium border-b border-slate-100 ${isActive ? "text-navy" : "text-slate-700"}`
                        }
                      >
                        {l.label}
                      </NavLink>
                    ))}
                    <div className="py-3 border-b border-slate-100">
                      <div className="flex items-center justify-between">
                        <NavLink
                          to="/servicos"
                          onClick={closeMobile}
                          data-testid="mobile-nav-services"
                          className={({ isActive }) =>
                            `text-base font-medium ${isActive ? "text-navy" : "text-slate-700"}`
                          }
                        >
                          {t.nav.services}
                        </NavLink>
                      </div>
                      <div className="mt-2 pl-3 flex flex-col gap-2">
                        {services.map((s) => (
                          <Link
                            key={s.key}
                            to={`/servicos#${s.key}`}
                            onClick={closeMobile}
                            data-testid={`mobile-service-${s.key}`}
                            className="text-sm text-slate-500 hover:text-navy"
                          >
                            — {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {navLinks.slice(2).map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={closeMobile}
                        data-testid={`mobile-${l.testid}`}
                        className={({ isActive }) =>
                          `py-3 text-base font-medium border-b border-slate-100 ${isActive ? "text-navy" : "text-slate-700"}`
                        }
                      >
                        {l.label}
                      </NavLink>
                    ))}
                  </nav>
                  <div className="p-6 border-t border-slate-200 flex flex-col gap-4">
                    <div
                      className="flex items-center gap-1 self-start border border-slate-200 rounded-sm p-1"
                      data-testid="mobile-lang-switcher"
                    >
                      {LANGUAGES.map((l) => (
                        <button
                          key={l.code}
                          data-testid={`mobile-lang-${l.code}`}
                          onClick={() => setLang(l.code)}
                          className={`text-xs font-medium px-2.5 py-1 rounded-sm ${
                            lang === l.code
                              ? "bg-navy text-white"
                              : "text-slate-600"
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                    <Link
                      to="/contactos"
                      onClick={closeMobile}
                      data-testid="mobile-header-cta"
                      className="inline-flex items-center justify-center text-sm font-medium px-5 py-3 bg-navy text-white rounded-sm"
                    >
                      {t.home.ctaSecondary}
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
