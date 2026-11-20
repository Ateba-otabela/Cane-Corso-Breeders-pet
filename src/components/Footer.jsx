import { Mail } from "lucide-react";
import { logo } from "../data.js";

const footerLinks = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
  ["Application", "#application"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a className="brand footer-brand" href="#home">
              <img src={logo} alt="" />
              <span className="brand-copy">
                <span className="brand-name">Perfect Cane Corsos</span>
                <span className="brand-tagline">Excellence in Breeding</span>
              </span>
            </a>
            <p>
              Perfect Cane Corsos is dedicated to breeding healthy, well-tempered Cane Corsos that
              exemplify the breed standard while being exceptional family companions.
            </p>
            <div className="social-links">
              <a href="mailto:perfectcanecorsos2019@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {footerLinks.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>Email: perfectcanecorsos2019@gmail.com</li>
              <li>Hours: Mon-Sat 9am-5pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2019 Perfect Cane Corsos. All rights reserved.</p>
          <img src={logo} alt="" />
          <p>Designed with love for exceptional dogs</p>
        </div>
      </div>
    </footer>
  );
}
