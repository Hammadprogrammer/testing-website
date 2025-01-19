import React from 'react'
import Ourservice from '@/pagelayouts/service/OurService'
import CardPage from '@/pagelayouts/service/Component/Card our service/CardOurService'
import OurBestService from '@/pagelayouts/about/Component/Our best service/OurBestService'
import AboutYourProject from '@/pagelayouts/home/component/about your project/AboutYourProject'
import BasicTabs from '@/pagelayouts/service/Component/Thing we can/ThingWeCan'


const page = () => {
  return (
   <>
   <Ourservice/>
   <CardPage/>
   <OurBestService/>
   <AboutYourProject/>
   <BasicTabs/>
   </>
  )
}

export default page