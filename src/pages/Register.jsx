import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase';

export default function Register() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: { data: { full_name: formData.full_name } }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await supabase.from('profiles').insert([{
        id: data.user.id,
        full_name: formData.full_name,
        email: formData.email,
      }]);
    }

    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md w-full">

          <div className="bg-brand-charcoal p-8 rounded-xl border border-brand-gold/20 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="font-display font-bold text-3xl text-brand-gold mb-2">Create Account</h1>
              <p className="text-brand-cream/70 text-sm">Join the Warriors Family spiritual command center.</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
                <p className="text-green-400 font-display text-lg mb-2">🎉 Account Created!</p>
                <p className="text-brand-cream/80 text-sm mb-4">Check your email to confirm your account, then login.</p>
                <Link to="/my-account" className="text-brand-gold underline text-sm">Go to Login</Link>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-center">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {!success && (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Create a strong password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-6 text-center text-sm text-brand-cream/60">
              Already have an account?{' '}
              <Link to="/my-account" className="text-brand-gold hover:underline">
                Login here
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}