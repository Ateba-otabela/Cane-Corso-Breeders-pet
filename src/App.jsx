import { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  LifeBuoy,
  Trophy,
  X,
} from "lucide-react";
import Header from "./components/Header.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ApplicationForm from "./components/ApplicationForm.jsx";
import Footer from "./components/Footer.jsx";
import { features, galleryItems, logo, testimonials } from "./data.js";

const galleryCategories = ["All", "Puppies", "Adults", "Breeding", "Facility"];

function Gallery() {
  const [category, setCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const items = useMemo(
    () =>
      galleryItems
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter((item) => category === "All" || item.category === category),
    [category],
  );

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") {
        setLightboxIndex((index) => (index + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((index) => (index - 1 + items.length) % items.length);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [lightboxIndex, items.length]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title reveal">Our Gallery</h2>
        <div className="gallery-filters reveal" role="group" aria-label="Filter gallery">
          {galleryCategories.map((item) => (
            <button
              className={category === item ? "active" : ""}
              key={item}
              onClick={() => {
                setCategory(item);
                setLightboxIndex(null);
              }}
              type="button"
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {items.map((item, index) => (
            <article className="gallery-card reveal" key={item.name}>
              <button
                className="gallery-image-button"
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${item.name} photo`}
              >
                <img className="gallery-image" src={item.image} alt={item.name} loading="lazy" />
                <span className="image-zoom" aria-hidden="true">
                  View photo
                </span>
              </button>
              <div className="gallery-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      {lightboxIndex !== null && items[lightboxIndex] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${items[lightboxIndex].name} photo`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close photo"
            onClick={() => setLightboxIndex(null)}
          >
            <X />
          </button>
          {items.length > 1 && (
            <button
              type="button"
              className="lightbox-prev"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((index) => (index - 1 + items.length) % items.length);
              }}
            >
              <ChevronLeft />
            </button>
          )}
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={items[lightboxIndex].image} alt={items[lightboxIndex].name} />
            <figcaption>{items[lightboxIndex].name}</figcaption>
          </figure>
          {items.length > 1 && (
            <button
              type="button"
              className="lightbox-next"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((index) => (index + 1) % items.length);
              }}
            >
              <ChevronRight />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title reveal">Happy Owners</h2>
        <p className="section-subtitle reveal">
          Hear what our clients say about their Perfect Cane Corsos
        </p>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card reveal" key={item.name}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>{item.quote}</p>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <div className="testimonial-author">
                <div className="avatar" aria-hidden="true">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero" id="home">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={(event) => {
              event.currentTarget.playbackRate = 0.65;
            }}
            poster="/assets/gallery/39740951.jpeg"
            aria-hidden="true"
          >
            <source src="/assets/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content fade-in">
            <h1>Cane Corso Breeders</h1>
            <p className="subtitle">
              Meet your loyal companion. Healthy, well-tempered puppies raised with exceptional care.
            </p>
            <div className="hero-buttons">
              <a className="btn btn-accent" href="#application">
                Apply for a Puppy
              </a>
              <a className="btn btn-outline" href="#about">
                Learn More
              </a>
            </div>
          </div>
          <a className="scroll-down" href="#about" aria-label="Scroll to About">
            <ChevronDown size={25} />
          </a>
        </section>
        <section className="about-section" id="about">
          <div className="container">
            <h2 className="section-title reveal">About Perfect Cane Corsos</h2>
            <div className="about-content">
              <div className="about-copy reveal">
                <p>
                  At Perfect Cane Corsos, we are passionate about preserving and improving the Cane
                  Corso breed. Our breeding program focuses on health, temperament, and conformation
                  to the breed standard.
                </p>
                <p>
                  Located on a spacious property that allows our dogs to thrive, we raise our
                  puppies in a family environment with plenty of socialization and early training.
                </p>
                <p>
                  We carefully select breeding pairs to produce puppies that embody the best
                  qualities of the Cane Corso - loyal, intelligent, and majestic guardians.
                </p>
              </div>
              <img
                className="about-image reveal"
                src="/assets/gallery/29063076.jpeg"
                alt="Cane Corso dog"
                loading="lazy"
              />
            </div>
            <div className="features-grid">
              {features.map((feature) => {
                const FeatureIcon = {
                  health: HeartPulse,
                  champion: Trophy,
                  support: LifeBuoy,
                }[feature.icon];

                return (
                  <article className="feature-card reveal" key={feature.title}>
                    <span className="feature-icon" aria-hidden="true">
                      <FeatureIcon size={30} strokeWidth={1.8} />
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <Gallery />
        <Testimonials />
        <ContactForm />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
