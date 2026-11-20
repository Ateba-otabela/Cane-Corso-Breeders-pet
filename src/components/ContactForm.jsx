import { Clock3, Mail, MapPin } from "lucide-react";
import EmailForm from "./EmailForm.jsx";

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title reveal">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-details reveal">
            <h3>Get in Touch</h3>
            <p className="contact-intro">
              Have questions about our breeding program or available puppies? Reach out to us!
            </p>
            <div className="contact-info">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:perfectcanecorsos2019@gmail.com">
                  perfectcanecorsos2019@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <Clock3 size={22} />
              </div>
              <div>
                <h4>Hours</h4>
                <p>Monday - Saturday: 9am - 5pm</p>
                <p>Sunday: By appointment only</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>By appointment</p>
              </div>
            </div>
          </div>
          <EmailForm
            type="Contact enquiry"
            className="contact-form reveal"
            submitLabel="Send Message"
          >
            <label>
              Your Name
              <input autoComplete="name" name="name" placeholder="Your Name" required />
            </label>
            <label>
              Email Address
              <input
                autoComplete="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </label>
            <label>
              Subject
              <input name="subject" placeholder="Subject" required />
            </label>
            <label>
              Your Message
              <textarea name="message" rows="5" placeholder="Your Message" required />
            </label>
          </EmailForm>
        </div>
      </div>
    </section>
  );
}
