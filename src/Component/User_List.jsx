import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {  useParams } from "react-router-dom";
import Status_button from "./Status_button";

const User_List = ({ setid,setdetailData }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [sort, setSort] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  const handleFilter = (ele) => {
    console.log(ele);
    const newSearchData = data.filter((item) => item.name == ele);
    setFilterData(newSearchData);
  };

 
  const handleSortByName = () => {
    // accending
    if (!sort) {
      const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedData);
    }

    // decending
    else {
      const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
      setData(sortedData);
    }

    setSort(!sort);
  };

  const handleSortByEmail = () => {
    // accending
    if (!sort) {
      const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setData(sortedData);
    }

    // decending
    else {
      const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
      setData(sortedData);
    }

    setSort(!sort);
  };

   const handleDetail = (ele) => {
  
    navigate("/User_Detail")
    setid(ele.id)
    setdetailData(data)
  };

  console.log(data);

  console.log(filterData);

  return (
    <div className="container" style={{ width: "100%"}}>
      <div className="row d-flex justify-content-between min-vh-100">
        <div className="mt-2">
          <form className="d-flex" role="search" style={{ height: "6vh" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                handleFilter(e.target.value);
                setSearchTerm(e.target.value);
              }}
            />
           
          </form>
        </div>
        <div className="">
          <table className="table table-hover caption-top  border">
            <caption>List of users</caption>
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">
                  name
                  <i class="bi bi-arrow-down-up" onClick={handleSortByName}></i>
                </th>
                <th scope="col">
                  email
                  <i
                    class="bi bi-arrow-down-up"
                    onClick={handleSortByEmail}
                  ></i>
                </th>
                <th scope="d-flex col"><Status_button/></th>
              </tr>
            </thead>
            <tbody>
              {filterData == ""
                ? data.map((row, index) => (
                    <tr key={index}  onClick={()=>handleDetail(row)}>
                      <td className="text-justify">{row.id}</td>
                      <td
                        className="text-justify"
                       
                      >
                        {row.name}
                      </td>

                      <td className="text-justify">{row.email}</td>
                      <td className="text-justify">Active</td>
                    </tr>
                  ))
                : filterData.map((row, index) => (
                    <tr key={index}>
                      <td className="text-justify">{row.id}</td>
                      <td className="text-justify">{row.name}</td>

                      <td className="text-justify">{row.email}</td>
                      <td className="text-justify">Active</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation d-flex example justify-content-center align-item-center">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div></div>
    </div>
  );
};

export default User_List;
