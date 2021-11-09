import "./contact.css";
import Phone from "../../img/phone.png";
import WA from "../../img/wa.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cuk4u1s",
        "template_azar4ns",
        formRef.current,
        "user_8i1MqqYsB27ZJwNIXPQeh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <a href="https://api.whatsapp.com/send/?phone=6287739767330&text&app_absent=0" target="_blank" rel="noreferrer">
              <div className="c-info-item">
                <img src={WA} alt="" className="c-icon" />
                +62 877 3976 7330
              </div>
            </a>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +62 821 2130 3417
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact@apit.dev
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Gading Tutuka Soreang, Bandung, Indonesia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
