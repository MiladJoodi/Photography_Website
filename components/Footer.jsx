"use client"
// React Awesome Reveal
import { Fade } from "react-awesome-reveal";

import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="bg-primary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          
          
                    {/* Socials */}
                    <Socials
                    containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
                    iconStyles="text-white text-[20px] transition-all hover:text-white dark:hover:text-white/50"
                    />
                </Fade>     

                    <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                    <div className="text-white">
                        Copyright &copy; 2024, All Right Reservd.
                    </div>
                    <div className="text-white">
                        <a href="https://github.com/MiladJoodi/Photography_Website">Made with ❤️</a>
                    </div>
                    </Fade> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;