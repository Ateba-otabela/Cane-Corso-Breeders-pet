import { useRef, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { sendEnquiry } from "../services/email.js";

export default function EmailForm({ type, className = "", children, submitLabel }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ kind: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ kind: "loading", message: "" });
    try {
      await sendEnquiry(formRef.current, type);
      formRef.current.reset();
      setStatus({
        kind: "success",
        message: "Thank you! Your message has been sent. We’ll be in touch soon.",
      });
    } catch (error) {
      console.error("EmailJS form submission failed:", error);
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again or email us directly.",
      });
    }
  }

  return (
    <form ref={formRef} className={className} onSubmit={handleSubmit}>
      {children}
      {status.message && (
        <p
          className={`form-status ${status.kind}`}
          role={status.kind === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
      <button className="btn btn-accent form-submit" type="submit" disabled={status.kind === "loading"}>
        {status.kind === "loading" ? (
          <>
            <LoaderCircle className="spin" size={18} />
            Sending…
          </>
        ) : (
          <>
            <Send size={17} />
            {submitLabel}
          </>
        )}
      </button>
    </form>
  );
}
