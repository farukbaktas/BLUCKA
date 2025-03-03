import React, { useState } from 'react';
import Down from '../components/Down';
import { Link } from 'react-router-dom';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Logo from '../assets/BlogAssets/BluckalogoWhite.png';

const Blog = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    // Captcha doğrulaması
    const onCaptchaVerify = (token: string) => {
        setCaptchaToken(token);
    };

    // Form gönderme işlevi
    const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!captchaToken) {
            alert('Please complete the CAPTCHA to proceed!');
            return;
        }

        const formData = new FormData(e.currentTarget);
        const data = {
            user_name: formData.get('user_name'),
            email: formData.get('email'),
            telegram: formData.get('telegram'),
            website: formData.get('website'),
            message: formData.get('message'),
            captcha: captchaToken
        };

        try {
            const response = await fetch('https://your-backend-url.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.currentTarget.reset();
                setCaptchaToken(null);

                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error('Form submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className="justify-center bg-black mx-auto w-full mt-12">
            <main className="flex flex-col items-center text-white font-mono">
                <Link to="/">
                    <img src={Logo} alt="BLUCKA LOGO" className="w-[200px]" />
                </Link>
                <div className="py-8 px-4 mx-auto max-w-screen-xl pb-20 lg:px-32">
                    <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl font-extrabold text-center">Contact Us</h2>
                        <p className="mb-8 font-light text-center text-gray-200 sm:text-xl">
                            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                        </p>
                        <form onSubmit={sendForm} className="space-y-8">
                            <div>
                                <label className="block mb-2 text-sm font-bold text-white">Your name</label>
                                <input type="text" name="user_name" required className="w-full p-2.5 border border-gray-300 bg-gray-50 text-black text-sm" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-white">Your email</label>
                                <input type="email" name="email" required className="w-full p-2.5 border border-gray-300 bg-gray-50 text-black text-sm" placeholder="name@blucka.com" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-white">Your Telegram or Discord</label>
                                <input type="text" name="telegram" required className="w-full p-2.5 border border-gray-300 bg-gray-50 text-black text-sm" placeholder="@Blucka" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-bold text-white">Project Website</label>
                                <input type="text" name="website" required className="w-full p-3 border border-gray-300 bg-gray-50 text-black text-sm" placeholder="https://blucka.com" />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-bold text-white">Your message</label>
                                <textarea name="message" required className="w-full p-2.5 border border-gray-300 bg-gray-50 text-black text-sm" placeholder="Leave your Messages..." />
                            </div>
                            <HCaptcha sitekey="29683024-2462-4c5d-b1b8-5499072e7b2d" onVerify={onCaptchaVerify} />
                            <div className="mt-4">
                                <button type="submit" className="bg-white text-black font-bold py-2 px-8">Send message!</button>
                            </div>
                        </form>
                        {isSubmitted && (
                            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-8 rounded-md shadow-lg backdrop-blur-md">
                                <p>Email was sent successfully</p>
                            </div>
                        )}
                    </div>
                </div>
                <Down />
            </main>
        </section>
    );
};

export default Blog;
