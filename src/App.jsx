import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css'
import User_List from "./Component/User_List";
import User_Detail from "./Component/User_Detail";
import Overview from "./Component/Overview";
import ContentSection from "./Component/ContentSection";
import SideBar from "./Component/SideBar";
import { useState } from "react";


function App() {
  const [id,setid]=useState()
  const [detailData,setdetailData]=useState([])

  return (
    <>
    <div className="d-flex">
       <Router>
        
        
       <SideBar/>
        
       
        <Routes>
          <Route path="/users" element={<User_List setid={setid} setdetailData={setdetailData}/>}>User List</Route>
          <Route path="/User_Detail" element={<User_Detail id={id} detailData={detailData}/>}>User Detail</Route>
          <Route path="/analytics" element={<Overview/>}>Overview</Route>
          
        </Routes>
      </Router>
    </div>
      
    </>
  )
}

export default App
