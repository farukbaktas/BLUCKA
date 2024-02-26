import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Subscriber = () => {
  const [email, setEmail] = useState('');
  const [hCaptchaValue, setHCaptchaValue] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kontrolsüz bir captcha örneği olarak, hCaptchaValue'nun dolu olup olmadığını kontrol ediyoruz.
    if (!hCaptchaValue) {
      setMessage("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);

    emailjs.sendForm('service_uujy8n9', 'template_sp7rjd9', e.currentTarget, 'vxJVz_yxkvEaE7YED')
      .then(async (result) => {
        console.log('Email successfully sent!', result.text);

        await addEmailToMongoDB();
        setMessage("Subscription successful!");
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setMessage("Failed to subscribe. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
        setHCaptchaValue(null);
      });
  };

  const addEmailToMongoDB = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });
      console.log(response.data);
      setEmail('');
    } catch (error) {
      console.error('Failed to add email to MongoDB:', error);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold md:mb-12 text-white sm:text-4xl">Sign up for more like this.</h2>
          <form onSubmit={handleSubmit}>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label className="hidden mb-2 text-sm font-medium text-white">Email address</label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-white bg-black rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-white focus:border-white "
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                {/* hCaptcha bileşeni */}
                <HCaptcha
                  sitekey="29683024-2462-4c5d-b1b8-5499072e7b2d"
                  onVerify={(token: string | null) => setHCaptchaValue(token)}
                />
              </div>
              <div>
                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-white border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Subscribe</button>
              </div>
              {loading && <p className="text-white mt-4">Loading...</p>}
              {message && <p className="text-white mt-4">{message}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscriber;
