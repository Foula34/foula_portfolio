import { Mail, Phone, Linkedin, Send } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-800' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Me <span className="text-orange-500">contacter</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Restons en contact
            </h3>
            <p
              className={`mb-8 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              N'hésitez pas à me contacter pour discuter de projets, d'opportunités
              ou simplement pour échanger.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:fofanafoula70@gmail.com"
                className={`flex items-center p-4 rounded-lg transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-slate-900 hover:bg-slate-700'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="p-3 bg-orange-500 rounded-lg mr-4">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Email
                  </p>
                  <p
                    className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    fofanafoula70@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+224624366897"
                className={`flex items-center p-4 rounded-lg transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-slate-900 hover:bg-slate-700'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="p-3 bg-orange-500 rounded-lg mr-4">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Téléphone
                  </p>
                  <p
                    className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    +224 624 36 68 97
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/foula-fofana-1769782a5"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-4 rounded-lg transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-slate-900 hover:bg-slate-700'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="p-3 bg-orange-500 rounded-lg mr-4">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    LinkedIn
                  </p>
                  <p
                    className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Foula Fofana
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-gray-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-gray-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-gray-300 text-slate-900'
                  }`}
                />
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-4 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                {isSubmitted ? (
                  'Message envoyé !'
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Envoyer
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
