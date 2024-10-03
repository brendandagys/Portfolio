import { ChangeEvent, FormEvent, useState } from "react";
import "../css/ContactForm.css";

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    void fetch("https://endpoint.com", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section className="contact-form">
        <div>
          <h1 className="mb-2">{"Connect with me"}</h1>
          <p className="mb-5 text-gray">
            {
              "Have a question or want to work together? Leave your details \
              and I'll get back to you as soon as possible."
            }
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-col">
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="contact-form-col">
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="contact-form-row">
            <textarea
              required
              id="message"
              name="message"
              placeholder="Message*"
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
          </button>
        </form>

        <div></div>
      </section>
    </>
  );
};

export default ContactForm;
