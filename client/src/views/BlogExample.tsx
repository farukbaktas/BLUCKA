import React from 'react';
import Down from '../../src/components/Down'
import { Link } from 'react-router-dom';


const Blog = () => {

  return (
    
    <React.Fragment>

    <div className='bg-black text-white'>
     
    <div className="font-mono cursor bg-cover text-black w-screen relative">
        <div className="relative">
            
            <div className="max-w-8xl justify-center items-center mx-auto px-16 sm:px-16 md:px-16 lg:px-[300px] flex flex-col">
                <Link to="/">
                    <div className="py-4 sm:py-8 md:py-12 lg:py-8">
                        <img
                        src="https://media.discordapp.net/attachments/1197467042886996018/1211591447527297044/Bluckalogo.png?ex=65eec177&is=65dc4c77&hm=651a142d71078501964f4f82c531d3ac40561f42663b8b1c4f1710a482c03b5a&=&format=webp&quality=lossless&width=2268&height=608"
                        alt="BLUCKA LOGO"
                        className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px]"/>
                    </div>
                </Link>



                <section className=" justify-center mx-auto w-full mt-4 mb-16">
                <main className="pb-16 lg:pb-24 bg-black text-white ">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
                        <figure className="mb-4 item-center"><img src="https://cdn.discordapp.com/attachments/1171396831989739570/1181579356477345865/1_TJYX4NG3o9kTzthWBqBF7Q.webp?ex=65819287&is=656f1d87&hm=8ca3a8f849f294684b76ac21212c51a8accbf9c7095b792d378c8d4556b2b33a&" alt="Thumbnail"/>
                            <figcaption className="text-xs"></figcaption>
                        </figure>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-200 ">
                                    <img className="mr-4 w-16 h-16 rounded-full" src="https://cdn.discordapp.com/attachments/1171396831989739570/1181580010218323968/oktar.jpg?ex=65819323&is=656f1e23&hm=1c20558085397df774989fbd504fa19db41c075d1f7ab8a23ab83c36caf3decc&" alt="BLUCA PP"/>
                                    <div>
                                        <a rel="author" className="text-xl font-bold text-gray-100 ">Oktar Akin</a>
                                        <p className="text-base font-light text-gray-100 ">Crypto Creative | Brand and Strategy</p>
                                        <p className="text-base font-light text-gray-100 "><time title="February 8th, 2022">Dec. 5, 2023</time></p>
                                    </div>
                                </div>
                            </address>
                            
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-100 lg:mb-6 lg:text-4xl ">Merging Genius for Web3 Marketing</h1>
                        </header>
                        <div className="space-y-4">
                            <p className="font-semi text-xl">Introducing BLUCKA: The Crypto Creative Agency, a trailblazing entity at the forefront of Web3 marketing. Born from the strategic merger of creative brilliance, digital expertise, and community management, BLUCKA stands as a testament to a new era in marketing. With a laser focus on leveraging blockchain and crypto knowledge, we redefine the standard agency model.</p>
                           
                            <p className='text-center text-3xl py-4'>...</p>
                            
                            <p className='font-bold text-xl'>THE GENIUS MERGERS OF BLUCKA</p>
                            
                            <p className='font-bold italic'>TIMBER — Web3 Community Management from China</p>
                            <p className='mb-4'>Based in China, TIMBER was a pioneering agency dedicated to Web3 community management. With a deep understanding of digital communities and a global perspective, TIMBER seamlessly aligns with BLUCKA’s commitment to fostering meaningful connections in the ever-evolving digital space.</p>

                            <p className='font-bold italic'>Oktar AKIN — 21 Years of Creative Excellence</p>
                            <p className='mb-4'>A distinguished creative director with a rich tapestry of experience spanning 21 years, brings a wealth of knowledge that has left an indelible mark on the global advertising landscape. Akin’s recognized creative vision, cultivated across two continents and three countries — Singapore, Istanbul and Amman — has consistently pushed boundaries and redefined industry standards. His enthusiasm for blockchain technologies and Web3 puts him at the forefront of innovation, ensuring that BLUCKA remains at the cutting edge of the evolving digital landscape.</p>
                        
                            <p className='font-bold italic'>Bilpengo — Web3 Growth Hacking Specialists</p>
                            <p className='mb-4'>Bilpengo, a growth hacking agency dedicated to the Web3 domain, contributed its expertise in driving strategic growth in the digital realm. Their innovative approach perfectly complements BLUCKA’s vision for forward-thinking solutions, making them an integral part of this dynamic collaboration.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-bold italic'>A COMPREHENSIVE FULL-SERVICE WEB3 CREATIVE AGENCY</p>
                            <p>BLUCKA emerges as a comprehensive full-service Web3 Creative Agency, transcending traditional boundaries. With a focus on brand building, community management, technical documentation and Web3 growth, the agency embodies a space where creativity, innovation and strategic growth converge.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-bold italic'>CRYPTO CREATIVES</p>
                            <p>BLUCKA team proudly identifies themselves as Crypto Creatives, defining this as individuals who combine blockchain and crypto knowledge with creative marketing strategies.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-semibold'>“We are crypto creatives. Your comrades alongside. We forge strong partnerships with our valued clients. Whether navigating technical complexities or shaping strategic marketing decisions, we’re here to solve the challenges.
                            <br /><br /><br />
                            Our mission is clear: Supercharge your growth. BLUCKA! BLUCKA!”</p>


                        </div>
                    </article>
                </div>
                </main>


</section>
            </div>
        </div>
            <Down/>
        </div>
    </div>

    </React.Fragment>
  );
};

export default Blog
