import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import Propy from "../assets/img/svg/Propy.svg"
import Ciela from "../assets/img/svg/Ciela.svg"
import Revuele from "../assets/img/svg/Revuele.svg"
import Spark from "../assets/img/svg/Spark.svg"
import Popular_man from "../assets/img/png/Popular_man.png"
import Three_smile from "../assets/img/png/Three_smile.png"

const LongTrem = () => {
     // slick-sliderstart
  const Slider1 = {
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
        <Container>
          <h2 className="ff_Konexy_Personal fw-normal fs_2xl text_000000 pt-4">Long Term <span className="d-block"></span> WordPress Partner</h2>
          <p className="fs_xsm ff_Gilroy fw-normal opacity ">Our motto is the long-term partnership – we will not only develop your perfect website, but will <span className="d-block"></span> be behind you through the whole process. They already trusted us:</p>
          <Slider {...Slider1} className="py-5">
          <div className="d-flex align-items-center justify-content-center ">
            <img src={Propy} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <img  src={Ciela} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={Revuele} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img  src={Ciela} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img  src={Spark} alt="#" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img  src={Ciela} alt="#" />
          </div>
        </Slider>

        </Container>
      </div>
      <Container className="py-5 my-5">
        <Row className="d-flex align-items-center">
        <Col lg={6}data-aos="fade-right" data-aos-duration="3000">
            <img className="w-100" src={Popular_man} alt="#" />
        </Col>
        <Col lg={6}data-aos="fade-left" data-aos-duration="3000">
            <h2 className="ff_Konexy_Personal fw-normal fs-2xl text_000000 mt-lg-0 mt-4"><span className="text_6022EA">Agile WordPress</span> Development Project management	
	        </h2>
            <p className="opacity ff_Gilroy fs_xsm fw_normal text_000000">Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
            <button className="Button_LG">Explore</button>
        </Col>
        </Row>
      </Container>

      <div className="bg_f6f6f6">
        <Container>
            <Row>
                <Col lg={6} className="py-5 my-5"data-aos="fade-right" data-aos-duration="3000">
                  <h2 className="ff_Konexy_Personal fw-normal fs_2xl text_000000">Team Full of Stars</h2>
                  <p className="ff_Gilroy fw-normal fs_xsm text_000000">Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                  <button className="Button_LG">Explore</button>
                </Col>
                <Col lg={6} className="position-relative"data-aos="fade-left" data-aos-duration="3000">
                  <img className="w-100 abs_smile" src={Three_smile} alt="#" />
                 </Col>
            </Row>
            
        </Container>
      </div>
    </section>
  );
};

export default LongTrem;
