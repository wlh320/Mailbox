import React from 'react'

const Sidebar = ({ currentSection, unreadcount, trashcount, sentcount, starcount,handleCategory, turncompose }) => {
  return (
    <div className="menu column is-2 sidebar" style={{height:window.innerHeight}}>

      <ul className="menu-list">
        <a onClick={turncompose} className="compose is-warning">
          <i className="fa fa-pencil-square-o" />COMPOSE</a>
        <li onClick={() => handleCategory('inbox')}>
          <a className={currentSection === 'inbox' ? "is-active" : ""}>
            <span><i className='fa fa-envelope-open-o' /></span>
            <span>INBOX</span><span className="tag is-info">{unreadcount}</span>
          </a>
        </li>
        <li onClick={() => handleCategory('sent')}>
          <a className={currentSection === 'sent' ? "is-active" : ""}>
            <span><i className='fa fa-paper-plane-o' /></span>
            <span>SENT</span><span className="tag is-info">{sentcount}</span>
          </a>
        </li>
        <li onClick={() => handleCategory('deleted')}>
          <a className={currentSection === 'deleted' ? "is-active" : ""}>
            <span><i className='fa fa-trash-o' /></span>
            <span>TRASH</span><span className="tag is-info">{trashcount}</span>
          </a>
        </li>
        <li onClick={() => handleCategory('star')}>
          <a className={currentSection === 'star' ? "is-active" : ""}>
            <span><i className='fa fa-star-o' /></span>
            <span>STAR</span><span className="tag is-info">{starcount}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
