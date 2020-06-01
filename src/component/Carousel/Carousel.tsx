/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "antd";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";
import img6 from "../../img/6.jpg";
import img7 from "../../img/7.jpg";
import img8 from "../../img/8.jpg";
import Carouselss from "./index";
//@ts-ignore
const Carousels = (props: any) => {
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <Carouselss>
      <Carousel className="Carousel" autoplay dotPosition="bottom">
        {imgs.map((item: any, i: any): any => {
          console.log(i);
          return (
            <div key={i}>
              <img className="imgs" src={item} />
            </div>
          );
        })}
      </Carousel>
    </Carouselss>
  );
};
export default Carousels;
