import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Testimonies from './pages/Testimonies';
import SubmitTestimony from './pages/SubmitTestimony';
import Videos from './pages/Videos';
import MyAccount from './pages/MyAccount';
import Register from './pages/Register';
import Devotional from './pages/Devotional';
import DevotionalSingle from './pages/DevotionalSingle';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import PrayerRequest from './pages/PrayerRequest';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/testimonies/submit" element={<SubmitTestimony />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/devotional" element={<Devotional />} />
        <Route path="/devotional/:slug" element={<DevotionalSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/prayer-request" element={<PrayerRequest />} />
      </Routes>
    </BrowserRouter>
  );
}
