import React from 'react'
import Logout from '../Logout'
const Header = ({setAdding,setIsAuthenticated}) => {
  return (
    <div style={{
      textAlign:"center"
    }} >
      <h4 style={{
        textAlign:"center",
        margin:"20px 0"
      }}>Employee Management Software</h4>
      <button onClick={()=>setAdding(true)}
      style={{
        backgroundColor:"rgb(20, 83, 220)",
        padding:"7px 15px",
        border:"none",
        borderRadius:"5px",
        color:"white"
      }} >Add Employee</button>
    <Logout setIsAuthenticated={setIsAuthenticated}/>
    </div>
  )
}

export default Header
