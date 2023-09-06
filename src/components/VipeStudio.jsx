import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import right_icon from '../assets/img/svg/right-icon.svg'
import r_blue from '../assets/img/svg/right_blue.png'
import Smile_girl from '../assets/img/png/Smile_girl.png'

const VipeStudio = () => {
  return (
    <section className='bg-black pb-5'>
        <Container className='pb-5'>
            <Row className='py-5 mb-5'>
                <Col lg={4} className='d-flex justify-content-start'data-aos='fade-right'data-aos-duration='3000'>
                 <h2 className='fs_xl fw_normal text_ffffff ff_Konexy_Personal mt-4'>All Vipe Studio WordPress services	include:</h2>
                </Col>
                <Col lg={4} className='d-flex justify-content-end  flex-column'data-aos="fade-down" data-aos-duration="3000">
                <h2 className='ff_Gilroy fw-semibold fs_md text_ffffff my-4'>By Industry</h2>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Lorem in elementum pellentesque</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Molestie cursus praesent mi</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Leo sed viverra cras</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Laoreet feugiat ut at</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Risus aliquam molestie viverra</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Diam enim pulvinar velit</p>
                </Col>
                <Col lg={4} className='d-flex justify-content-end  flex-column'data-aos="fade-left" data-aos-duration="3000">
                <h2 className='ff_Gilroy fw-semibold fs_md text_ffffff my-4'>By Services</h2>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Accumsan, dui a semper</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Interdum malesuada vulputate neque</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Nullam non a, morbi</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Arcu morbi leo eu</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Viverra venenatis, in ornare</p>
                <p className='fs_xsm fw-normal text_ffffff ff_Gilroy '><span className='pe-2'><img src={right_icon} alt="#" /></span>Erat id aliquam habitant</p>
                </Col>
                
            </Row>
            <div className=' position-relative'>
            <div className='blue_z abs_blue1'></div>
            <div className='blue_zz abs_blue2'></div>
            <div className='Black_box p-4 position-relative z-3'>
            <Row>
                <Col lg={4} className='mt-5 position-relative'data-aos='fade-right'data-aos-duration='3000'>
                    
                    <h2 className='ff_Konexy_Personal fw-normal fs_lg text_ffffff'>Not Sure <span className='d-block'></span> which service <span className='d-block'></span> you need <span className='d-block'></span> yet?	</h2>
                    <button className='button_Schedule mt-4'>Schedule An Appointment</button>
                </Col>
                <Col lg={4} className='mt-5'data-aos='fade-down'data-aos-duration='3000'>
                    <h2 className='ff_Gilroy fw-bold fs_md text_ffffff mb-4'>20-m free consultation that will help us identifyif  you need</h2>
                    <p className='fs_xsm fw-normal text_ffffff ff_Gilroy'><span className='pe-2'><img src={r_blue} alt="#" /></span>Technical Description & Discovery</p>
                    <p className='fs_xsm fw-normal text_ffffff ff_Gilroy'><span className='pe-2'><img src={r_blue} alt="#" /></span>Custom WordPress Development</p>
                    <p className='fs_xsm fw-normal text_ffffff ff_Gilroy'><span className='pe-2'><img src={r_blue} alt="#" /></span>Support & Maintenance</p>
                    <p className='fs_xsm fw-normal text_ffffff ff_Gilroy'><span className='pe-2'><img src={r_blue} alt="#" /></span>Other WordPress Service	</p>
                </Col>
                <Col lg={4} className='position-relative'data-aos="fade-left" data-aos-duration="3000">
                    <img className='w-100 ' src={Smile_girl} alt="#" />
                    

                </Col>
            </Row>
            </div>
            </div>
        </Container>
    </section>
  )
}

export default VipeStudio