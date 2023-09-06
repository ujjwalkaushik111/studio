import React from 'react'
import Img_P from '../assets/img/png/man_hlo.png'

const Preloader = () => {
  return (
    <div
      className="min-vh-100 w-100 d-flex align-items-center justify-content-center bg-black preloader_img position-fixed w-100 top-0 z-3 start-0"
    >
      <div><img width="200" className='Animation' src={Img_P} alt="#" />
      </div>
    </div>
  )
}

export default Preloader