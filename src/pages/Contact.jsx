import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { contactInfo } from '../constants/content';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from('contact_messages')
      .insert([formData]);

    if (error) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          <div className="text-center mb-16">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Get In <span className="text-brand-gold">Touch</span>
            </h1>
            <p className="font-body text-brand-cream/80 text-lg max-w-2xl mx-auto">
              Have a question about our ministry, resources, or want to invite Rev. Sam for a ministration? Reach out to our team.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Contact Form */}
            <div className="w-full lg:w-3/5 bg-brand-charcoal p-8 md:p-10 rounded-xl border border-brand-gold/20 shadow-2xl">
              <h2 className="font-display text-2xl font-bold mb-8 text-brand-gold">Send A Message</h2>

              {/* Success Message */}
              {success && (
                <div className="mb-8 p-6 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
                  <p className="text-green-400 font-display text-xl mb-2">✅ Message Sent!</p>
                  <p className="text-brand-cream/80 text-sm">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-8 p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-center">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Full Name *</label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none"
                    >
                      <option value="">Select Subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="invitation">Ministry Invitation</option>
                      <option value="partnership">Partnership</option>
                      <option value="relationship">Relationship Matters</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="w-full lg:w-2/5 space-y-8">
              <div className="bg-brand-gold/5 p-8 rounded-xl border border-brand-gold/30">
                <h2 className="font-display text-2xl font-bold mb-6 text-white">Contact Info</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-brand-gold text-lg">📞</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-brand-cream/60 font-bold uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                      <a href={`tel:${contactInfo.phone.replace(/[\s-]/g, '')}`} className="text-white hover:text-brand-gold text-lg transition-colors">{contactInfo.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-brand-gold text-lg">✉️</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-brand-cream/60 font-bold uppercase tracking-wider mb-1">Email Directly</h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-brand-gold text-lg break-all transition-colors">{contactInfo.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-brand-gold text-lg">📍</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-brand-cream/60 font-bold uppercase tracking-wider mb-1">Office</h4>
                      <address className="text-white not-italic text-lg">{contactInfo.address}</address>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-brand-gold/20">
                  <h4 className="text-sm text-brand-cream/60 font-bold uppercase tracking-wider mb-4">Follow Ministry</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href={contactInfo.socials.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-navy border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold/20 transition-colors">
                      YT
                    </a>
                    <a href={contactInfo.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-navy border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold/20 transition-colors">
                      FB
                    </a>
                    <a href={contactInfo.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-navy border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold/20 transition-colors">
                      IG
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}