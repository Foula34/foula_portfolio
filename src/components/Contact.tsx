import { Mail, Phone, Linkedin, Send, CheckCircle2, MapPin } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  theme: 'light' | 'dark';
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fofanafoula70@gmail.com',
      href: 'mailto:fofanafoula70@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+224 624 36 68 97',
      href: 'tel:+224624366897',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Foula Fofana',
      href: 'https://linkedin.com/in/foula-fofana-1769782a5',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Conakry, Guinée',
      href: null,
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-24 px-6 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'dark' 
              ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' 
              : 'bg-orange-50 text-orange-600 border border-orange-100'
          }`}>
            Entrons en contact
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Me <span className="text-orange-500">contacter</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Un projet en tête ? Une opportunité à discuter ? Je suis à votre écoute !
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div
                    className={`group relative overflow-hidden p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                      theme === 'dark'
                        ? 'bg-slate-800 hover:bg-slate-750 hover:shadow-xl hover:shadow-orange-500/10'
                        : 'bg-gray-50 hover:bg-white shadow-md hover:shadow-xl'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${info.color} shadow-lg`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-sm mb-1 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {info.label}
                        </p>
                        <p
                          className={`font-semibold ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className={`mt-8 p-6 rounded-2xl border-2 border-dashed ${
              theme === 'dark' 
                ? 'border-slate-700 bg-slate-800/30' 
                : 'border-gray-200 bg-gray-50/50'
            }`}>
              <p className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                 <strong>Réponse rapide garantie !</strong> Je m'engage à répondre à tous les messages dans les 24 heures.
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-3">
            <div className={`p-8 rounded-2xl ${
              theme === 'dark' ? 'bg-slate-800' : 'bg-gray-50 shadow-xl'
            }`}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.name
                        ? 'border-red-500'
                        : theme === 'dark'
                        ? 'bg-slate-900 border-slate-700 text-white focus:bg-slate-800'
                        : 'bg-white border-gray-200 text-slate-900'
                    }`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.email
                        ? 'border-red-500'
                        : theme === 'dark'
                        ? 'bg-slate-900 border-slate-700 text-white focus:bg-slate-800'
                        : 'bg-white border-gray-200 text-slate-900'
                    }`}
                    placeholder="votre.email@exemple.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.message
                        ? 'border-orange-500 '
                        : theme === 'dark'
                        ? 'bg-slate-900 border-slate-700 text-white focus:bg-slate-800'
                        : 'bg-white border-gray-200 text-slate-900'
                    }`}
                    placeholder="Parlez-moi de votre projet..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-orange-500  text-white'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-2xl hover:shadow-orange-500/50'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      Message envoyé avec succès !
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}