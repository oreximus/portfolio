import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      const templateParams = {
        username,
        phoneNumber,
        email,
        subject,
        message,
      };

      emailjs.send('service_dwgym7u', 'template_k3t8ton', templateParams, 'DmbJWFOqMCWQR0Fkr')
        .then((response) => {
          setSuccessMsg(`Thank you dear ${username}, Your message has been sent successfully!`);
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((err) => {
          setErrMsg("Failed to send your message. Please try again later.");
        });
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
        <ContactLeft />
        <div className="w-full lg:w-3/5 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
          <form onSubmit={handleSend} className="flex flex-col gap-6">
            {errMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center text-orange-500 animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center text-green-500 animate-bounce">
                {successMsg}
              </p>
            )}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col gap-4 lg:w-1/2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Your name
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`contactInput ${errMsg === "Username is required!" && "outline-designColor"}`}
                />
              </div>
              <div className="flex flex-col gap-4 lg:w-1/2">
                <label className="text-sm text-gray-400 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`contactInput ${errMsg === "Phone number is required!" && "outline-designColor"}`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-400 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`contactInput ${errMsg === "Please give your Email!" && "outline-designColor"}`}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-400 uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`contactInput ${errMsg === "Please give your Subject!" && "outline-designColor"}`}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-400 uppercase tracking-wide">
                Message
              </label>
              <textarea
                cols="30"
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`contactTextArea ${errMsg === "Message is required!" && "outline-designColor"}`}
              ></textarea>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border hover:border-designColor"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
