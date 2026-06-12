import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

export default function MyAccount() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Simple mock
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-brand-black font-body text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto bg-brand-charcoal p-8 rounded-xl border border-brand-gold/20 shadow-2xl mt-12">
              <div className="text-center mb-8">
                <h1 className="font-display font-bold text-3xl text-brand-gold mb-2">Welcome Back</h1>
                <p className="text-brand-cream/70 text-sm">Log in to your Warriors Family account.</p>
              </div>

              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Password</label>
                  <input 
                    type="password" 
                    required
                    className="w-full bg-brand-navy border border-brand-gold/30 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                <div className="flex justify-end">
                  <a href="#" className="text-sm text-brand-gold hover:underline">Forgot password?</a>
                </div>

                <Button type="submit" className="w-full">Secure Login</Button>
              </form>

              <div className="mt-6 text-center text-sm text-brand-cream/60">
                Don't have an account? <a href="/register" className="text-brand-gold hover:underline">Register here</a>
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <div className="flex justify-between items-end mb-12 border-b border-brand-gold/20 pb-6">
                <div>
                  <h1 className="font-display font-bold text-4xl text-white mb-2">My War Room</h1>
                  <p className="text-brand-cream/80 text-lg">Welcome back, Warrior.</p>
                </div>
                <Button onClick={handleLogout} variant="outline" size="sm">Log Out</Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/prayer-request" className="bg-brand-charcoal p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold/60 transition-colors flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold text-2xl mb-4 group-hover:scale-110 transition-transform">🙏</div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">My Prayer Requests</h3>
                  <p className="text-sm text-brand-cream/70">Track submitted requests</p>
                </a>
                
                <a href="/testimonies/submit" className="bg-brand-charcoal p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold/60 transition-colors flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold text-2xl mb-4 group-hover:scale-110 transition-transform">✨</div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">My Testimonies</h3>
                  <p className="text-sm text-brand-cream/70">Share what God has done</p>
                </a>

                <a href="/books" className="bg-brand-charcoal p-6 rounded-xl border border-brand-gold/20 hover:border-brand-gold/60 transition-colors flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold text-2xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">My Downloads</h3>
                  <p className="text-sm text-brand-cream/70">Access manuals & books</p>
                </a>
              </div>
            </div>
          )}

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
