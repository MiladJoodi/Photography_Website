"use client"
// React Awesome Reveal
import { Fade } from "react-awesome-reveal";
import PortfolioTabs from "@/components/PortfolioTabs";

const Portfolio = () => {
    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
            <Fade direction="left" delay={400} cascade damping={1e-1} triggerOnce={true}>
           <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    My Portfolio
                </h2>
            </Fade>

                {/* PortfolioTabs */}
                <PortfolioTabs />
            </div>
        </section>
    );
}

export default Portfolio;