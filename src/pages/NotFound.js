import React from 'react';
import logo from '../images/404svg.svg';
import './styles/NotFound.css';

function NotFound() {
  return(
    <div className="container_NotFound">
      <img className="NotFound_image" src={logo}/>
    </div>
  )
}
export default NotFound;