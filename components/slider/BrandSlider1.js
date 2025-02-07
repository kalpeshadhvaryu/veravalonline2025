'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1199: { slidesPerView: 5 },
        991: { slidesPerView: 4 },
        767: { slidesPerView: 3 },
        575: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
    },
};

const brandImages = Array.from({ length: 49 }, (_, i) => `/assets/img/logo/${i + 1}.png`);
export default function BrandSlider1() {
    return (
        <div className="swiper brand-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
                {brandImages.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="brand-image">
                            <img src={src} alt={`brand-img-${index}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
