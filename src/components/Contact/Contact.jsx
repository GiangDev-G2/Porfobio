import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";
import "./Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Thay thế các mã này bằng mã thực tế từ tài khoản EmailJS của bạn
    const SERVICE_ID = "service_sd0bqih";
    const TEMPLATE_ID = "template_19rgtuq";
    const PUBLIC_KEY = "SPqDC_EbWmn79y2h-";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      },
      (error) => {
        console.error(error.text);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      },
    );
  };

  return (
    <section className="section bg-alt" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("contact_title")}
        </motion.h2>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>{t("contact_subtitle")}</h3>
            <p>{t("contact_desc")}</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="contact-label">
                    {t("contact_form_email")}
                  </span>
                  <a
                    href="mailto:truongiang141105g2@gmail.com"
                    className="contact-text"
                  >
                    truongiang141105g2@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="contact-label">
                    {t("about_exp") === "Kinh nghiệm" ? "Điện thoại" : "Phone"}
                  </span>
                  <span className="contact-text">+84 0356229826</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="contact-label">{t("about_loc")}</span>
                  <span className="contact-text">{t("contact_loc_val")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-card card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t("contact_form_name")}</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder={t("contact_form_name_ph")}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t("contact_form_email")}</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder={t("contact_form_email_ph")}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t("contact_form_subject")}</label>
                <input
                  type="text"
                  id="subject"
                  name="user_subject"
                  placeholder={t("contact_form_subject_ph")}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("contact_form_msg")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t("contact_form_msg_ph")}
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn-primary form-submit ${status !== "idle" ? "loading" : ""}`}
                disabled={status !== "idle"}
              >
                {status === "sending" ? (
                  "..."
                ) : (
                  <>
                    {t("contact_btn")} <Send size={18} />
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    className="status-message success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle size={18} /> {t("contact_success")}
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    className="status-message error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <AlertCircle size={18} /> {t("contact_error")}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
