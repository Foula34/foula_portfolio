import { Mail, Phone, Linkedin, Send, CheckCircle2, MapPin, Sparkles, Github } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContactProps {
  theme: 'light' | 'dark';
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fofanafoula70@gmail.com',
      href: 'mailto:fofanafoula70@gmail.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+224 624 36 68 97',
      href: 'tel:+224624366897',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Conakry, Guinée',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Foula34',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/foula-fofana-1769782a5',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-24 px-6 transition-colors duration-300 relative overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'
        }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            style={{
              border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
            }}
          >
            <Sparkles size={16} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
            <span className={`text-sm font-medium font-mono ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
              }`}>
              CONTACT
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Une idée de projet ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass transition-all duration-300"
                    style={{
                      border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                    }}
                  >
                    <div className={`p-3 rounded-lg glass ${theme === 'dark' ? 'bg-cyan-500/10' : 'bg-blue-500/10'
                      }`}
                      style={{
                        border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.3)' : 'rgba(0, 102, 255, 0.3)'}`,
                      }}
                    >
                      <Icon size={24} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
                    </div>
                    <div>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.label}
                      </p>
                      <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl glass transition-all duration-300"
                    style={{
                      border: `1px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                    }}
                  >
                    <Icon size={24} className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className={`w-full px-6 py-4 rounded-xl glass transition-all duration-300 focus:outline-none ${theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-slate-900 placeholder-gray-400'
                    }`}
                  style={{
                    border: `2px solid ${errors.name
                      ? '#ef4444'
                      : theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'
                      }`,
                  }}
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  className={`w-full px-6 py-4 rounded-xl glass transition-all duration-300 focus:outline-none ${theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-slate-900 placeholder-gray-400'
                    }`}
                  style={{
                    border: `2px solid ${errors.email
                      ? '#ef4444'
                      : theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'
                      }`,
                  }}
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet"
                  className={`w-full px-6 py-4 rounded-xl glass transition-all duration-300 focus:outline-none ${theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-slate-900 placeholder-gray-400'
                    }`}
                  style={{
                    border: `2px solid ${theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'}`,
                  }}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows={6}
                  className={`w-full px-6 py-4 rounded-xl glass transition-all duration-300 focus:outline-none resize-none ${theme === 'dark' ? 'text-white placeholder-gray-500' : 'text-slate-900 placeholder-gray-400'
                    }`}
                  style={{
                    border: `2px solid ${errors.message
                      ? '#ef4444'
                      : theme === 'dark' ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 102, 255, 0.2)'
                      }`,
                  }}
                />
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className={`w-full px-8 py-4 rounded-xl font-medium transition-all duration-300 ${isSubmitted
                  ? 'bg-green-500 text-white'
                  : theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  }`}
                style={{
                  boxShadow: isSubmitted
                    ? '0 0 30px rgba(34, 197, 94, 0.4)'
                    : theme === 'dark'
                      ? '0 0 30px rgba(0, 212, 255, 0.4)'
                      : '0 0 30px rgba(0, 102, 255, 0.4)',
                }}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 size={20} />
                    Message envoyé !
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={20} />
                    Envoyer le message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}