import React from 'react'
import User_List from './User_List'
import User_Detail from './User_Detail'
import Overview from './Overview'

const MainSection = () => {
  return (
    <div><User_List/>
    <User_Detail/>
    <Overview/>
    </div>
  )
}

export default MainSection