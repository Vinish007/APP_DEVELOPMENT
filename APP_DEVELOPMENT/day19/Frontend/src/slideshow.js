// Slideshow.js

import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../src/slideshow.css";

export default function Slideshow() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
         url: "https://images.pexels.com/photos/4618221/pexels-photo-4618221.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
         url: "https://images.pexels.com/photos/65894/peacock-pen-alluring-yet-lure-65894.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
         url: "https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg",
      },
      {
         url: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
         url: "https://images.pexels.com/photos/7813888/pexels-photo-7813888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
  ];

  return (
    <div className="slideshow-container">
      <SimpleImageSlider
        width={1055}
        height={700}
        images={sliderImages}
      //   showBullets={true}
      //   showNavs={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      />
      <div className="slideshow-bullets">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`slideshow-bullet ${index === imageNum ? "active" : ""}`}
            onClick={() => setImageNum(index)}
          ></div>
        ))}
      </div>
      <div className="slideshow-navs">
        <div
          className="slideshow-nav"
          onClick={() => setImageNum((imageNum - 1 + sliderImages.length) % sliderImages.length)}
        >
          {"<"}
        </div>
        <div
          className="slideshow-nav"
          onClick={() => setImageNum((imageNum + 1) % sliderImages.length)}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}


