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
            <SwiperSlide><FiveDayForecast /></SwiperSlide>
            <SwiperSlide><FiveDayForecast /></SwiperSlide>
            <SwiperSlide><FiveDayForecast /></SwiperSlide>
            <SwiperSlide><FiveDayForecast /></SwiperSlide>
            <SwiperSlide><FiveDayForecast /></SwiperSlide>
          </Swiper>
        </>
      );
}

export default SwiperFunction