import React from 'react'

const Status_button = () => {
  return (
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    status
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Active</a></li>
    <li><a className="dropdown-item" href="#">Inactive</a></li>
    
  </ul>
</div>
  )
}

export default Status_button