import React from 'react';
// import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, PhoneCall, Mail, MapPin } from 'lucide-react';
import { Instagram , Facebook, Twitter ,Mail, Phone, MapPin  } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand-section">
          <h2 className="brand-name">EXOTIC CARS</h2>
          <p className="tagline">Luxury Redefined</p>
        </div>


        <div className="contact-section">
          <div className="contact-item">
            <Phone className="contact-icon" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" />
            <span>info@exoticcars.com</span>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" />
            <span>Beverly Hills, CA 90210</span>
          </div>
        </div>
        
        <div className="social-links">
          <div className="social-icon">
            <Instagram />
          </div>
          <div className="social-icon">
            <Facebook />
          </div>
          <div className="social-icon">
            <Twitter />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Exotic Cars. The Art of Luxury</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;