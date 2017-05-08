import React from 'react'
import MailItem from './mailitem'
import VSearchBar from '../containers/searchbar'
import QueueAnim from 'rc-queue-anim'

const MailList = ({ searchText, selectedEmailID, showunread, display, mails, currentSection, turnunread, openmail }) => {
  const displayMail = mails.filter(mail => mail.tag === currentSection);
  const displayMails = displayMail.filter(mail => mail.from.includes(searchText)
    || mail.address.includes(searchText)
    || mail.message.includes(searchText)
    || mail.subject.includes(searchText));

  return (
    <div className="column is-3" style={{ display: display }}>
      <nav className="panel maillist">
        <div className="panel-block">
          <VSearchBar />
        </div>
        <div className="panel-tabs is-centered">
          <a onClick={() => turnunread(false)} className={showunread ? "" : "is-active"}>All</a>
          <a onClick={() => turnunread(true)} className={showunread ? "is-active" : ""}>Unread</a>
        </div>
        <ul>
          <QueueAnim duration={250} interval={0}>
            {displayMails.map(mail => <div key={mail.id}><MailItem openmail={openmail} selectedEmailID={selectedEmailID} mail={mail} /></div>)}
          </QueueAnim>
        </ul>


      </nav>
    </div>);
}

export default MailList
