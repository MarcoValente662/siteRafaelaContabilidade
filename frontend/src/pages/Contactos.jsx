import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Contactos = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div data-testid="contact-page">
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="max-w-3xl">
            <p className="overline mb-6">— {t.contact.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.05]">
              {t.contact.title}
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{t.contact.sub}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="overline">— {t.contact.phoneLabel}</h3>
                    <p className="font-display text-base font-medium text-navy mt-1.5" data-testid="contact-phone">
                      {t.contact.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="overline">— {t.contact.addressLabel1}</h3>
                    <p className="font-display text-base font-medium text-navy mt-1.5" data-testid="contact-address">
                      {t.contact.address1}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="overline">— {t.contact.addressLabel2}</h3>
                    <p className="font-display text-base font-medium text-navy mt-1.5" data-testid="contact-address">
                      {t.contact.address2}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="overline">— {t.contact.hoursLabel}</h3>
                  <p className="font-display text-base font-medium text-navy mt-1.5">{t.contact.hours}</p>
                </div>
              </div>

              <div>
                <h3 className="overline mb-4">— {t.contact.socialLabel}</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/reisreis.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-social-facebook"
                    aria-label="Facebook"
                    className="w-11 h-11 border border-slate-200 hover:bg-navy hover:text-white hover:border-navy text-navy rounded-sm flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="instagram.com/reisreis.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-social-instagram"
                    aria-label="Instagram"
                    className="w-11 h-11 border border-slate-200 hover:bg-navy hover:text-white hover:border-navy text-navy rounded-sm flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/reisreis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-social-linkedin"
                    aria-label="LinkedIn"
                    className="w-11 h-11 border border-slate-200 hover:bg-navy hover:text-white hover:border-navy text-navy rounded-sm flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8F9FA] p-8 lg:p-10 border border-slate-200">
                <h2 className="font-display text-2xl font-bold text-navy mb-6 tracking-tight">
                  {t.contact.formTitle}
                </h2>

                {submitted && (
                  <div
                    data-testid="form-success"
                    className="mb-6 p-4 bg-white border border-navy/20 text-navy flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{t.contact.formSuccess}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-[0.15em] font-medium text-slate-500 mb-2 block">
                        {t.contact.formName}
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        data-testid="form-name"
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-navy outline-none text-sm rounded-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.15em] font-medium text-slate-500 mb-2 block">
                        {t.contact.formEmail}
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        data-testid="form-email"
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-navy outline-none text-sm rounded-sm transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-[0.15em] font-medium text-slate-500 mb-2 block">
                        {t.contact.formPhone}
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        data-testid="form-phone"
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-navy outline-none text-sm rounded-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.15em] font-medium text-slate-500 mb-2 block">
                        {t.contact.formSubject}
                      </label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        data-testid="form-subject"
                        className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-navy outline-none text-sm rounded-sm transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.15em] font-medium text-slate-500 mb-2 block">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      data-testid="form-message"
                      className="w-full px-4 py-3 bg-white border border-slate-200 focus:border-navy outline-none text-sm rounded-sm transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    data-testid="form-submit"
                    className="inline-flex items-center gap-2 bg-navy hover:bg-[#102F63] text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
                  >
                    {t.contact.formSubmit}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-8 tracking-tight">
              {t.contact.mapTitle} - {t.contact.mapTitleLocation1}
            </h2>
            <div className="border border-slate-200 overflow-hidden" data-testid="contact-map">
              <iframe
                title="Office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.047828%2C37.098704%2C-8.017828%2C37.068704&layer=mapnik&marker=37.083704%2C-8.032828"
                className="w-full h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-sm text-slate-500">{t.contact.address1}</p>


          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-8 tracking-tight">
            {t.contact.mapTitle} - {t.contact.mapTitleLocation2}
          </h2>
          <div className="border border-slate-200 overflow-hidden" data-testid="contact-map">
            <iframe
              title="Office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-9.1596758%2C38.7197557%2C-9.1296758%2C38.7497557&layer=mapnik&marker=38.7347557%2C-9.1446758"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-sm text-slate-500">{t.contact.address2}</p>
        </div>
      </section>
    </div>
  );
};

export default Contactos;
