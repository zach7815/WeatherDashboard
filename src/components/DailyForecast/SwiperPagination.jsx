import React from "react";
import{Swiper,SwiperSlide} from "swiper/react";
import FiveDayForecast from "./FiveDayWeather";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";

const mapID=[
1,
2,
3,
4,
5,
]
  

const SwiperFunction = ({forecasts})=>{
    const pagination={
        clickable:true,
        renderBullet:function(index,className){
            return '<span class="' + className + '">' + (index + 1) + "</span>"
        }
    };

    if(!forecasts){
      return
    }
    else{
    return (
        <>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="weatherContainer"
          >
            {forecasts.map((forecast,index)=>{
              return(
                <SwiperSlide key={mapID[index]}>
                <FiveDayForecast day={forecast["day"]} forecast={forecast}/>
                </SwiperSlide>
              )

            })};
          </Swiper>
        </>
      );
          }
}

export default SwiperFunction