import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase';

export default function SubmitTestimony() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    category: '',
    testimony: '',
    permission_granted: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from('testimonies')
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
        category: '',
        testimony: '',
        permission_granted: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl w-full">

          <div className="text-center mb-10">
            <h1 className="font-display font-bold text-4xl text-brand-gold mb-4">
              Share Your Testimony
            </h1>
            <p className="text-brand-cream/80 text-lg">
              "And they overcame him by the blood of the Lamb, and by the word of their testimony..." - Rev 12:11
            </p>
          </div>

          <div className="bg-brand-charcoal p-8 md:p-10 rounded-xl border border-brand-gold/20 shadow-2xl">

            {/* Success Message */}
            {success && (
              <div className="mb-8 p-6 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
                <p className="text-green-400 font-display text-xl mb-2">🙌 Testimony Received!</p>
                <p className="text-brand-cream/80 text-sm">Thank you for sharing what God has done. Your testimony will encourage others!</p>
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
                  <label className="block text-sm font-medium mb-2 text-white">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Testimony Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none"
                  >
                    <option value="">Select Category...</option>
                    <option value="healing">Healing & Health</option>
                    <option value="financial">Financial Breakthrough</option>
                    <option value="deliverance">Deliverance</option>
                    <option value="marital">Marital / Family</option>
                    <option value="legal">Legal Victory</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Your Testimony *</label>
                <textarea
                  name="testimony"
                  value={formData.testimony}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                  placeholder="Tell us what God has done for you..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="permission_granted"
                  name="permission_granted"
                  checked={formData.permission_granted}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-brand-gold/30 text-brand-gold focus:ring-brand-gold bg-brand-navy"
                />
                <label htmlFor="permission_granted" className="text-sm text-brand-cream/80 leading-relaxed cursor-pointer">
                  I give permission for this testimony to be shared publicly to encourage others (Personal contact details will remain private).
                </label>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Testimony'}
                </Button>
              </div>

            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}