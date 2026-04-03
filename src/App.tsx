/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Heart, 
  Smile, 
  Frown, 
  Angry, 
  HelpCircle, 
  CloudLightning, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Shield, 
  Sparkles, 
  Users,
  Menu,
  X,
  Lock,
  Star
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const emotions = [
    { name: 'Happy', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=300&q=80' },
    { name: 'Sad', image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=300&q=80' },
    { name: 'Angry', image: 'https://images.unsplash.com/photo-1564227901-6b1d20bebe9d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Confused', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=300&q=80' },
    { name: 'Fear', image: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=300&q=80' },
    { name: 'Depressed', image: 'https://images.unsplash.com/photo-1498805983167-a523078d762c?auto=format&fit=crop&w=300&q=80' },
  ];

  const reviews = [
    { name: "Satish", text: "Finding this platform changed my perspective. The support is incredible and genuine.", role: "Teacher" },
    { name: "Nagarathna", text: "A wonderful initiative. It feels like talking to a caring friend who truly listens.", role: "Homemaker" },
    { name: "Chandan", text: "The motivation and guidance provided here helped me through my toughest days.", role: "Entrepreneur" },
    { name: "Lakshmi Devi", text: "I am so grateful for VV Solutions. They bring light and hope when everything feels dark.", role: "HOD" },
    { name: "Vamshi", text: "VV Solutions helped me when I had no one else to talk to. The listener was so kind and understanding.", role: "Student" },
    { name: "Vandana", text: "I was feeling extremely overwhelmed with my studies and personal life. Reaching out was the best decision I made.", role: "Graduate" },
    { name: "Pallavi", text: "A truly safe space. I felt heard without any judgment. Thank you for doing this.", role: "Professional" },
    { name: "Vikram D.", text: "The daily motivation keeps me going. It's like having a supportive friend in my pocket 24/7.", role: "Software Engineer" },
    { name: "Sneha R.", text: "I was hesitant at first, but the anonymity and care provided here gave me the courage to speak up about my anxiety.", role: "College Student" },
    { name: "Arjun T.", text: "Whenever I feel lost or confused, a quick chat here helps me ground myself. Highly recommended for anyone struggling.", role: "Freelancer" }
  ];

  const services = [
    { title: 'Emotional Support', desc: 'Talk to someone who listens without judging.', icon: Heart },
    { title: 'Motivation', desc: 'Daily motivation to help you stay strong.', icon: Sparkles },
    { title: 'Guidance', desc: 'Helping you understand and handle your emotions.', icon: Shield },
    { title: 'Friendly Chat', desc: 'Connect with someone when you feel alone.', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-teal-200 scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-teal-600 fill-teal-600" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">VV Solutions</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Home</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Services</a>
              <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Contact</a>
              <a 
                href="https://wa.me/917411837814" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Services</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Reviews</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/calm/1920/1080?blur=4')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/80 to-slate-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6">
              You're Not Alone. We Care.
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Welcome to <span className="text-teal-600">VV Solutions</span>
              <span className="block text-3xl md:text-4xl mt-3 text-slate-600 font-bold">(Value and Vision)</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              You're not alone. We are here to listen, support, and care for you through every step of your journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/917411837814" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us on WhatsApp
              </a>
              <a 
                href="#about" 
                className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all shadow-sm"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Us</h2>
            <div className="prose prose-lg text-slate-600 mx-auto">
              <p className="mb-4">
                <strong>VV Solutions</strong> is a platform created to support people going through emotional struggles. Whether you feel happy, sad, angry, confused, depressed, or alone — we are here for you.
              </p>
              <p>
                Sometimes pain cannot be explained in words. It comes out as tears. At VV Solutions, we listen, we care, and we help you feel better. Our goal is to motivate you, support your mental well-being, and remind you that someone truly cares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">Dedicated to your emotional well-being.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="bg-teal-50 border-y border-teal-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">100% Secure & Confidential</h3>
            <p className="text-slate-600">Your chats and calls are completely secured. Your privacy is our top priority.</p>
          </div>
        </div>
      </section>

      {/* Emotions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Are You Feeling Today?</h2>
            <p className="text-lg text-slate-600">We are here for you, no matter what you're experiencing.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {emotions.map((emotion, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer group w-28 md:w-36"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all border-4 border-white ring-2 ring-slate-50 group-hover:ring-teal-100">
                  <img src={emotion.image} alt={emotion.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="text-lg font-medium text-slate-700">{emotion.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What People Say</h2>
            <p className="text-lg text-slate-600">Real stories from people we've supported.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Message Section */}
      <section className="py-20 bg-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/nature/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Heart className="w-12 h-12 mx-auto mb-6 text-teal-200 fill-teal-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Message for You</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-teal-50">
            "No matter what you are going through, your feelings are valid. 
            You are stronger than you think. 
            We are here for you."
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-16 bg-teal-50">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h2>
                <p className="text-slate-600 mb-10 text-lg">
                  Reach out to us anytime. We are always ready to listen and help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Phone</p>
                      <p className="text-lg font-semibold text-slate-900">7411837814</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Alternate</p>
                      <p className="text-lg font-semibold text-slate-900">8073801532</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email</p>
                      <p className="text-lg font-semibold text-slate-900">support@vvsolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Location</p>
                      <p className="text-lg font-semibold text-slate-900">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 md:p-16 flex flex-col justify-center items-center text-center bg-white">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Need immediate support?</h3>
                <p className="text-slate-600 mb-8">
                  Our WhatsApp support line is open. Send us a message and we'll respond as soon as possible.
                </p>
                <a 
                  href="https://wa.me/917411837814" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-teal-500 fill-teal-500" />
            <span className="text-xl font-bold text-white tracking-tight">VV Solutions</span>
          </div>
          <p className="mb-6">You're Not Alone. We Care.</p>
          <p className="text-sm">© {new Date().getFullYear()} VV Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
