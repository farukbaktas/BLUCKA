import React from 'react';
import HighlightedText from '../../components/HighLight'
import Down from '../../components/Down'
import { Link } from 'react-router-dom';
import Countdown from '../../components/Countdown'

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
                        <figure className="mb-4 item-center"><img src="https://media.discordapp.net/attachments/1171396831989739570/1192753927930789949/B1.jpg?ex=65aa39a8&is=6597c4a8&hm=9ecd3e95986ecdebf3304f6b5f077a4cc7e437d6cd589defabad56788a8a818a&=&format=webp&width=2268&height=1064" alt="Thumbnail"/>
                            <figcaption className="text-xs"></figcaption>
                        </figure>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-200 ">
                                    <img className="mr-4 w-16 h-16 rounded-full" src="https://cdn.discordapp.com/attachments/1171396831989739570/1182229760047321099/faruk.jpg?ex=6583f043&is=65717b43&hm=9fd88ca4be46817b773fdf21a255af8350a729a95f219a2758adaaf5ee51b53b&" alt="BLUCA PP"/>
                                    <div>
                                        <a rel="author" className="text-xl font-bold text-gray-100 ">Marshall Irby</a>
                                        <p className="text-base font-light text-gray-100 ">Crypto Creative | Technical Documantation</p>
                                        <p className="text-base font-light text-gray-100 "><time title="February 8th, 2022">Jan. 05, 2024</time></p>
                                    </div>
                                </div>
                            </address>
                            
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-100 lg:mb-6 lg:text-4xl ">Bears, Bulls, Bitcoins</h1>
                        </header>
                        <div className="space-y-4">
                            <p className="font-semi text-xl">With the market cap of bitcoin (BTC) hard-shelved at 21 million, “mining” bitcoin is incentivized by adding blocks to the blockchain. In economics, scarcity is a problem that arises when a population has limited resources but unlimited wants and needs to consume. Bitcoin harnesses this scarcity perfectly – and has been a gold mine for some crypto users. After 210,000 blocks are mined – which occurs roughly every 4 years – the amount miners receive per BTC block is halved to increase scarcity with the caveat of making prices more volatile. People jump in on the “hype train” and buy more BTC, driving the cost up like clockwork. The next halving date is estimated to be April 17th, 2024. </p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <Countdown/>
                            <p className='text-center text-3xl py-4'>...</p>

                            <p>If you take a look at the graph, you can identify a cyclical pattern: During the last halving in 2020, price per BTC was $8,821.42. The halving before that in 2016, $650.53. The first halving in 2012, $12.35. </p>
                            <img src="https://media.discordapp.net/attachments/1171396831989739570/1192759240843075655/chart.jpg?ex=65aa3e9b&is=6597c99b&hm=5734d4d29397085cbd8f81c18b3c17aad9d59e8107e884ef9d841a2fb715eaae&=&format=webp&width=2268&height=1064" alt="chart" />
                            <p className='font-thin text-xs'>Source: bitbo.io</p>

                            <p className='pt-4'>Let’s choose a hypothetical example of investing $1000 in every halving scenario. For the following examples, assume BTC is valued at $30,000 for the return on investments. In 2012, if you would have invested $1000, you could have purchased 81.63 bitcoins and your return on investment (ROI) would have been $2,448,900. In 2016 with $1000 invested before the halving, 1.54 BTC could have been purchased and ROI would have been $46,200. In 2020, 0.1176 BTC could have been purchased with ROI at $3528. </p>
                            
                            <img className='py-4' src="https://media.discordapp.net/attachments/1171396831989739570/1192753956015853589/seperator.jpg?ex=65aa39af&is=6597c4af&hm=aa5d2b3d90f79bde87609cc07547ab5e702c6e1e304dea52e3596797543fcf02&=&format=webp&width=2268&height=300" alt="banner" />
                            <p>So, if BTC is worth its current amount of roughly $42,000 before halving in April and the price increases to $50,000, the pattern is return on investment is always theoretically higher than your initial investment of money - this case it being a profit of at least 19.05% if bought at the dip and sold at the peak. Keep in mind this is not including external factors that influence price.</p>

                            <img className='py-4' src="https://media.discordapp.net/attachments/1171396831989739570/1192753956015853589/seperator.jpg?ex=65aa39af&is=6597c4af&hm=aa5d2b3d90f79bde87609cc07547ab5e702c6e1e304dea52e3596797543fcf02&=&format=webp&width=2268&height=300" alt="banner" />
                            <p className='font-bold italic'>How does it affect us as consumers?</p>
                            <p className='mb-3'>While this seems like a recurrent event doomed to repeat itself – past cycles aren’t always indicative of future outcomes, especially because the cryptocurrency market doesn’t thrive in a vacuum. Some experts and centralized banks forecast that the halving in conjunction with different methods for diversification and investing could offer cryptocurrency resiliency like never before seen. On an unlikely front, <span className='underline text-gray-200'> <a href="https://www.chainalysis.com/blog/2023-global-crypto-adoption-index/">higher income developed countries are lessening crypto usage on average and more low-middle income countries are adopting it</a></span>, with economies like these having the potential to send crypto soaring. More people are turning towards decentralized currencies and diversifying portfolios away from traditional means, both digital and traditional. For consumers, the cementation of cryptocurrency in the economy via tokenization implementation and <span className='underline text-gray-200'><a href="https://www.sec.gov/Archives/edgar/data/1869699/000119312521201955/d165184ds1.htm">SEC proceedings expected to approve Bitcoin ETFs</a></span>, the return on cryptocurrency for the year 2024 could be ten to one hundred fold – especially now that financial institutions are turning their eyes… And their wallets towards cryptocurrency. (<a className='underline text-gray-200' href="https://www.jpmorgan.com/onyx/project-guardian">Project Guardian - JP Morgan</a>, <a className='underline text-gray-200' href="https://apps.sfc.hk/edistributionWeb/gateway/EN/circular/doc?refNo=23EC52">tokenization procedures - Hong Kong SFC </a>,<a className='underline text-gray-200' href="https://www.foxbusiness.com/technology/digital-asset-markets-poised-grow-in-2024-goldman-sachs-exec-says"> Bitcoin liquidity - Matthew McDermott, Goldman Sachs)</a></p>

                            <img className='py-4' src="https://media.discordapp.net/attachments/1171396831989739570/1192753956015853589/seperator.jpg?ex=65aa39af&is=6597c4af&hm=aa5d2b3d90f79bde87609cc07547ab5e702c6e1e304dea52e3596797543fcf02&=&format=webp&width=2268&height=300" alt="banner" />
                            <p className='font-bold italic'>Contact Us for Crypto Marketing Excellence</p>
                            <p>Join us as we compound all of these trends, facts and economic speculations backed by data in our B.L.U.C.K.A. series </p>

                            <p className='font-semibold'>“Or mission is clear: Supercharge your growth. BLUCKA! BLUCKA!"</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-thin text-xs'>DISCLAIMER: The information provided in this article is for general informational purposes only and should not be considered as financial advice. The content is not intended to be a substitute for professional financial guidance, and readers are encouraged to consult with a qualified financial advisor or investment professional before making any financial decisions. BLUCKA and associates are not responsible for any decision for any financial decisions or risks taken by the reader.</p>

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
