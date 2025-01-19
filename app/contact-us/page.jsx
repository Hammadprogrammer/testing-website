import React from 'react'
import ContactHeader from '../../pageLayouts/contact-us/Component/Contact Header/ContactHeader'
import Mapfrom from "../../pageLayouts/contact-us/Component/map and form/MapFrom"
import SevenCtech from "../../pageLayouts/contact-us/Component/SevenCtech/SevenCtech"
import BusinessSolution from "../../pageLayouts/contact-us/Component/7ctect best bussniess solution/BusinessSolution"
import ConnectWithTeam from '@/pagelayouts/about/Component/Connect Our Team/ConnectOurTeam'
import OpenVacancies from "../../pageLayouts/contact-us/Component/Open  Vacancies/OpenVacancies"
import AboutYourProject from '@/pagelayouts/home/component/about your project/AboutYourProject'
import NeedHelp from "../../pageLayouts/contact-us/Component/Need Help/NeedHelp"


const page = () => {
  return (
    <div>
      <ContactHeader/>
      <Mapfrom/>
      <SevenCtech/>
      <BusinessSolution/>
      <ConnectWithTeam/>
      <OpenVacancies/>
      <AboutYourProject/>
      <NeedHelp/>
      
    </div>
  )
}

export default page
