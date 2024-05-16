import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
    return (
        <section className="max-w-screen max-h-screen py-1 border justify-center items-center overflow-y-hidden relative">
            <div className="relative w-full h-full">
                <Image
                    src="/banner4.jpg"
                    alt="home-banner"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center  ">
                    <div className="text-white text-center mb-[10%] md:mb-[25%]">
                        <h1 className="text-4xl font-bold mb-4">
                            Welcome to our Website
                        </h1>
                        <p className="text-xl">
                            Explore our amazing products and services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
