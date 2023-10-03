import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='--center-all' style={{minHeight: "80vh"}}>
      <h2>Page Not Found</h2>
      <p>looks like the page you are looking for could not be found.</p>
      <br />
      <Link to="/">
        <button className='--btn --btn-primary' style={{marginTop:"20px"}}>Back to Home</button>
      </Link>
    </div>
  )
}

export default NotFound