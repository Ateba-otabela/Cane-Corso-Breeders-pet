import EmailForm from "./EmailForm.jsx";

export default function ApplicationForm() {
  return (
    <section className="application-section" id="application">
      <div className="container">
        <h2 className="section-title reveal">Puppy Application</h2>
        <div className="application-content">
          <div className="application-copy reveal">
            <h3>Start Your Journey</h3>
            <p>
              Interested in one of our Cane Corso puppies? Please complete our application form to
              begin the process. We carefully screen all potential homes to ensure our puppies go
              to the best possible families.
            </p>
            <p>
              After submitting your application, we&apos;ll review it and contact you to discuss
              next steps.
            </p>
            <div className="requirements">
              <h4>Application Requirements:</h4>
              <ul>
                <li>Must be at least 21 years old</li>
                <li>Complete all fields in the application</li>
                <li>Agree to our purchase agreement terms</li>
                <li>Be prepared for a home visit or video call</li>
              </ul>
            </div>
          </div>
          <EmailForm
            type="Puppy application"
            className="application-form reveal"
            submitLabel="Submit Application"
          >
            <div className="form-two-column">
              <label>
                Full Name
                <input autoComplete="name" name="full_name" required />
              </label>
              <label>
                Email Address
                <input autoComplete="email" name="email" type="email" required />
              </label>
              <label>
                Phone Number
                <input autoComplete="tel" name="phone" type="tel" required />
              </label>
              <label>
                Puppy of Interest
                <select name="puppy_of_interest" defaultValue="" required>
                  <option value="" disabled>
                    Select a puppy
                  </option>
                  <option>Olive</option>
                  <option>Titan</option>
                  <option>Gomora</option>
                  <option>Nala</option>
                  <option>Chloe</option>
                  <option>Ultron</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label>
              Tell us about your experience with dogs
              <textarea name="experience" rows="3" required />
            </label>
            <label>
              Tell us about your home and family
              <textarea name="home_details" rows="3" required />
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="purchase_agreement" value="Agreed" required />
              <span>I agree to discuss and review the purchase agreement terms.</span>
            </label>
          </EmailForm>
        </div>
      </div>
    </section>
  );
}
