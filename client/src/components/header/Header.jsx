import React from 'react'
import './header.css'
import headerImage from  '../../images/3-Living Room_Back to Nature S340-4.jpeg'
const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src={headerImage} alt="" className="headerImg" />
    </div>
  )
}

export default Header