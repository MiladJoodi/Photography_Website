import PortfolioTabs from "@/components/PortfolioTabs";



const Portfolio = () => {
    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    My Portfolio
                </h2>

                {/* PortfolioTabs */}
                <PortfolioTabs />
            </div>
        </section>
    );
}

export default Portfolio;