import React, { useEffect, useState } from 'react';
import Divwithsvgs from './Divwithsvgs';
import Faq from './Faq';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [Movies, setMovies] = useState([]);
    // const [getMovies, setgetMovies] = useState([])

    const apiLink = "https://api.themoviedb.org/3/movie/popular"
    const apiKey = "008b984b2b30cb1875d5d38b64308b89"
    const image_base_url = "https://image.tmdb.org/t/p/original"
    const fetchMovies = () => {
        fetch(`${apiLink}?api_key=${apiKey}`)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                setMovies(json.results)
                console.log(Movies);
            })
    }
    // const getEachMovies = () => {
    //     fetch()
    // }
    useEffect(() => {
        fetchMovies()
    }, [])
    return (
        <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/3a4246b3-1dc8-49a8-be69-9e6ff5e7d763/web_tall_panel/NG-en-20241111-TRIFECTA-perspective_91abcd22-e80c-4a03-8d8c-1f9e3a5378fb_large.jpg")] bg-no-repeat max-h-full bg-current'>
            <div className='filter backdrop-blur-3xl px-8'>
                <div className='  mx-auto  sm:mx-auto py-4'>
                    <header className='py-2 px-4 md:px-px'>
                        <div className='flex justify-between px-px mx-auto'>
                            <div>
                                <svg fill="#ff0000" viewBox="0 0 111 30" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                    ariaHidden="true" role="img" className="default-ltr-cache-1d568uk ev1dnif2 text-red-900 md:w-36 w-20 ">
                                    <g>
                                        <path
                                            d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div className=' items-stretch'>
                                <Link to="/signin" className='bg-[#fff] rounded-2xl outline-double outline-offset-2 outline-2 outline-white px-3 py-px font-bold items-center'>
                                    <span className=''>Sign in</span>
                                </Link>
                            </div>
                        </div>
                    </header>
                    <div className='w-100 md:mx-0 mx-4  md:h-50 relative my-4 '>
                        <div className=' '>
                            <img className='backdrop-blur-sm md:w-full  md:border-t border-t-2 md:border-l border-l-2  h-50 image bg-cover rounded-3xl ' src="https://assets.nflxext.com/ffe/siteui/vlv3/61b94313-a53b-4a73-b973-7632aafc9d8f/web_tall_panel/NG-en-20241104-TRIFECTA-perspective_92939d2b-8888-4ee5-9f91-baae83156198_large.jpg" alt="" />
                            <div className="w-full banner md:top-32 rounded-3xl left-0 bg-gradient-to-t  from-zinc-800 from-10 md:px-52 md:h-100 h-96 md:py-0   shadow-lg shadow-transparent"
                            >
                                <div className=" md:mx-auto px-0 text-center   md:px-8 md-py-0  py-4">
                                    <div className="md:my-2 md:py-2  md:px-0 px-px">
                                        <h3 className="text-slate-50 md:font-extrabold font-bold md:text-6xl text-2xl md:my-2 py-2 "> Unlimited movies, TV
                                            shows, and more</h3>
                                    </div>
                                    <div className="md:my-2 py-px">
                                        <p className="text-[#BBB9B8] font-normal  md:text-xl text-sm">Starts with #2,200. Cancel anytime</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:my-4 my-8 py-4 md:mx-8 mx-auto">
                        <form className="px-2 flex md:flex-row flex-col justify-center items-center  ">
                            <div className="flex rounded-3xl shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#2BB770] relative w-96">
                                <span className="absolute focus-within:left-0 focus-within:top-0 select-none items-center pl-3 text-gray-500 sm:text-sm mb-5">Email Address</span>
                                <input type="text" name="username" id="username" className="placeholder:italic placeholder:text-slate-400 block bg-[#1D191B]  w-full border border-slate-300 rounded-3xl py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#2BB770]  focus:placeholder-none focus:ring-[#2BB770] text-white  sm:text-sm focus-within:bg-[#1D191B]" />

                            </div>
                            <div className=''>
                                <button
                                    className="text-slate-50  px-8 py-4 mx-2 my-2 rounded-3xl bg-[#ff0000] flex items-stretch font-bold text-2xl">
                                    <span>Get
                                        Started</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="py-2">
                    <div className="container mx-auto my-2 md:px-20 flex flex-col md:flex-row justify-between">
                        <div className="px-4 py-px mx-4 ">
                            <h3 className="text-white text-2xl font-bold">Trending Now</h3>
                        </div>
                        <div className="flex md:flex-row flex-col px-4 py-px mx-2">
                            <div className="px-2 mx-2 my-px md:w-full relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    {/* <span class="text-gray-500 sm:text-sm">$</span> */}
                                    {/* <span class="material-symbols-outlined text-white">
                                        globe
                                    </span> */}
                                </div>
                                <select name="jurisdiction" id="range"
                                    className="py-2  bg-transparent md:rounded-3xl rounded-3xl text-white w-full px-8 md:px-8 border ">

                                    <option value="Nigeria" className="md:px-8 px-2">Nigeria</option>
                                    <option value="Global" className=" px-2">Global</option>
                                </select>
                            </div>
                            <div className="px-2  mx-2 my-px md:w-full">
                                <select name="jurisdiction" id="range"
                                    className="py-2  bg-transparent md:rounded-3xl rounded-3xl text-white  w-full px-6 md:px-8 border">
                                    <option value="Movies" className=" px-2">Movies</option>
                                    <option value="TVshows" className=" px-2">TV shows</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="container mx-auto">
                        <div className='mx-8 w-100 '>
                            <div class="flex flex-row overflow-x-scroll md:mx-8" id="movieName">
                                {
                                    Movies.filter((each, i) => i <= 10).map((each, i) =>
                                    (
                                        <div key={i} onClick={() => fetchMovies(each.i)} className='mx-2 my-2 rounded-lg box scroll-ml-6 snap-start '>
                                            <img src={`${image_base_url}${each.backdrop_path}`} className='object-cover md:w- md:h-100 rounded-lg imagesize' alt="load" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div class="another-section mx-auto container my-4 md:px-20">
                        <div class="px-4 mx-4">
                            <h3 class="text-white text-2xl font-thin mx-2">More Reasons to Join</h3>
                        </div>
                        <Divwithsvgs />
                    </div>
                    <div className="FAQ  mx-auto container my-4 md:px-20 relative">
                        <Faq />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;
{/* <span className="material-symbols-outlined self-center">chevron_right</span> */ }