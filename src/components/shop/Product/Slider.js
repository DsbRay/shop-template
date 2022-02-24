import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
// images
import shoeSlide1 from "../../../images/shoe-slide-1.png";
import shoeSlide2 from "../../../images/shoe-slide-2.png";
import shoeSlide3 from "../../../images/shoe-slide-3.png";
import shoeSlide4 from "../../../images/shoe-slide-4.png";
import shoeSlide5 from "../../../images/shoe-slide-5.png";
import tagIcon from "../../../images/icons/tag-white.svg";
const IMAGE_LIST = [
  {
    img: shoeSlide1,
  },
  {
    img: shoeSlide2,
  },
  {
    img: shoeSlide3,
  },
  {
    img: shoeSlide4,
  },
  {
    img: shoeSlide5,
  },
];
const Slider = () => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (index) => {
    if (swiperRef) {
      swiperRef?.current.swiper.slideTo(index);
    }
  };
  const renderSlidePagination = () => {
    return (
      <ImageContainer>
        {IMAGE_LIST.map((item, i) => {
          return (
            <button
              key={i}
              className={activeSlide === i ? "active image" : "image"}
              style={{ backgroundImage: `url(${item.img})` }}
              onClick={() => handleSlideChange(i)}
            />
          );
        })}
      </ImageContainer>
    );
  };
  const renderSliderImages = () => {
    return IMAGE_LIST.map((item, i) => {
      return (
        <SwiperSlide key={i}>
          <Promotion>
            <img src={tagIcon} alt={`tag-${i}`} />
            <p>-40% Off</p>
          </Promotion>
          <img src={item.img} alt={`img-${i}`} />
        </SwiperSlide>
      );
    });
  };
  useEffect(() => {
    if (swiperRef?.current) {
      setActiveSlide(swiperRef?.current.swiper.activeIndex);
    }
  }, [swiperRef, activeSlide]);
  return (
    <Container>
      <Swiper
        onSlideChange={() =>
          setActiveSlide(swiperRef?.current.swiper.activeIndex)
        }
        ref={swiperRef}
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {renderSliderImages()}
      </Swiper>
      <div className="pagination">{renderSlidePagination()}</div>
    </Container>
  );
};
const Container = styled.div`
  height: 600px;
  min-width: 100%;
  .pagination {
    display: none;
  }
  @media (min-width: 1024px) {
    .pagination {
      display: block;
    }
  }
`;

const Promotion = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  z-index: 99999;
  top: 10px;
  right: 10px;
  background-color: var(--azureRadiance);
  padding: 5px 10px;
  border-radius: 4px;
  p {
    font-size: 16px;
    color: var(--white);
    font-style: italic;
  }
  img {
    width: 16px;
    height: 13px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  border: none;
  .image {
    cursor: pointer;
    border: none;
    &.active {
      opacity: 0.7;
      border: 2px solid var(--azureRadiance);
    }
    width: 100%;
    height: 96px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img {
      max-width: 100%;
    }
  }
`;
export default Slider;
