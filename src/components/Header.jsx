import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { logo } from "../data.js";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
  ["Application", "#application"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 40);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {menuOpen && (
        <button
          className="mobile-menu-overlay"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        />
      )}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container navbar">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img src={logo} alt="" />
            <span className="brand-copy">
              <span className="brand-name">Perfect Cane Corsos</span>
              <span className="brand-tagline">Excellence in Breeding</span>
            </span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Toggle menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={32} />}
          </button>
          <nav className={`main-nav${menuOpen ? " open" : ""}`}>
            <ul>
              {links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={closeMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="header-email" href="mailto:perfectcanecorsos2019@gmail.com">
              <Mail size={15} aria-hidden="true" />
              perfectcanecorsos2019@gmail.com
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
