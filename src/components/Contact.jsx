import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import axios from 'axios';
import Sidebar from './Sidebar';
import { toast, ToastContainer } from 'react-toastify';



function Contact() {
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        message: ''
    });
    const [success, setSuccess] = useState('')
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData, [name]: value
        }));
    }

    const handleForm = (event) => {
        event.preventDefault();
        const sendData = async () => {
            try{
                axios.post('https://atsdevs.org/portEmail/public/api/email', formData, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(res => {
                    if(res.data.status === 200){
                        setSuccess(res.data.message)
                    }
                    console.log(res)
                })
                setFormData({
                    subject: '',
                    email: '',
                    message: ''
                })
            }catch(e){
                console.error(e)
            }
        }
        sendData();
    }
    
  return (
    <>
    <section id="contacts" className="my-20">
        <motion.div className="my-10 text-white grid place-items-center mt-20"
        initial = {{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ delay: 0.3 , ease: "easeIn" }}
        viewport={{ once:true }}>
            <h1 className='text-center font-bold text-4xl sm:text-2xl'>Contact</h1>
            <p className='text-center text-3xl sm:text-xl'>Got a Project? Let's talk</p>
        </motion.div>
        <div className="flex justify-center items-center gap-72
        sm:flex-col-reverse sm:gap-20 md:flex-col-reverse">
            <motion.div className="grid place-items-center"
                initial = {{ opacity: 0, x: -60}}
                whileInView={{ opacity: 100, x:0 }}
                transition={{ delay: 0.5, ease: "easeIn" }}
                viewport={{ once:true }}
            >
                <div className="text-white font-bold text-center text-xl">
                    <h1>Contact Info</h1>
                    <p>Get in Touch!</p>
                </div>
                <div className='grid my-10'>
                    <div className='flex'>
                    <FontAwesomeIcon icon={faPhone} style={{color: "#4d29c1",}} className='icon'/>
                    <div className="text-white">
                        <span>Contact Number</span><br />
                        <span>+639152605271</span>
                    </div>
                    </div>
                    
                    <div className='flex my-5'>
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#4d29c1",}} className='icon'/>
                    <div className="text-white">
                        <span>Email</span><br />
                        <span>reuvinhernandez22@gmail.com</span>
                    </div>
                    </div>
                    <div className="grid text-white">
                        <div className='soc-header2'>
                            <h1 className='text-xl sm:mb-5'>Other Contact</h1>
                        </div>
                        <div className="flex my-5">
                            <a href="https://www.facebook.com/reuvin.hernandez.5">
                            <FontAwesomeIcon icon={faFacebookF} style={{color: "#4d29c1",}} className='w-24 h-10 sm:w-20 sm:h-7'/></a>
                            <a href="https://www.linkedin.com/in/reuvin-hernandez-a6688a26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#4d29c1",}} className='w-24 h-10 sm:w-20 sm:h-7'/></a>
                            <a href="https://www.instagram.com/reuzyke?igshid=NGVhN2U2NjQ0Yg==">
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#4d29c1",}} className='w-24 h-10 sm:w-20 sm:h-7'/></a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="w-96 grid place-items-center"
                initial = {{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 100, y: 0 }}
                transition={{ delay: 0.4, ease: "easeIn" }}
                viewport={{ once:true }}
            >

                <form onSubmit={handleForm}>
                    <h2 className='text-green-500 font-bold text-lg'>{success}</h2>
                    <p>Subject</p>
                    <input type="text" name="subject" placeholder='Subject' value={formData.subject} onChange={handleInput} className='input'/>
                    <p>From</p>
                    <input type="text" name="email" placeholder='Your Working Email' value={formData.email} onChange={handleInput} className='input'/>
                    <p>Message</p>
                    <textarea name="message" placeholder='Type your Message...' value={formData.message} onChange={handleInput} className='inputArea'/>
                    <button type="submit" className='border-2 py-3 px-10 border-purple-800 rounded-2xl my-5 cursor-pointer hover:bg-purple-500'>Send</button>
                </form>
            </motion.div>
        </div>
    </section>
    </>
  )
}

export default Contact