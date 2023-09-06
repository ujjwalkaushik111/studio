import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hlo from "../assets/img/png/man_hlo.png";
import PPC from "../assets/img/png/PPC.png";
import img_1 from "../assets/img/png/Ellipse_mew.png"
import img_2 from "../assets/img/png/Ellipse_in.png"
import img_3 from "../assets/img/png/Ellipse_twitter.png"
import img_4 from "../assets/img/png/Ellipse_FB.png"
import img_5 from "../assets/img/png/Ellipse_INS.png"
import img_6 from "../assets/img/png/Ellipse_W.png"
import icon_search from "../assets/img/png/search_2.png";
import arrow_R from "../assets/img/svg/arrow-right.svg"
import logo_C from "../assets/img/svg/phone-call.svg"
import logo_M from "../assets/img/svg/fluent_mail.svg"
import logo_H from "../assets/img/svg/solid_home.svg"

const Succes = () => {
  return (
    <section className="position-relative mt-5 pt-5">
      <Container className="my-5 py-5">
        <Row className="justify-content-center align-items-center">
          <Col lg={4}>
            <img className="w-100" src={hlo} alt="#" />
          </Col>
          <Col lg={8} className="">
            <h2 className="fs_xsm fw-normal ff_gilroy text_868687 m-0">
              HAVE YOU SEEN OUR MASCOT?
            </h2>
            <h2 className="ff_Konexy_Personal text_000000 fw-normal fs_2xl">
              Success Guides{" "}
            </h2>
            <div className="d-flex gap-3 overflow-x-scroll">
              <button className="Category_type">Category-1</button>
              <button className="Category_type">Category-2</button>
              <button className="Category_type">Category-3</button>
              <button className="Category_type">Category-4</button>
            </div>
            <div className="d-flex mt-3 mb-5 pb-5 flex-md-row flex-column">
              <div className="Box_PPC p-3 m-2">
                <img className="w-100" src={PPC} alt="#" />
                <h2 className="fw_semibld ff_Gilroy fs_md text_000000 mt-3">
                  Sit diam metus
                </h2>
                <p className="fs_xsm opacity fw-normal ff_Gilroy text_000000">
                  Arcu amet, consectetur vel pellentesque mattis ipsum sed
                  mattis sed.
                </p>
                <p className="fs_xsm opacity fw-semibold ff_Gilroy text_6022EA mb-0 mt-2">
                  Read More....
                </p>
              </div>
              <div className="Box_PPC p-3 m-2">
                <img className="w-100" src={PPC} alt="#" />
                <h2 className="fw_semibld ff_Gilroy fs_md text_000000 mt-3">
                  Sit diam metus
                </h2>
                <p className="fs_xsm opacity fw-normal ff_Gilroy text_000000">
                  Arcu amet, consectetur vel pellentesque mattis ipsum sed
                  mattis sed.
                </p>
                <p className="fs_xsm opacity fw-semibold ff_Gilroy text_6022EA mb-0 mt-2">
                  Read More....
                </p>
              </div>
              <div className="Box_PPC p-3 m-2">
                <img className="w-100" src={PPC} alt="#" />
                <h2 className="fw_semibld ff_Gilroy fs_md text_000000 mt-3">
                  Sit diam metus
                </h2>
                <p className="fs_xsm opacity fw-normal ff_Gilroy text_000000">
                  Arcu amet, consectetur vel pellentesque mattis ipsum sed
                  mattis sed.
                </p>
                <p className="fs_xsm opacity fw-semibold ff_Gilroy text_6022EA mb-0 mt-2">
                  Read More....
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='have_you_abs'>
                <div className='have_you_bg d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                    <div className='mb-4 mb-lg-0'>
                        <h2 className='fw-normal fs_2xl ff_Konexy_Personal text_ffffff'>Have you</h2>
                        <p className='ff_Gilroy text_ffffff fs_md fw-semibold mb-0'>read our study about Speed and Performance in <span className='d-lg-block'> WordPress?</span></p>
                    </div>
                    <button className='check_it_btn ff_inter fs_xsm fw-semibold border-0 text_6022EA'>Check It Out</button>
                </div>
        </Container>
      <div className="bg-black pt-5 mt-5">
        <Container className="mt-5">
          <div className="d-flex justify-content-lg-end justify-content-center py-4 mt-5">
           <div className="d-flex justify-content-between align-items-center white_box">
            <input type="search"placeholder="Search here...." /><span><img className="py-3 px-4" src={icon_search} alt="#" /></span>
            </div>
            </div>
          <Row>
            <Col lg={3}>
              <ul>
                <h2 className="text_ffffff fw-normal fs_xsm ff_Gilroy">Services</h2>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>WordPress Development</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>WooCommerce Development</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>WordPress Maintenance</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>Speed Optimization</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>Dedicated WordPress Developer</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>Headless WordPress Development</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>White Label Development</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <h2 className="text_ffffff fw-normal fs_xsm ff_Gilroy">Services</h2>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>WordPress Hosting</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>PSD, XD, Figma to WordPress Conversion</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>Custom WordPress Theme</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>Custom WordPress Plugins</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>CMS to WordPress</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy"> <span><img className="pe-1" src={arrow_R} alt="#" /></span>WordPress Malware Removal</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <h2 className="text_ffffff fw-normal fs_xsm ff_Gilroy">Latest Articles</h2>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy mb-3">
                  7 WordPress Plugins to Create an Effective Newsletter
                  03.01.2022
                </li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy mb-3">
                  What’s the Perfect Blog Post Length for Your WordPress Site’s
                  SEO? 02.01.2022
                </li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy mb-3">
                  5 Reasons the Future of WordPress Is Headless 01.01.2022
                </li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy">
                  Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                  Amazingly Successful 2021 30.12.2021
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <h2 className="text_ffffff fw-normal fs_xsm ff_Gilroy">Contact</h2>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy mb-4"> <span className="pe-1"><img src={logo_C} alt="#" /></span>EU: +359 988 993 128</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy mb-4"> <span className="pe-1"><img src={logo_C} alt="#" /></span>US: +1 (1 888) 266-6917</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy mb-4"> <span className="pe-1"><img src={logo_M} alt="#" /></span>office@vipestudio.com</li>
                <li className="text_ffffff fw-normal fs_2xsm ff_Gilroy mb-4"> <span className="pe-1"><img src={logo_H} alt="#" /></span>14 Srebarna, Sofia 1407, Bulgaria</li>
              </ul>
            </Col>
          </Row>
        </Container>
          <hr className="text_ffffff" />
        <Container>
            <div className="d-flex justify-content-between align-items-center flex-md-row flex-column">
                <div>
          <p className="text_ffffff fw-normal fs_2xsm ff_Gilroy">© Vipe Studio 2016-2022</p>
          <div className="d-flex gap-2">
            <p className="text_ffffff fw-normal fs_2xsm ff_Gilroy">Privacy </p>
            <span className="line_1"></span>
            <p className="text_ffffff fw-normal fs_2xsm ff_Gilroy">Careers </p>
            <span className="line_1"></span>
            <p className="text_ffffff fw-normal fs_2xsm ff_Gilroy">Media </p>
            <span className="line_1"></span>
            <p className="text_ffffff fw-normal fs_2xsm ff_Gilroy">Client Area </p>
          </div>
          </div>
          <div className=" d-flex gap-3">
            <a href="https://www.github.com"><img src={img_1} alt="#" /></a>
           <a href="https://www.linkedin.com"><img src={img_2} alt="#" /></a>
          <a href="https://www.twitter.com"> <img src={img_3} alt="#" /></a>
          <a href="https://www.facebook.com"> <img src={img_4} alt="#" /></a>
          <a href="https://www.instagram.com"> <img src={img_5} alt="#" /></a>
         <a href="https://www.wordpress.com">  <img src={img_6} alt="#" /></a>

          </div>

          </div>
        </Container>
        
      </div>
      
    </section>
    
  );
};

export default Succes;
