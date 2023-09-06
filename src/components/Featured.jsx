import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import frame1 from "../assets/img/svg/Yahoo.svg";
import frame2 from "../assets/img/svg/yahoo_f.svg";
import frame3 from "../assets/img/svg/Trending.svg";
import frame4 from "../assets/img/svg/yahoo_L.svg";
// import box1 from "../assets/img/png/Box1.png";
// import box2 from "../assets/img/png/Box2.png";
// import box3 from "../assets/img/png/Box3.png";
import { ujjwal } from "./MapData";

const Featured = () => {
  // slick-sliderstart
  const Slidersix = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // End slick-slider
  return (
    <section>
        <div className="bg_f6f6f6">
      <Container className="py-5">
        <h2 className="ff_ Konexy_Personal text_000000 fw-normal fs_2xl">Featured on</h2>
        <Slider {...Slidersix} className="py-5">
          <div className="d-flex align-items-center justify-content-center ">
            <img src={frame1} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <img className="" src={frame2} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={frame1} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="" src={frame3} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="" src={frame4} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img className="" src={frame3} alt="#" />
          </div>
        </Slider>
      </Container>
      </div>

      <Container className="py-5">

        <div className="py-5">
          <h2 className="ff_Konexy_Personal text_000000 fw-normal fs_2xl mb-5">Integer et nisl non</h2>
          <Row>
            {/* Map three in one card */}
            {ujjwal.map((data)=>{
              return(
                <Col key={data.id} lg={4} data-aos="flip-down"data-aos-duration="3000">
                <div className="Box_Three mb-3">
                  <img src={data.img} alt="#" />
                  <h2 className="ff_Inter fw-semibold text-center fs_md text_000000 mb-3 mt-4 pt-3">{data.hadding}	</h2>
                  <p className="ff_ Gilroy fw-normal fs_xsm text_000000 opacity text-center mb-3 pb-1">{data.paragraph}</p>
                  <p className="fs_xsm opacity fw-semibold text_6022EA text-center">{data.button}</p>
                </div>
              </Col>
              )
            })}
           
          </Row>
        </div>
        </Container>
    </section>
  );
};

export default Featured;
