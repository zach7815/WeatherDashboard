import React from "react";
import{Swiper,SwiperSlide} from "swiper/react";
import FiveDayForecast from "./FiveDayWeather";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper";

const SwiperFunction = ()=>{
    const pagination={
        clickable:true,
        renderBullet:function(index,className){
            return '<span class="' + className + '">' + (index + 1) + "</span>"
        }
    };
    return (
        <>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="weatherContainer"
          >
            <SwiperSlide><FiveDayForecast day="Today" /></SwiperSlide>
            <SwiperSlide><FiveDayForecast day="Tuesday"   /></SwiperSlide>
            <SwiperSlide><FiveDayForecast day="Wednesday" /></SwiperSlide>
            <SwiperSlide><FiveDayForecast day="Thursday" /></SwiperSlide>
            <SwiperSlide><FiveDayForecast  day="Friday"/></SwiperSlide>
          </Swiper>
        </>
      );
}

export default SwiperFunction