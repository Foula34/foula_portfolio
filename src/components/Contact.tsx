import {
  Mail,
  Phone,
  Linkedin,
  Send,
  CheckCircle2,
  MapPin,
  Github,
  ArrowUpRight,
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContactProps {
  theme: 'light' | 'dark';
}

const CONTACT_EMAIL = 'fofanafoula70@gmail.com';

export default function Contact({ theme: _theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const subject =
      formData.subject.trim() || `Contact portfolio — ${formData.name}`;
    const body = `Bonjour Foula,\n\n${formData.message}\n\n—\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const inputClass =
    'w-full px-0 py-3 bg-transparent border-0 border-b border-border text-text placeholder-text-muted/60 focus:outline-none focus:border-accent transition-colors duration-200';

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 bg-bg-alt">
      <div className="max-w-content mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-text-muted mb-6 tracking-wide"
        >
          <span className="rule mr-3" /> 05 — Contact
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-text mb-4"
        >
          On <span className="italic text-accent">parle</span> ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base text-text-muted mb-16 max-w-prose"
        >
          Un projet, une question, une opportunité ? Écris-moi directement ou
          utilise le formulaire — la réponse arrivera dans la journée.
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT — Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
                Direct
              </div>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group inline-flex items-start gap-3 text-text hover:text-accent transition-colors duration-200"
                  >
                    <Mail size={18} strokeWidth={1.5} className="mt-1" />
                    <span>
                      <span className="block font-display text-xl">
                        {CONTACT_EMAIL}
                      </span>
                      <span className="block font-mono text-xs text-text-muted">
                        Email
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+224624366897"
                    className="group inline-flex items-start gap-3 text-text hover:text-accent transition-colors duration-200"
                  >
                    <Phone size={18} strokeWidth={1.5} className="mt-1" />
                    <span>
                      <span className="block font-display text-xl">
                        +224 624 36 68 97
                      </span>
                      <span className="block font-mono text-xs text-text-muted">
                        Téléphone
                      </span>
                    </span>
                  </a>
                </li>
                <li className="inline-flex items-start gap-3 text-text-muted">
                  <MapPin size={18} strokeWidth={1.5} className="mt-1" />
                  <span>
                    <span className="block font-display text-xl text-text">
                      Conakry, Guinée
                    </span>
                    <span className="block font-mono text-xs text-text-muted">
                      Localisation
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
                Sur le web
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/Foula34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-text hover:text-accent transition-colors duration-200"
                  >
                    <Github size={16} strokeWidth={1.75} />
                    github.com/Foula34
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/foula-fofana-1769782a5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-text hover:text-accent transition-colors duration-200"
                  >
                    <Linkedin size={16} strokeWidth={1.75} />
                    linkedin.com/in/foula-fofana
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-text-muted mb-6">
              Formulaire
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="text-accent text-xs mt-2 font-mono">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-accent text-xs mt-2 font-mono">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet (optionnel)"
                  className={inputClass}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows={5}
                  className={`${inputClass} resize-none pt-4`}
                />
                {errors.message && (
                  <p className="text-accent text-xs mt-2 font-mono">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg px-6 py-3.5 font-medium transition-colors duration-200 disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    Client mail ouvert
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
