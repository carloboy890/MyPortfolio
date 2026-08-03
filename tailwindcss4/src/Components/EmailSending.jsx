import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function EmailSending() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full h-full p-10 space-y-5 text-white
      max-lg:p-4 max-lg:space-y-2 
      max-md:space-y-0 max-md:p-1"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div
        className="flex h-[20%]
      max-md:flex-col max-md:h-auto"
      >
        <div
          className="w-[50%] p-5 space-y-3
        max-md:w-full max-md:p-2 
        max-sm:space-y-1"
        >
          <div
            className="text-[1.2rem]
          max-2xl:text-[1.1rem] max-md:text-[0.9rem]"
          >
            Your Name
          </div>
          <input
            type="text"
            className="bg-white h-10 w-full rounded-3xl pl-4
            max-sm:h-6"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
          />
        </div>
        <div
          className=" w-[50%] p-5 space-y-3
        max-md:w-full max-md:p-2
        max-sm:space-y-1"
        >
          <div
            className="text-[1.2rem]
          max-2xl:text-[1.1rem] max-md:text-[0.9rem]"
          >
            Your Email
          </div>
          <input
            type="text"
            className="bg-white h-10 w-full rounded-3xl pl-4
            max-sm:h-6"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="flex flex-col h-[60%]
      max-md:h-auto"
      >
        <div
          className=" w-full p-5 h-[40%] space-y-3 
        max-md:p-2 max-md:h-auto
        max-sm:space-y-1"
        >
          <div
            className="text-[1.2rem]
          max-2xl:text-[1.1rem] max-md:text-[0.9rem]"
          >
            Subject
          </div>
          <input
            type="text"
            className="bg-white h-10 w-full rounded-3xl pl-4
            max-sm:h-6"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div
          className=" w-full p-5 h-[60%] space-y-3 
        max-md:p-3
        max-sm:space-y-1"
        >
          <div
            className="text-[1.2rem]
          max-2xl:text-[1.1rem] max-md:text-[0.9rem]"
          >
            Message
          </div>
          <textarea
            placeholder="Type your message..."
            className="w-full rounded-lg border h-30 bg-white p-4 text-black
            max-sm:text-xs"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="group relative inline-flex cursor-pointer w-[50%] items-center justify-center px-8 py-4 overflow-hidden rounded-full font-bold text-neutral-800 shadow-[0_0_7px_-5px_rgba(0,0,0,0.5)] transition-all duration-75 active:scale-95 bg-sky-100 hover:text-purple-950
          max-sm:h-10"
        >
          <span className="relative z-10 max-sm:text-[0.8rem]">
            Send Message
          </span>
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="h-40 w-40 rounded-full opacity-50 blur-[20px] bg-[linear-gradient(90deg,rgba(222,0,75,1)_0%,rgba(191,70,255,1)_49%,rgba(0,212,255,1)_100%)] animate-spin duration-[3000ms] group-hover:h-32 group-hover:w-32 transition-all" />
          </span>
        </button>
      </div>
      <div className="h-2"></div>
    </motion.form>
  );
}

export default EmailSending;
