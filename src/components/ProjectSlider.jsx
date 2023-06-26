import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  position: relative;
  top: 45px;

  .swiper {
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100%;

    .swiper-button-prev {
      background: transparent;
    }
    .swiper-button-next {
      background: transparent;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide iframe {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
  .swiper-pagination {
    background: transparent;
    position: absolute;
    bottom: 0px;
  }
`;

const CustomNavigation = styled(Navigation)`
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  .swiper-button-prev {
    left: 10px;
    background: transparent;
  }

  .swiper-button-next {
    right: 10px;
    background: transparent;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    opacity: 0.1;
  }
`;

export default function ProjectSlider() {
  return (
    <>
      <Wrapper>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <iframe
              src="https://extraordinary-speculoos-c48f63.netlify.app/"
              width="100%"
              height="100%"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              src="https://atomize-clone.netlify.app/"
              width="100%"
              height="100%"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              src="https://netflix-clone-sanjeev.netlify.app/"
              width="100%"
              height="100%"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              src="https://www.example.com"
              width="100%"
              height="100%"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </>
  );
}
