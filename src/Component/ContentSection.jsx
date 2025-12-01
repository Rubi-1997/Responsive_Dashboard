import React from 'react'
import SideBar from './SideBar'
import MainSection from './MainSection'


const ContentSection = () => {
  return (
    <div className="row">
        <div className="col-auto col-md-2">
          
          <SideBar/>
        </div>
        {/* <div className='col-auto col-md-10'>
            <MainSection/>
        </div> */}
       
      </div>
  )
}

export default ContentSection