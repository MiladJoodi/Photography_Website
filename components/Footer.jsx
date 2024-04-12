import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="bg-primary py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    {/* Socials */}
                    <Socials
                    containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
                    iconStyles="text-white text-[20px] transition-all hover:text-white dark:hover:text-white/50"
                    />
                    <div className="text-white">
                        Copyright &copy; 2024, All Right Reservd.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;