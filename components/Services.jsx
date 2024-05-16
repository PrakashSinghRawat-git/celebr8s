import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const Services = () => {
    return (
        <section className="pb-12 pt-10 dark:bg-dark ">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-5 max-w-[510px] text-center lg:mb-5">
                            <span className="  block text-lg font-semibold text-primary">
                                Our Services
                            </span>
                            <h2 className="  text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                What We Offer
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                We Provide Exceptional Event Services for
                                Memorable Moments
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-10     items-center">
                    <ServiceCard
                        title="Refreshing Design"
                        price="50 Rs"
                        details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                        icon="/birthday-card.jpg"
                    />
                    <ServiceCard
                        title="Refreshing Design"
                        price="50 Rs"
                        details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                        icon="/birthday-card.jpg"
                    />
                    <ServiceCard
                        title="Refreshing Design"
                        price="50 Rs"
                        details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                        icon="/birthday-card.jpg"
                    />
                    <ServiceCard
                        title="Refreshing Design"
                        price="50 Rs"
                        details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                        icon="/birthday-card.jpg"
                    />
                    <ServiceCard
                        title="Refreshing Design"
                        price="50 Rs"
                        details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                        icon="/birthday-card.jpg"
                    />
                    <ServiceCard
                        title="Refreshing Design"
                        price="50 Rs"
                        details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics. We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics"
                        icon="/birthday-card.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;

const ServiceCard = ({ icon, price, title, details }) => {
    console.log(icon);
    return (
        <>
            <div className="w-[250px] col-span-1   my-5 shadow-xl px-1 py-5 mx-2">
                <Image
                    src={icon}
                    alt="icon"
                    width={100}
                    height={100}
                    // layout="responsive"
                    className="rounded-[20px] w-full  shadow-2 hover:shadow-lg    "
                ></Image>
                <div className="flex justify-between mb-[14px]     mt-3 ">
                    <h4 className="font-semibold text-dark  ">{title}</h4>
                    <h4 className="mx-auto text-sky-700 italic font-bold">
                        {price}
                    </h4>
                </div>

                <p className="text-body-color text-sm dark:text-dark-6 line-clamp-3">
                    {details}
                </p>

                <div className="flex  justify-evenly mt-5">
                    {/* create icon clouds for contact */}
                    <Phone className="text-blue-500  hover:scale-105 cursor-pointer text-[205x]" />
                    <Mail className="text-red-500  hover:scale-105 cursor-pointer text-[25px]" />
                    <Image
                        src="/whatsapp.png"
                        width={25}
                        height={25}
                        alt="icon"
                        className="text-green-500  hover:scale-105 cursor-pointer  "
                    ></Image>
                </div>
            </div>
        </>
    );
};
