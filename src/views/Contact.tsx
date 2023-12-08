import React from 'react'
import Down from '../components/Down'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';


const Blog = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("Form gönderiliyor");
        e.preventDefault();
      
        emailjs.sendForm('service_uujy8n9', 'template_sp7rjd9', e.target as HTMLFormElement, 'vxJVz_yxkvEaE7YED')
          .then((result) => {
            console.log('Email başarıyla gönderildi!', result.text);
            // Burada başarılı gönderim sonrası işlemler yapabilirsiniz
          }, (error) => {
            console.log('Email gönderiminde hata!', error.text);
            // Hata yönetimi için işlemler yapabilirsiniz
          });
      };
  return (
    <section className="justify-center bg-black mx-auto w-full mt-12">
    <main className="flex flex-col items-center first-letter:bg-black text-white font-mono">
        <Link to="/">
            <img
                src="https://cdn.discordapp.com/attachments/1171396831989739570/1171828588908118047/Blucka_logo.png?ex=655e196b&is=654ba46b&hm=e9411488c7dccd8df285497705f66f3f2ecd932596ae849d3d10bf6ef75d9e94&  "
                alt="BLUCKA LOGO"
                className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] items-center justify-center"/>
         </Link>
        <div className="py-8 px-4 mx-auto max-w-screen-xl pb-20 lg:px-32">
                <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white ">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-200 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form onSubmit={sendEmail} className="space-y-8">
                        <div className=''>
                            <label className="block mb-2 text-sm font-bold text-white">Your name</label>
                            <input type="name" name="user_name" id="name" className="custom-shear shadow-sm bg-gray-50 border border-gray-300 text-black text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Your Name" required/>
                        </div>
                        <div className=''>
                            <label className="block mb-2 text-sm font-bold text-white">Your email</label>
                            <input type="email" name="email" id="email" className="custom-shear shadow-sm bg-gray-50 border border-gray-300 text-black text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="name@blucka.com" required/>
                        </div>
                        <div className=''>
                            <label className="block mb-2 text-sm font-bold text-white">Your Telegram or Discord</label>
                            <input type="text" name="telegram" id="telegram" className="custom-shear shadow-sm bg-gray-50 border border-gray-300 text-black text-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="@Blucka" required/>
                        </div>
                        <div className=''>
                            <label className="block mb-2 text-sm font-bold text-white ">Project Website</label>
                            <input type="text" name="website" id="website" className="custom-shear block p-3 w-full text-sm text-black bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="https://blucka.com" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-bold text-white ">Your message</label>
                            <textarea id="message" name="message" className="custom-shear block p-2.5 w-full text-sm text-black bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave your Messages..."></textarea>
                        </div>
                        <div className='custom-shear mt-4'>
                            <button type="submit" className="bg-white text-black font-bold py-2 px-8">Send message!</button>
                        </div>
                    </form>
                </div>
        </div>
            <Down/>
        </main>
</section>
  )
}

export default Blog