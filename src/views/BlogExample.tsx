import React from 'react';
import HighlightedText from '../components/HighLight'
import Down from '../components/Down'

const Blog = () => {

  return (
    
    <React.Fragment>

    <div className='bg-black text-white'>
     
    <div className="font-mono cursor bg-cover text-black w-screen relative">
        <div className="relative">
            
            <div className="max-w-8xl justify-center items-center mx-auto px-16 sm:px-16 md:px-16 lg:px-[300px] flex flex-col">
                <div className="py-4 sm:py-8 md:py-12 lg:py-8">
                    <img
                    src="https://cdn.discordapp.com/attachments/1171396831989739570/1171828588908118047/Blucka_logo.png?ex=655e196b&is=654ba46b&hm=e9411488c7dccd8df285497705f66f3f2ecd932596ae849d3d10bf6ef75d9e94&  "
                    alt="BLUCKA LOGO"
                    className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px]"/>
                </div>
                <section className=" justify-center mx-auto w-full mt-4">
                <main className="pb-16 lg:pb-24 bg-black text-white ">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
                        <figure className="mb-4 item-center"><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt=""/>
                            <figcaption className="text-xs"></figcaption>
                        </figure>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-200 ">
                                    <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                                    <div>
                                        <a rel="author" className="text-xl font-bold text-gray-100 ">Faruk Baktas</a>
                                        <p className="text-base font-light text-gray-100 ">Front-End & CTO BLUCKA</p>
                                        <p className="text-base font-light text-gray-100 "><time title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-100 lg:mb-6 lg:text-4xl ">Best practices for successful prototypes</h1>
                        </header>
                        <p className="font-semi text-xl mb-4">Flowbite is an open-source library of UI components built with the utility-first
                            classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                            datepickers.</p>

                        <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                            you can think things through before committing to an actual design project.</p>
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
