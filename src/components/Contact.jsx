import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {IoCheckmarkDoneCircleSharp} from 'react-icons/io5';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import { SendEmail, SendEmailBack } from '../utils/SendMail';


const Contact = () => {
  const formRef = useRef();
  const [fields, setFields] = useState(false);
  const [messageSent, setMessageSent] = useState(false);


  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setFields(true);
      setTimeout(() => {
        setFields(false);
      }, 3000);
    } else {
      setLoading(true);
      SendEmails(name, email, message);
    }
  };

  const SendEmails = async (name, email, message) => {
    SendEmail(name, email, message);
    SendEmailBack(name, email);
    setMessageSent(true);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-0.75 bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get is touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='z-10 flex flex-col'>
          {fields && (
            <p className='text-lg font-bold text-red-500 animate-slide-in'>Fill all the fields</p>
          )}

          {messageSent && (
            <p className='text-lg font-bold text-green-500 animate-slide-in flex items-center'>Message sent success-fully sent <IoCheckmarkDoneCircleSharp color='green' className='mr-2' fontSize={30} /></p>
          )}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              onChange={handleChange}
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              onChange={handleChange}
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>


      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');