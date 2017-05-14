import React from 'react'
import avatar from '../../public/avatar.jpg'


const Titlebar = () => (
  <nav className='nav has-shadow'>
    <div className='nav-left'>
      <div className='nav-item'>
        <h1 className="title logo" style={{color:'white'}}>Coact Mail</h1>
      </div>
    </div>
    <div className='nav-right'>
      <div className="avatar">
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
      <div className='nav-item'>
        <span>Group 2</span>
      </div>
    </div>
  </nav>)

export default Titlebar
