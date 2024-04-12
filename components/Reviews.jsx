"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Jenifer",
    job: "Chief",
    review:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Hamilton",
    job: "C0O",
    review:
      " you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Lucifer",
    job: "App Developer",
    review:
      " you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Mark Steve",
    job: "Chief",
    review:
      " you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Lopez Chris",
    job: "CEO",
    review:
      " you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Stork Gem",
    job: "Chief",
    review:
      " you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          They say about out work
        </h2>

        {/* Slider */}
        <Swiper
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 2 },
                1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            className="h-[350px]"
          >
            {
                reviewsData.map((person, index)=>{
                    return (
                        <SwiperSlide key={index}>
                            <Card className="p-8 min-h-[300px]">
                                <CardHeader className="p-0 mb-3">
                                    <div className="flex flex-col items-start gap-x-4">
                                        {/* Avatar */}
                                        <Image
                                        src={person.avatar}
                                        width={70}
                                        height={70}
                                        alt=""
                                        priority
                                        className="mb-2"
                                        />
                                        {/* Name */}
                                        <div className="flex flex-col">
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className="text-lg text-muted-foreground">
                                    {person.review}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })
            }
          </Swiper>
        {/* Slider */}

      </div>
    </section>
  );
};

export default Reviews;
