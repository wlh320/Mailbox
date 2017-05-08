import React from 'react'

const Sidebar = ({ currentSection, unreadcount, trashcount, sentcount, handleCategory, turncompose }) => {
  return (
    <div className="menu column is-2">

      <ul className="menu-list">
        <a onClick={turncompose} className="button compose is-warning">
          <i className="fa fa-pencil-square-o" />COMPOSE</a>
        <li onClick={() => handleCategory('inbox')}>
          <a className={currentSection === 'inbox' ? "is-active" : ""}>
            <i className='fa fa-envelope-open-o' />
            <span>INBOX</span><span className="tag is-info">{unreadcount}</span>
          </a>
        </li>
        <li onClick={() => handleCategory('sent')}>
          <a className={currentSection === 'sent' ? "is-active" : ""}>
            <i className='fa fa-paper-plane-o' />
            <span>SENT</span><span className="tag is-info">{sentcount}</span>
          </a>
        </li>
        <li onClick={() => handleCategory('deleted')}>
          <a className={currentSection === 'deleted' ? "is-active" : ""}>
            <i className='fa fa-trash-o' />
            <span>TRASH</span><span className="tag is-info">{trashcount}</span>
          </a>
        </li>
        <li onClick={() => handleCategory('spam')}>
          <a className={currentSection === 'spam' ? "is-active" : ""}>
            <i className='fa fa-dot-circle-o' />
            <span>SPAM</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
