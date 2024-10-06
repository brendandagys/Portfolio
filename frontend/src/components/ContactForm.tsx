import { ChangeEvent, MouseEvent, useState } from "react";
import "../css/ContactForm.css";
import { AnimatedButton } from "./animated-button/AnimatedButton";
import { GradientOverride } from "./animated-button/enums";

interface FormData {
  name: string;
  email: string;
  message: string;
}

enum AlertState {
  none = "none",
  success = "success",
  error = "error",
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertState, setAlertState] = useState(AlertState.none);

  const onSubmit = async (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    try {
      await fetch("https://endpoint.com", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setAlertState(AlertState.success);
      setAlertMessage("Thank you! I will get back to you soon.");
    } catch (e) {
      setAlertState(AlertState.error);
      setAlertMessage(
        "Something went wrong. Please try again later or email \
        me at brendandagys@gmail.com."
      );
      console.error(e);
    } finally {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setAlertState(AlertState.none);
        setAlertMessage(null);
      }, 5000);
    }
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

        <form>
          <div className="contact-form-row">
            <div className="contact-form-col">
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormData((old) => ({ ...old, name: e.target.value }));
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
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFormData((old) => ({ ...old, email: e.target.value }));
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
              value={formData.message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setFormData((old) => ({ ...old, message: e.target.value }));
              }}
            ></textarea>
          </div>

          <div className="mt-2">
            <AnimatedButton
              customStylesContainer={{ width: "9.68rem" }}
              gradientOverride={GradientOverride.purple}
              text="Send message"
              onClick={(e) => {
                void onSubmit(e);
              }}
            />
          </div>
        </form>

        <div className={`contact-form-alert contact-form-alert--${alertState}`}>
          {alertMessage}
        </div>
      </section>
    </>
  );
};

export default ContactForm;
