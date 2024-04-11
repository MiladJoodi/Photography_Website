import Image from "next/image";

const HeroImg = ({containerStyles, imgSrc}) => {
    return (
        <div className={`${containerStyles}`}>
            <Image
            src={imgSrc} fill priority
            alt=""
            />
        </div>
    );
}

export default HeroImg;