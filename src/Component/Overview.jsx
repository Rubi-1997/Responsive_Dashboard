import React from 'react'

import SimpleBarChart from './SimpleBarCharts'
import UserActiveChart from './UserActiveChart'


const Overview = () => {
  return (
    <>
    
    
    <div className=' d-flex  align-items-center'>
      
<div className="container-fluid d-flex align-items-center flex-wrap   m-4">
       <SimpleBarChart/>
       <UserActiveChart/>
        

      
    </div>
    </div>
    </>
    
  )
}

export default Overview