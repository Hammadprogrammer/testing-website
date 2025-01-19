import React from 'react'
import OutSourceHeader from "@/pageLayouts/out source/Component/OutSource Header/OutSourceHeader"
import Offering from "@/pageLayouts/out source/Component/7CTECH OFFERING FOLLOWING/7ctechOffering"
import ComparisonTable from "@/pageLayouts/out source/Component/DEDICATED TEAMS/DedicatedTeam"
import Table from "../../pageLayouts/out source/Component/Table Theory/Table"
const page = () => { 
  return (
   <>
   <OutSourceHeader/>
   <Offering/>
   <ComparisonTable/>
   <Table/>

   
   </>
  )
}

export default page