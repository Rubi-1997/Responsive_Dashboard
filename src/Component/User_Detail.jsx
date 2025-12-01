import React, { useState } from 'react'

const User_Detail = ({id,detailData}) => {
 
  const newDetaildata=detailData.filter((ele)=>id==ele.id)
console.log(newDetaildata)
  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="row d-flex min-vh-100">
       
        <div className="  mt-4">
          <h5 className='text-center p-4'>User Detail</h5>
          {
            newDetaildata.map((ele)=>
            
               <ul class="list-group">
  <li class="list-group-item d-flex"><p className='fw-bold '>ID:</p><p className=''>{ele.id}</p></li>
  <li class="list-group-item d-flex"><p className='fw-bold '>Name:</p><p className=''>{ele.name}</p></li>
  <li class="list-group-item d-flex"><p className='fw-bold '>Email:</p><p className=''>{ele.email}</p></li>
  <li class="list-group-item d-flex"><p className='fw-bold '>Company:</p><p className=''>{ele.company.name}</p></li>
  <li class="list-group-item d-flex"><p className='fw-bold '>Address:</p><p className=''>{ele.address.city}, {ele.address.street},{ele.address.suite},{ele.address.zipcode}</p></li>
</ul>
              
              
            )
          }
        </div>
        
      </div>

      <div></div>
    </div>
  )
}

export default User_Detail