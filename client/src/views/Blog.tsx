import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Down from '../components/Down'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <HelmetProvider>
    <Helmet>
        {/* Page Title */}
        <title>BLOG | BLUCKA</title>
        
        {/* Page Description */}
        <meta name="description" content="Our mission is clear: Supercharge your growth." />
        
        {/* Open Graph / Facebook Meta */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BLOG | BLUCKA" />
        <meta property="og:description" content="Our mission is clear: Supercharge your growth." />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1171396831989739570/1206520742326575124/BLUCKA_LOGO.png?ex=65dc4f01&is=65c9da01&hm=07475a6a284eaa51d5b8cdb5a468ec291096ad20daaeea9b8de181f68632155b&=&format=webp&quality=lossless&width=2268&height=1186" />
        <meta property="og:url" content="https://www.blucka.com/blog/" />
        
        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@BluckaAgency" />
        <meta name="twitter:title" content="BLOG | BLUCKA" />
        <meta name="twitter:description" content="Our mission is clear: Supercharge your growth." />
        <meta name="twitter:image" content="https://media.discordapp.net/attachments/1171396831989739570/1206520742326575124/BLUCKA_LOGO.png?ex=65dc4f01&is=65c9da01&hm=07475a6a284eaa51d5b8cdb5a468ec291096ad20daaeea9b8de181f68632155b&=&format=webp&quality=lossless&width=2268&height=1186" />
        
        {/* Extra Meta*/}
        <meta name="keywords" content="Web3 Marketing, Blockchain, Creative Agency, Web3 Growth Hacking, Crypto Knowledge, BLUCKA, BLUCKA BLOG" />
        <link rel="canonical" href="https://www.blucka.com/blog/" />
    </Helmet>
    <section className="justify-center bg-black mx-auto w-full mt-12">
    <main className="flex flex-col items-center first-letter:bg-black text-white font-mono">
        <Link to="/">
            <img
                src="https://cdn.discordapp.com/attachments/1171396831989739570/1171828588908118047/Blucka_logo.png?ex=655e196b&is=654ba46b&hm=e9411488c7dccd8df285497705f66f3f2ecd932596ae849d3d10bf6ef75d9e94&  "
                alt="BLUCKA LOGO"
                className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px] items-center justify-center"/>
         </Link>
        <div className="py-8 px-4 mx-auto max-w-screen-xl pb-20 lg:px-32">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight text-white">The Blog</h2>
                <p className="font-light text-gray-300 sm:text-xl ">Our mission is clear:
                Supercharge your growth.</p>
            </div>


            <div className="grid gap-8 lg:grid-cols-3  item-center justify-center">
            <Link to="/blog/what-is-web3-marketing-agency">
                    <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg" src="https://media.discordapp.net/attachments/1197467042886996018/1206877315880067112/web3agency.png?ex=65dd9b16&is=65cb2616&hm=997898cd869cdcc0b16d70a3afa7a9cfea181b7616398d8880fa86bdeb5108cc&=&format=webp&quality=lossless&width=2268&height=1064" alt="Thumbnail" />
                        <div className="p-5">

                                <h5 className="mb-[16px] text-2xl font-bold tracking-tight text-gray-900">What is a Web3 Marketing Agency?</h5>

                            <p className="mb-[28px] font-normal text-gray-700">A Web3 marketing agency specializes in promoting blockchain-based companies </p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </div>
                        </div>
                    </div>  
            </Link>
            <Link to="/blog/give-me-liquidity-or-give-me-death">
                    <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg" src="https://media.discordapp.net/attachments/1171396831989739570/1195718876525252659/Larticle.jpg?ex=65b502fb&is=65a28dfb&hm=f3351545d9aa2d042e41198e9ab92cebd18b497610f8c24439bc26e02305a3dc&=&format=webp&width=2268&height=1064" alt="Thumbnail" />
                        <div className="p-5">

                                <h5 className="mb-[16px] text-2xl font-bold tracking-tight text-gray-900">Give Me Liquidity, or Give Me Death</h5>

                            <p className="mb-[28px] font-normal text-gray-700">In a dystopian world, Bitcoin liquidity is now dictating every aspect of life. </p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </div>
                        </div>
                    </div>  
            </Link>
            <Link to="/blog/bears-bulls-bitcoins">
                    <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg" src="https://media.discordapp.net/attachments/1160915606539866122/1192816272275165204/B2.jpg?ex=65aa73b8&is=6597feb8&hm=e4b36073eeb02eb0179328027c0b870d6b491667167bd8acc59e1d9921ab8bf6&=&format=webp&width=2268&height=1064" alt="Thumbnail" />
                        <div className="p-5">

                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Bears, Bulls, Bitcoins... Battlestar Galactica</h5>

                            <p className="mb-[28px] font-normal text-gray-700">With the market cap of bitcoin (BTC) hard-shelved at </p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </div>
                        </div>
                    </div>  
            </Link>
            
            <Link to="/blog/unleash-the-web3-gaming">
                    <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg" src="https://cdn.discordapp.com/attachments/1171396831989739570/1182228492004376697/1_wTgpP45vRW4uIHCJDqNzGg.webp?ex=6583ef15&is=65717a15&hm=477cc0f6fab01cc002440c5ccea0100d9f148a02cc4322e1df08c68ec2d3f0ae&" alt="Thumbnail" />
                        <div className="p-5">
                            
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Unleash the Web3 Gaming</h5>
                            
                            <p className="mb-3 font-normal text-gray-700">Community-driven growth stands as the cornerstone of success in the Web3 gaming realm, and here’s why.</p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </div>
                        </div>
                    </div>  
                </Link>
                <Link to="/blog/elevating-presence-in-bull-market">
                    <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg" src="https://media.discordapp.net/attachments/1171396831989739570/1181879048977272852/1_ZJer_ze2P6vAdghx8aNvMw.webp?ex=6582a9a3&is=657034a3&hm=49ec7bf0891c41ad3b0ee12884eee831349225a72cce702c80716e229ea18571&=&format=webp&width=2268&height=1064" alt="Thumbnail" />
                        <div className="p-5">
                            
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Elevating Presence in Bull Market</h5>
                            
                            <p className="mb-3 font-normal text-gray-700">In the exhilarating surge of the bull market, where opportunities abound and competition will reach new</p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </div>
                        </div>
                    </div>  
                </Link>

                  <Link to="/blog/merging-genius-for-web3-marketing">
                    <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg" src="https://cdn.discordapp.com/attachments/1171396831989739570/1181579356477345865/1_TJYX4NG3o9kTzthWBqBF7Q.webp?ex=65819287&is=656f1d87&hm=8ca3a8f849f294684b76ac21212c51a8accbf9c7095b792d378c8d4556b2b33a&" alt="Thumbnail" />
                        <div className="p-5">
                            
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Merging Genius for Web3 Marketing</h5>
                            
                            <p className="mb-3 font-normal text-gray-700">Introducing BLUCKA: The Crypto Creative Agency, a trailblazing entity at the forefront of Web3 marketing.</p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </div>
                        </div>
                    </div>  
                </Link>
            </div> 
             
        </div>
            <Down/>
        </main>
</section>
</HelmetProvider>
  )
}

export default Blog