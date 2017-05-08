import React from 'react'
import logo from '../logo.svg';
import avatar from '../../public/avatar.jpg'


const Titlebar = () => (
  <nav className='nav has-shadow'>
    <div className='nav-left'>
      <div className='nav-item'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title is-4">Mailbox</h1>
      </div>
    </div>
    <div className='nav-right'>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className='nav-item'>
        <span>Wlh</span>
      </div>
    </div>
  </nav>)

export default Titlebar
