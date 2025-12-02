import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="">
      
        <div className="col-auto bg-dark d-flex flex-column justify-content-between min-vh-100">
          <div>
            <a className="text-decoration-none ms-4 mt-2 d-flex align-items-center text-white d-none d-sm-inline">
              <span className="fs-4 d-none d-sm-inline ms-1">Side menu</span>
            </a>
            <hr className="d-none text-white d-sm-block"></hr>
            <ul className="nav flex-column px-2">
              
              <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
                <Link to="/users" className="nav-link text-white active" href="#" aria-current="page">
                  <i className="bi bi-people-fill "></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Users List Page
                  </span>
                </Link>
              </li>
              {/* <li className="nav-item  fs-5 my-1 py-2 py-sm-0">
                <Link to='/User_Detail' className="nav-link text-white" href="#">
                  <i className="bi bi-zoom-in"></i>
                  <span className="ms-3 d-none d-sm-inline">Detail Page</span>
                </Link>
              </li> */}
              <li className="nav-item fs-5 my-1  py-2 py-sm-0">
                <Link to='/overview' className="nav-link text-white" href="#">
                <i class="bi bi-bar-chart-line"></i>
                  <span className="ms-3 d-none d-sm-inline">
                 Overview Page
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown open">
            <a
              className="btn border-none dropdown-toggle text-white"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fs-4 ms-3">
                <i className="bi bi-person"></i><span className="ms-2 d-none d-sm-inline">User</span>
              </span>
            </a>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <a className="dropdown-item" href="#">
                profile
              </a>
              <a className="dropdown-item disabled" href="#">
                setting
              </a>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default SideBar