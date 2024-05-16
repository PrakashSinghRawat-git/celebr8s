import Image from "next/image";
// import HomeSection from "@/components/HomeSection";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import About2 from "@/components/About2";
import Services from "@/components/Services";

export default function Home() {
    return (
        <main className="w-screen overflow-hidden">
            <Navbar />

            <div className=" w-full">
                <div id="#home">
                    <HomeSection />
                </div>
                <div className="md:mx-20">
                    <div id="#home">
                        <About />
                    </div>

                    <div id="#services">
                        <Services />
                    </div>
                    <div id="#about">
                        <About2 />
                    </div>
                </div>
            </div>
        </main>
    );
}
