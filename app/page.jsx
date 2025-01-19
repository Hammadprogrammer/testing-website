import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react'// pages/_app.js
import '@fortawesome/fontawesome-free/css/all.min.css';  // Font Awesome ka CSS globally import kijiye
import Hero from '@/pagelayouts/home/component/hero'
import ServicesSection from "../pageLayouts/home/component/service/service"
import WhyChooseUs from '../pageLayouts/home/component/why chosse 7ctech/WhyChooseUs'
import AboutYourProject from "@/pagelayouts/home/component/about your project/AboutYourProject";
import CustomSlider from '@/pagelayouts/home/component/What our client/WhatOurClient';
import LatestBlogs from '@/pagelayouts/home/component/latest from blog/LatestFromBlog';
import Slider from "../pageLayouts/home/component/logo slider/LogoSlider"

// import Navbar from "@/sharedcomponent/navbar/header";
const page = () => {
  return (
    <>
    <Hero/>
    <AboutYourProject/>
    <ServicesSection/>
   <WhyChooseUs/>
   <LatestBlogs/>
   <AboutYourProject/>
    <CustomSlider/>
    <Slider/>
    
    
    </>
  )
}

export default page