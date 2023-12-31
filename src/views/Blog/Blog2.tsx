import React from 'react';
import HighlightedText from '../../components/HighLight'
import Down from '../../components/Down'
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
                        src="https://cdn.discordapp.com/attachments/1171396831989739570/1171828588908118047/Blucka_logo.png?ex=655e196b&is=654ba46b&hm=e9411488c7dccd8df285497705f66f3f2ecd932596ae849d3d10bf6ef75d9e94&  "
                        alt="BLUCKA LOGO"
                        className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px]"/>
                    </div>
                </Link>



                <section className=" justify-center mx-auto w-full mt-4 mb-16">
                <main className="pb-16 lg:pb-24 bg-black text-white ">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
                        <figure className="mb-4 item-center"><img src="https://media.discordapp.net/attachments/1171396831989739570/1181879048977272852/1_ZJer_ze2P6vAdghx8aNvMw.webp?ex=6582a9a3&is=657034a3&hm=49ec7bf0891c41ad3b0ee12884eee831349225a72cce702c80716e229ea18571&=&format=webp&width=2268&height=1064" alt="Thumbnail"/>
                            <figcaption className="text-xs"></figcaption>
                        </figure>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-200 ">
                                    <img className="mr-4 w-16 h-16 rounded-full" src="https://cdn.discordapp.com/attachments/1171396831989739570/1182229612844040278/spaces_YhC6ldpyG9SWlOl2Jxrk_uploads_S2ZRd2ZDEtxXLN8cYyEg_Berkan_7Photo_333_x_333_px.webp?ex=6583f020&is=65717b20&hm=13fe0493d70981f2b67d1a54d62c44e09c62e96e8e7d9bf0e1c10611e234d077&" alt="BLUCA PP"/>
                                    <div>
                                        <a rel="author" className="text-xl font-bold text-gray-100 ">Berkan Sonmez</a>
                                        <p className="text-base font-light text-gray-100 ">Crypto Creative | Operation Management</p>
                                        <p className="text-base font-light text-gray-100 "><time title="February 8th, 2022">Dec. 6, 2023</time></p>
                                    </div>
                                </div>
                            </address>
                            
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-100 lg:mb-6 lg:text-4xl ">Elevating Presence in Bull Market</h1>
                        </header>
                        <div className="space-y-4">
                            <p className="font-semi text-xl">In the exhilarating surge of the bull market, where opportunities will abound and competition will reach new heights, BLUCKA emerges as the catalyst for elevating your brand’s presence. A strong brand presence will be paramount. Our expert team navigates the intricacies of the bullish trends, strategically positioning your venture to seize the spotlight. Enter BLUCKA– Your Trusted Partner in Crypto Marketing.</p>
                           

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-bold italic'>Navigating the Crypto Landscape</p>
                            <p>In a world where blockchain and decentralized technologies are reshaping industries, BLUCKA emerges as a beacon for businesses seeking to make a mark in the digital currency space. Our specialized approach goes beyond conventional marketing strategies, delving into the intricacies of crypto, blockchain and the ever-expanding communities in the Web3 ecosystem.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-bold italic'>Adapting to the Bull Market Dynamics</p>
                            <p>As we navigate the crypto landscape, it’s crucial to recognize the impact of market conditions. In the upcoming bull market, characterized by surging prices and heightened investor optimism, BLUCKA’s expertise becomes even more invaluable. Our strategies are tailored to capitalize on increased investor interest and drive adoption of digital currencies during this opportune phase.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-bold italic'>Tailored Strategies for Community Driven Growth</p>
                            <p>At BLUCKA, we recognize the personalized approach needed for community-driven growth in the crypto bull market. Whether launching a DeFi project, GameFi or a new blockchain protocol, our tailored strategies resonate with your valued community. Our expertise spans DeFi, social finance, and gaming platforms, ensuring effective communication in this dynamic landscape for the growth you deserve. In the crypto bull market, we prioritize community building, creating resilient communities in Web3 platforms. Join us on this journey where community and growth converge for unprecedented success.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-bold italic'>Optimizing Strategies in the Bull Market</p>
                            <p>During the bull market, BLUCKA’s data-driven insights become particularly crucial. We analyze market trends, investor sentiment, and token metrics to optimize your strategies, ensuring that your brand stands out and gains momentum during this favorable market phase.</p>


                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-bold italic'>Contact Us for Crypto Marketing Excellence</p>
                            <p>Ready to elevate your brand in the digital currency space? Just drop us an email <a className='hover:text-gray-700' href='mailto:grow@blucka.com'>(grow@blucka.com) </a>. Our Crypto Creatives are eager to discuss how we can amplify your presence in the exciting world of cryptocurrencies, especially during the unique opportunities presented by the current bull market.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-semibold'>“Or mission is clear: Supercharge your growth. BLUCKA! BLUCKA!"</p>


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
