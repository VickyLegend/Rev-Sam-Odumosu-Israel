import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); }}>
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Password</label>
                <input 
                  type="password" 
                  required
                  className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Confirm Password</label>
                <input 
                  type="password" 
                  required
                  className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 placeholder-brand-muted text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full">Create Account</Button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-brand-cream/60">
              Already have an account? <a href="/my-account" className="text-brand-gold hover:underline">Login here</a>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
