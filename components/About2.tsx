import React from "react";
import Link from "next/link";
import Image from "next/image";
function About2() {
    return (
        <>
            <div className="md:mx-auto md:container px-4">
                <div className="pt-5 ">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6 ">
                                <div className="py-2   text-color">
                                    <h1 className="font-normal italic    md:w-60  md:text-6xl text-4xl leading-tight text-gray-800">
                                        About&nbsp;Us
                                    </h1>
                                    <h2 className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12">
                                        We take care to overcome our
                                        expectations and offer you excellence
                                        and perfection in every case we produce.
                                        We provide a nange services to help you
                                        plan everything from start to finish and
                                        take the stress away from you. We work
                                        with you personally and professionally.
                                        Organizing events is our life and we
                                        love what we do.
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <Image
                                    className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                                    src="/about-us-team.jpg"
                                    alt="team"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About2;
