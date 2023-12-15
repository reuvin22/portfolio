import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';



function Contact() {
    const handleForm = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await fetch('https://atsdevs.org/EmailSender/public/api/send-email',{
                method : 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data),
        });
        if(response.ok){
            console.log("Message Sent Successfully");
        }else {
            console.log("Message not sent");
        }
        }catch(err){
            console.log(err);
        }
    }
  return (
    <>
    <section id="contact">
        <motion.div className="header"
        initial = {{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ delay: 0.3, ease: "easeIn" }}
        viewport={{ once:true }}>
            <h1>Contact</h1>
            <p>Got a Project? Let's talk</p>
        </motion.div>
        <div className="contact-container">
            <motion.div className="socmed"
                initial = {{ opacity: 0, x: -60}}
                whileInView={{ opacity: 100, x:0 }}
                transition={{ delay: 1, ease: "easeIn" }}
                viewport={{ once:true }}
            >
                <div className="cont-header">
                    <h1>Contact Info</h1>
                    <p>Get in Touch!</p>
                </div>
                <div className='soc-account'>
                    <div className='soc'>
                    <FontAwesomeIcon icon={faPhone} style={{color: "#4d29c1",}} className='icon'/>
                    <div className="soc-type">
                        <p>Contact Number</p>
                        <h1>+639152605271</h1>
                    </div>
                    </div>
                    
                    <div className='soc'>
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#4d29c1",}} className='icon'/>
                    <div className="soc-type">
                        <p>Email</p>
                        <h1>reuvinhernandez22@gmail.com</h1>
                    </div>
                    </div>
                    <div className="soc-icon">
                        <div className='soc-header2'>
                            <h1>Other Contact</h1>
                        </div>
                        <div className="other-icons">
                            <a href="https://www.facebook.com/reuvin.hernandez.5">
                            <FontAwesomeIcon icon={faFacebookF} style={{color: "#4d29c1",}} className='oIcon'/></a>
                            <a href="https://www.linkedin.com/in/reuvin-hernandez-a6688a26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#4d29c1",}} className='oIcon'/></a>
                            <a href="https://www.instagram.com/reuzyke?igshid=NGVhN2U2NjQ0Yg==">
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#4d29c1",}} className='oIcon'/></a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="form-container"
                initial = {{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 100, y: 0 }}
                transition={{ delay: 1, ease: "easeIn" }}
                viewport={{ once:true }}
            >
                <form onSubmit={handleForm}>
                    <p>Subject</p>
                    <input type="text" name="subject" placeholder='Subject' />
                    <p>From</p>
                    <input type="text" name="from" placeholder='Your Working Email' />
                    <p>Message</p>
                    <textarea name="email" placeholder='Type your Message...' className='message'/>
                    <button type="submit">Send</button>
                </form>
            </motion.div>
        </div>
    </section>
    </>
  )
}

export default Contact