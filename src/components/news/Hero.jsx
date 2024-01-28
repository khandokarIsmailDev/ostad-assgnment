'use client'
import React from "react";

const Hero = () => {
  return (
    <header>
            <div className="hero pt-40 pb-20 bg-gray-100 ">
                <div className="container lg:w-3/4 w-5/6 mx-auto">
                    <div className="hero-grid grid grid-cols-1 lg:grid-cols-2">
                        <div className="hero-grid-content lg:flex lg:items-center">
                            <div className="hero-grid-content-flex text-center  lg:text-left">
                                <h1 className="text-4xl lg:text-5xl font-bold leading-[3.5rem] lg:leading-[4rem] pb-5 ">
                                    Sample News Headline <br /> Orders Partial Embasy <br /> News Of The World
                                </h1>
                                <p className="text-black leading-7 pb-16 lg:text-xl">
                                    Our news is globally establish by the goverment and with the <br /> We believe our commitment to provide services
                                </p>
                                <a
                                    href="#"
                                    className="font-bold lg:text-xl lg:px-5 lg:font-medium bg-[#1D4ED8] block lg:inline-block rounded-lg transition-all duration-500 hover:text-[#20B15A] hover:bg-white border-2 border-[#20B15A] text-white p-3"
                                >
                                    Subscribe Now
                                </a>
                            </div>
                        </div>
                        <div className="hero-grid-img hidden lg:block">
                            <div className="hero-grid-img-grid flex flex-wrap justify-end ">
                                <img
                                    src="https://smchs.edu.gh/wp-content/uploads/2021/10/nqobile-vundla-zOt6a59k2BE-unsplash-1-973x1024.jpg"
                                    className="w-[60%] mr-5 rounded-lg h-72 mb-5 object-cover box-border"
                                    alt="img"
                                />
                                <img
                                    src="https://smchs.edu.gh/wp-content/uploads/2021/12/pexels-laura-james-6098051-2048x1365.jpg"
                                    className="w-[30%] h-72 rounded-lg mb-5 object-cover box-border"
                                    alt="image"
                                />
                                <img
                                    src="https://smchs.edu.gh/wp-content/uploads/2021/10/nqobile-vundla-zOt6a59k2BE-unsplash-1-973x1024.jpg"
                                    className="w-[30%] h-72 rounded-lg object-cover box-border"
                                    alt="image"
                                />
                                <img
                                    src="https://smchs.edu.gh/wp-content/uploads/2021/12/pexels-laura-james-6098051-2048x1365.jpg"
                                    className="w-[60%] ml-5 rounded-lg h-72 object-cover box-border"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  );
};

export default Hero;
