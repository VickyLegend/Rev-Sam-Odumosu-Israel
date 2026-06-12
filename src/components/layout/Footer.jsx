import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, contactInfo } from '../../constants/content';

export default function Footer() {
  const socials = [
    { name: 'YouTube', url: contactInfo.socials.youtube, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M21.582 6.186a2.66 2.66 0 0 0-1.875-1.884c-1.654-.445-8.29-.445-8.29-.445s-6.635 0-8.289.444a2.662 2.662 0 0 0-1.875 1.885C.807 7.848.807 12 .807 12s0 4.153.446 5.814a2.666 2.666 0 0 0 1.875 1.885c1.654.444 8.289.444 8.289.444s6.636 0 8.29-.444a2.666 2.666 0 0 0 1.875-1.885c.447-1.661.447-5.814.447-5.814s0-4.152-.447-5.814ZM9.645 15.116V8.884L15.109 12l-5.464 3.116Z"/></svg> },
    { name: 'Facebook', url: contactInfo.socials.facebook, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.15 9-5.48 9-10.95z"/></svg> },
    { name: 'Instagram', url: contactInfo.socials.instagram, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.69 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.24 1.69-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07 2.76.26.26 2.75.07 7.04.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.19 4.29 2.68 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.29-.19 6.78-2.68 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.19-4.29-2.68-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg> },
    { name: 'TikTok', url: contactInfo.socials.tiktok, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.53.02C13.84 0 15.14.01 15.44.04c.06.72.44 3.19 3.01 3.39v2.53c-1.12-.02-2.14-.3-3.05-.8v8.61c0 3.32-2.58 6.22-6.19 6.22-3.32 0-5.83-2.61-5.74-5.91.09-3.23 2.76-5.89 5.98-5.99v2.55c-1.89.09-3.41 1.58-3.47 3.39-.06 1.83 1.35 3.48 3.21 3.58 1.95.12 3.37-1.39 3.37-3.34V.02h-2.02z"/></svg> },
    { name: 'X', url: contactInfo.socials.twitter, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { name: 'WhatsApp', url: contactInfo.socials.whatsapp, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
    { name: 'Telegram', url: contactInfo.socials.telegram, icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.32-.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
  ];

  return (
    <footer className="bg-brand-black border-t border-brand-gold/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display-deco text-2xl text-brand-gold block mb-4">
              Sam Odumosu-Israel
            </Link>
            <p className="font-body text-brand-cream/80 text-sm mb-6 leading-relaxed">
              "Raising warrior believers who refuse defeat."
            </p>
            <div className="space-y-4 text-sm text-brand-cream/70">
              <p>{contactInfo.phone}</p>
              <p>Email: {contactInfo.email}</p>
              <div className="flex flex-wrap gap-4 mt-6">
                 {socials.map(social => (
                   <a 
                     key={social.name} 
                     href={social.url} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-brand-cream/60 hover:text-brand-gold transition-colors"
                     aria-label={social.name}
                   >
                     {social.icon}
                   </a>
                 ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-1">
            <h4 className="font-display text-white mb-6 uppercase tracking-wider text-sm border-b border-brand-gold/20 pb-2 inline-block">Navigate</h4>
            <ul className="space-y-4">
              {footerLinks.navigate.map(link => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-display text-white mb-6 uppercase tracking-wider text-sm border-b border-brand-gold/20 pb-2 inline-block">Ministry</h4>
            <ul className="space-y-4">
              {footerLinks.ministry.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-display text-white mb-6 uppercase tracking-wider text-sm border-b border-brand-gold/20 pb-2 inline-block">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-brand-cream/60 hover:text-brand-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-cream/40">
          <p>© {new Date().getFullYear()} Rev. Sam Odumosu-Israel Ministries. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
            <span className="text-brand-cream/20">|</span>
            <span>Built by SMATO Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
