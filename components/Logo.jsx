import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" >  
            <Image
            src="/logo.svg"
            width={55}
            height={55}
            priority
            alt="logo"
            />
        </Link>
    );
}

export default Logo;