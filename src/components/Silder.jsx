import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core CSS
import 'swiper/css/pagination'; // Swiper pagination CSS
import 'swiper/css/navigation'; // Swiper navigation CSS

const Silder = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enable navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Swiper Slides with Photo URLs */}
        <SwiperSlide>
          <img
            src="https://i.ibb.co/0GbXg6D/29331.jpg"
            alt="Slide 1"
            className="w-full h-[550px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/m8r4F0q/front-view-young-woman-holding-tickets-preparing-vacation-blue-background-journey-voyage-sea-plane-v.jpg"
            alt="Slide 2"
            className="w-full h-[550px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/RQxWff7/6317044.jpg"
            alt="Slide 3"
            className="w-full h-[550px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/cNVfqrQ/top-view-passport-tickets-arrangement.jpg"
            alt="Slide 4"
            className="w-full h-[550px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/j8gyLJz/10091167.jpg"
            alt="Slide 5"
            className="w-full h-[550px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Silder;
