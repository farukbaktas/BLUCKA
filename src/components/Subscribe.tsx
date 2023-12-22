import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Down = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => setShowPopup(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents default page refresh

        emailjs.sendForm('service_uujy8n9', 'template_sp7rjd9', e.currentTarget, 'vxJVz_yxkvEaE7YED')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                // Perform any actions after successful sending here
            }, (error) => {
                console.log('Failed to send email:', error.text);
                // Handle errors here
            });

        closePopup(); 
    };

    return (
        <div className="">
            {showPopup && (
                <div className='"bg-black text-white flex justify-center items-center'> 
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-8 shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="mb-4">Stay updated with the latest news and offers!</p>
                    <form onSubmit={sendEmail}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            className="p-2 border border-black text-black mb-4" 
                            required
                        />
                        <button 
                            type="submit" 
                            className="bg-black border border-black text-white p-2"
                        >
                            Subscribe
                        </button>
                    </form>
                    <button 
                        className="absolute top-2 right-2 text-6xl" 
                        onClick={closePopup}
                    >
                        &times;
                    </button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Down;
