import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import figma from '../../assets/images/figma.svg';
import miro from '../../assets/images/miro.svg';
import xd from '../../assets/images/xd.svg';
import telegram from '../../assets/images/telegram.svg'
import google from '../../assets/images/google.svg'
import discord from '../../assets/images/discord.svg'

const PartnerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <Slider {...settings}>
        <div className="px-2">
          <img src={figma} alt="Slide 1" className="w-full"/>
        </div>
        <div className='px-2'>
          <img src={miro} alt="Slide 2" className="w-full"/>
        </div>
        <div className='px-2'>
          <img src={xd} alt="Slide 3" className="w-full"/>
        </div>
        <div className='px-2'>
          <img src={telegram}alt="Slide 4" className="w-full"/>
        </div>
        <div className='px-2'>
          <img src={google}alt="Slide 4" className="w-full"/>
        </div>
        <div className='px-2'>
          <img src={discord}alt="Slide 4" className="w-full"/>
        </div>
      </Slider>
    </div>
  );
};

export default PartnerCarousel;
