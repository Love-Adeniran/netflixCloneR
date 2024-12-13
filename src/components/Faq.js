import React from 'react'

const Faq = () => {
    return (
        <>
            <div className="px-4 py-2 md:mx-8">
                <h3 className="text-white text-3xl font-semibold">Frequently Asked Questions</h3>
            </div>
            <div className="container  mx-auto px-4 py-2 ">

                <div className="accordion my-2 ">
                    <details className=" md:mx-6 cursor-pointer " >
                        <summary className="flex justify-between border border-[#737373] px-4 py-5 bg-[#272727] hover:bg-[3F3F3F] rounded-2xl">
                            <div>
                                <p className="text-white text-lg font-bold">What is Netflix?</p>
                            </div>
                            <div>
                                <div className="text-white relative inline-block text-left text-3xl" id="add" onClick="plus()">
                                    <span className="material-symbols-outlined">add</span>
                                </div>
                                <div className="text-white relative inline-block text-left text-3xl " id="cancel" onClick="cancel()">
                                    {/* <span class="material-symbols-outlined">close</span> */}
                                </div>
                            </div>
                        </summary>

                        <div className="text-white mt-px rounded-md bg-[#272727] px-4 py-4">
                            <p className="text-lg font-bold my-2">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,
                                documentaries, and
                                more on thousands of internet-connected devices.</p>
                            <p className="text-lg font-bold">You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                        </div>
                    </details>
                </div>
                <div className="accordion my-2 cursor-pointer">
                    <details className="border-[#737373]  md:mx-6">
                        <summary className="flex justify-between border border-[#737373] px-4 py-5 bg-[#272727] rounded-3xl">
                            <div>
                                <p className="text-white text-lg font-bold">How much does Netflix cost?</p>
                            </div>
                            <div>
                                <div className="text-white relative inline-block text-left text-3xl" id="add" onClick="plus()">
                                    <span className="material-symbols-outlined">add</span>
                                </div>
                            </div>
                        </summary>
                        <div className="text-white mt-px px-4 rounded-md bg-[#272727] py-4">
                            <p className="text-lg font-bold my-2">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans
                                range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.</p>
                        </div>

                    </details>
                </div>
                <div className="accordion my-2 cursor-pointer">
                    <details className="  md:mx-6  ">
                        <summary className="flex justify-between border border-[#737373] px-4 py-5 bg-[#272727] rounded-3xl">
                            <div>
                                <p className="text-white text-lg font-bold">Where can i watch?</p>
                            </div>
                            <div>
                                <div className="text-white relative inline-block text-left text-3xl" id="add" onClick="plus()">
                                    <span className="material-symbols-outlined">add</span>
                                </div>
                            </div>
                        </summary>
                        <div className="text-white mt-px rounded-md bg-[#272727] px-4 py-4">
                            <p className="text-lg font-bold my-2">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your
                                personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones,
                                tablets, streaming media players and game consoles.</p>
                            <p className="text-lg font-bold">You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and
                                without an internet connection. Take Netflix with you anywhere.</p>
                        </div>

                    </details>
                </div>
                <div className="accordion my-2 cursor-pointer">
                    <details className="md:mx-6">
                        <summary className="flex justify-between border border-[#737373] px-4 py-5 bg-[#272727] rounded-3xl">
                            <div>
                                <p className="text-white text-lg font-bold">How do i cancel?</p>
                            </div>
                            <div>
                                <div className="text-white relative inline-block text-left text-3xl" id="add" onClick="plus()">
                                    <span className="material-symbols-outlined">add</span>
                                </div>
                            </div>
                        </summary>
                        <div className="text-white mt-px px-4 rounded-md bg-[#272727] py-4">
                            <p className="text-lg font-bold py-2">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two
                                clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>

                    </details>
                </div>
                <div className="accordion my-2 cursor-pointer">
                    <details className=" md:mx-6">
                        <summary className="flex justify-between border border-[#737373] px-4 py-5 bg-[#272727] rounded-3xl">
                            <div>
                                <p className="text-white text-lg font-bold">What can i watch on Netflix?</p>
                            </div>
                            <div>
                                <div className="text-white relative inline-block text-left text-3xl" id="add" onClick="plus()">
                                    <span className="material-symbols-outlined">add</span>
                                </div>
                            </div>
                        </summary>
                        <div className="text-white mt-px px-4 rounded-md bg-[#272727] py-4">
                            <p className="text-lg font-bold py-2">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and
                                more. Watch as much as you want, anytime you want.</p>
                        </div>

                    </details>
                </div>
                <div className="accordion my-2 cursor-pointer ">
                    <details className="md:mx-6">
                        <summary className="flex justify-between border border-[#737373] px-4 py-5 bg-[#272727] rounded-3xl">
                            <div>
                                <p className="text-white text-lg font-bold">Is Netflix good for kids?</p>
                            </div>
                            <div>
                                <div className="text-white relative inline-block text-left text-3xl" id="add" onClick="plus()">
                                    <span className="material-symbols-outlined">add</span>
                                </div>
                            </div>
                        </summary>
                        <div className="text-white mt-px px-4 rounded-md bg-[#272727] py-4 ">
                            <p className="text-lg font-bold my-2">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV
                                shows and movies in their own space.</p>
                            <p className="text-lg font-bold">Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can
                                watch and block specific titles you don’t want kids to see.</p>
                        </div>

                    </details>
                </div>
                <div className="mx-auto my-2 py-4   bg-gradient-to-b from-transparent to-current md:px-52 h-100 shadow-lg shadow-transparent
                >">
                    <div className="mx-12 text-center  px-2 py-4">
                        <div className='justify-items-center '>
                            <button
                                className="text-slate-50 px-6 py-2 mx-2 rounded-3xl bg-[#C21119] flex items-stretch"><span className='font-bold'>Get
                                    Started</span>
                                {/* <span className="material-symbols-outlined self-center">chevron_right</span> */}
                            </button>
                        </div>
                        <div className='my-2'>
                            <p className='text-white'>Create or restart your membership</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq