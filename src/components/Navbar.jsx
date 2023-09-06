import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import YouTube from "../assets/img/png/YouTube.png";
import Vipe from "../assets/img/png/Vipe_img.png";
import Spiner from "../assets/img/png/spiner.png";
import Earth from "../assets/img/svg/Earth.svg";
import down_arrow from "../assets/img/svg/down_arrow.svg";
import icon_search from "../assets/img/png/icons_search.png";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  if (showNavbar) {
    document.body.classList.remove("overflow_hidden");
  } else {
    document.body.classList.add("overflow_hidden");
  }
  return (
    <section className="bg-black">
         <header className='pt-3 mb-5 pb-5'>
                <Container className='mb-2'>
                    <nav className='d-flex justify-content-between align-items-center'>
                        <div></div>
                        <ul className={`${showNavbar ? 'd-flex align-items-center gap-4 mb-0 nav_sm' : 'd-flex align-items-center gap-4 mb-0 nav_sm nav_show p-0'} `}>
                            <li> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="links_nav drop_down d-flex align-items-center gap-1"
                                >
                                    WordPress Solution
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="links_nav"
                                    >
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="links_nav"
                                    >
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="links_nav"
                                    >
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                            <li> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="links_nav drop_down d-flex align-items-center gap-1 "
                                >
                                 Services
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="links_nav"
                                    >
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="links_nav"
                                    >
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="links_nav"
                                    >
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                            <li><a href='#about' className='links_nav link'>Portfolio</a></li>
                            <li> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="links_nav drop_down d-flex align-items-center gap-1 "
                                >
                                   About
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="links_nav"
                                    >
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="links_nav"
                                    >
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="links_nav"
                                    >
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                            <li><a href='#tokens' className='links_nav link'>Blog</a></li>
                            <li className='d-xl-none d-block'><a href="#n0." className='links_nav link'>1 888 266-6917 (eu?)</a></li>
                            <li className='d-xl-none d-block'><button className='Button_F '>Contact Us</button></li>
                            <li className='d-xl-none d-block'><a href="#lang" className='links_nav'><span className='me-1'><img src={Earth} alt="Earth" /></span>Eng <span className='ms-1'><img src={down_arrow} alt="down_arrow" /></span></a></li>
                            <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-xl-none" onClick={() => setShowNavbar(true)}>&times;</span>
                        </ul>

                        <ul className='d-flex align-items-center gap-4 mb-0 p-0'>
                            <li className='d-xl-block d-none'><a href="#n0." className='links_nav link'>1 888 266-6917 <span className='ff_inter fs_italic'>(eu?)</span></a></li>
                            <li className='d-xl-block d-none'><button className='Button_F'>Contact Us</button></li>
                            <li> <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    className="links_nav drop_down d-flex align-items-center gap-1 "
                                >
                                   <span className='me-1'><img src={Earth} alt="Earth" /></span>Eng 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        className="links_nav"
                                    >
                                        Hindi
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        className="links_nav"
                                    >
                                        Sanskrit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-3"
                                        className="links_nav"
                                    >
                                        Haryanvi
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>
                        </ul>
                        <span title="open"
                            className="d-inline d-xl-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
                    </nav>
                </Container>
            </header>
      <Container className="mb-5 mb-5">
        <Row className="mt-5">
          <Col lg={6}>
            <h1 className="text_ffffff fw-normal fs_3xl ff_Konexy_Personal">
              WordPress Development Agency
            </h1>
            <h2 className="text_ffffff fw-bold fs_md ff_Gilroy mt-4">
              for Enterprise + Friendly Team
            </h2>
            <p className="text_ffffff fw-normal fs-xsm opacity ff_Gilroy">
              Vipe Studio is a WordPress Agency for development - a long-term
              partner for any WordPress service. Websites and,online shops
              development, maintenance and customization iswhat we do best.
            </p>
            <div className="d-flex align-items-center mb-5">
              <button className="Button_FP me-4">Get Started</button>
              <img src={YouTube} alt="#" />
              <p className="fw-normal ff_Gilroy fs_xsm text_ffffff opacity mt-3 ps-3">
                What is Vipe? (1min)
              </p>
            </div>
          </Col>
          <Col lg={6} className="position-relative">
            <img className="w-100 position-relative z-2 rounded-4" src={Vipe} alt="#" />
            <div className='blue_z abs_blue3'></div>
            <div className='blue_zz abs_blue4'></div>
          </Col>
        </Row>
        </Container>
        <div className="Box_gray py-5">
          <Container>
          <Row>
            <Col lg={6}>
              <h2 className="ff_Konexy_Personal fs_lg fw-normal text_ffffff">
                Tell us more....
              </h2>
              <p className="ff_Gilroy fw-normal fs_xsm text_ffffff">
                Lectus vitae est ultrices sed. Sit aliquam commodo 
                augue in quis. <span className="d-block"></span> Magna vel orci sem neque fringilla et lectus
                laoreet.
              </p>
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-between align-items-center gray_box">
                  <input
                    type="search"
                    placeholder="What do you need assistance with?"/>
                  <span>
                    <img src={icon_search} alt="#" />
                  </span>
                </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <p className="ff_Gilroy text_ffffff fs_xsm fw-normal"> <span className="pe-2"><img src={Spiner} alt="#" /></span>or send us an inquire?</p>
                <p className="ff_Gilroy text_ffffff fs_xsm fw-normal">Learn more about...</p>
              </div>
            </Col>
          </Row>
      </Container>
        </div>
    </section>
  );
};

export default Navbar;
