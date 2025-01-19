import React from 'react'
import WhatIs7ctech from "../../pageLayouts/about/Component/what is 7ctech/Whatis7ctect"
import WeAre7ctech from"@/pagelayouts/about/Component/We are 7ctech/WeAre7ctech"
import OurBestService from '@/pagelayouts/about/Component/Our best service/OurBestService'
import AboutYourProject from '@/pagelayouts/home/component/about your project/AboutYourProject'
import OurCoreValues from '@/pagelayouts/about/Component/Our core values/OurCorsValue'
import ConnectWithTeam from '@/pagelayouts/about/Component/Connect Our Team/ConnectOurTeam'
import Map from '@/pagelayouts/about/Component/Map/Map'

const page = () => {
  return (
  <>
  <WeAre7ctech/>
 <WhatIs7ctech/>
  <OurBestService/>
  <AboutYourProject/>
  <OurCoreValues/>
  <ConnectWithTeam/>
  <Map/>
  </>
  )
}

export default page