import React from 'react';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AuthoritySection from '../components/sections/AuthoritySection';
import AboutPreviewSection from '../components/sections/AboutPreviewSection';
import WarriorsFamilySection from '../components/sections/WarriorsFamilySection';
import MidnightPrayersSection from '../components/sections/MidnightPrayersSection';
import LatestVideosSection from '../components/sections/LatestVideosSection';
import FreeBooksSection from '../components/sections/FreeBooksSection';
import TestimoniesPreviewSection from '../components/sections/TestimoniesPreviewSection';
import DonateSection from '../components/sections/DonateSection';
import WarRoomSection from '../components/sections/WarRoomSection';
import FinalCTASection from '../components/sections/FinalCTASection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-black font-body text-white selection:bg-brand-gold/30 selection:text-brand-gold scroll-smooth">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <AuthoritySection />
        <AboutPreviewSection />
        <WarriorsFamilySection />
        <TestimoniesPreviewSection />
        <MidnightPrayersSection />
        <LatestVideosSection />
        <FreeBooksSection />
        <DonateSection />
        <WarRoomSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
