import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { SendEmail, SendEmailBack } from "../utils/SendMail";
import toast from "react-hot-toast";
import Client from "../utils/Client";

const Contact = () => {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) {
      toast.error("Fill all the fields", {
        icon: "🚫",
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "50px",
        },
      });
    } else {
      setLoading(true);
      await sendMessage();
    }
  };

  const sendMessage = async () => {
    try {
      await Client.create({
        _type: "contact",
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: new Date().toISOString(),
      });

      setForm({ name: "", email: "", message: "" });

      toast.success("Message sent successfully", {
        icon: "🚀",
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "50px",
        },
      });
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Submission failed", {
        icon: "🚫",
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "50px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-0.75 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get is touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="z-10 flex flex-col">
          {messageSent && (
            <p className="text-lg font-bold text-green-500 animate-slide-in flex items-center">
              Message sent success-fully sent{" "}
              <IoCheckmarkDoneCircleSharp
                color="green"
                className="mr-2"
                fontSize={30}
              />
            </p>
          )}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              onChange={handleChange}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              onChange={handleChange}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
