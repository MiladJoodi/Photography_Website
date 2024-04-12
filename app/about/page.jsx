import HeroImg from "@/components/HeroImg";
import { RiRidingFill, RiUserHeartFill, RiStraHalfSLine, RiVidiconFill, RiVipCrown2Fill, RiSendPlaneFill } from "react-icons/ri";

const infoData = [
    {
        icon: <RiUserHeartFill size={20} />,
        text: 'Mrs Smith',
    },
    {
        icon: <RiSendPlaneFill size={20} />,
        text: '+91 99 787 7761',
    },
    {
        icon: <RiVidiconFill size={20} />,
        text: 'photography@gmail.com',
    },
    {
        icon: <RiVipCrown2Fill size={20} />,
        text: 'Born on 23 Jan, 2000',
    },
    {
        icon: <RiStraHalfSLine size={20} />,
        text: 'Master Degree',
    },
    {
        icon: <RiRidingFill size={20} />,
        text: '22, Ella Statu, Texas, US',
    },
]

const About = () => {
    return (
        <section className="lb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>

                <div className="flex flex-col xl:flex-row">
                    {/* Image */}
                    <div>
                        <HeroImg 
                        containerStyles="w-[505px] h-[505px] bg-no-repeat relative"
                        imgSrc="/about/profile.png"
                        />
                    </div>
                    
                    <div className="flex-1">
                        {/* Content */}
                        <div className="text-lg mt-12 xl:mt-3">
                            <div className="text-center xl:text-left">
                                <h3 className="h3 mb-4">Lets plan your perfect photoshoot</h3>
                                <p className="subtitle max-w-xl mx-auto xl:mx-0">Our mission is to further develop the overall excellence of photography and to capture memories that will be cherished for a lifetime, in the timeless photographs.</p>
                                <p className="subtitle max-w-xl mx-auto xl:mx-0">Perfessional photography services combine the classic knowledge of traditional photographic portraiture and contemporary style</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;