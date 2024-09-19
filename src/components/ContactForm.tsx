import { FormEvent } from "react";
import "../css/ContactForm.css";

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

export const ContactForm: React.FC = () => {
  return (
    <>
      <section className="contact-form">
        <div>
          <h1 className="mb-2">{"Connect with me"}</h1>
          <p className="mb-5 text-gray">
            {
              "Have a question or want to work together? Leave your details and I'll get back to you as soon as possible."
            }
          </p>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-col">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                />
              </div>

              <div className="contact-form-col">
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                />
              </div>
            </div>

            <div className="contact-form-row">
              <textarea
                required
                id="message"
                name="message"
                placeholder="Message*"
              ></textarea>
            </div>

            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
