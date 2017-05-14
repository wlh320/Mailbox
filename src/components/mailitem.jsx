import React from 'react'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getprettytime = (time) => {
  const mon_num = time.split('-')[1];
  const mon = MONTHS[mon_num - 1];
  const day_num = time.split(' ')[0].split('-')[2];
  const day = day_num;
  return `${day} ${mon}`;
}

const addFormat = (address) => {
  const len = address.length;
  if (len < 20) { return address } else {
    return address.slice(0, 20) + '...'
  }
}

const MailItem = ({ selectedEmailID, mail, openmail, starmail}) => {
  // const display = mail.read === 'false' ? 'inline-block' : 'none';
  const isread = mail.read === 'false' ? 'unread' : 'read';
  const isstar = mail.star === 'false' ? 'fa fa-lg fa-star-o' : 'fa fa-lg fa-star';
  var activeStyle = selectedEmailID === mail.id ? "panel-block is-active" : "panel-block";
  activeStyle += (' '+isread);
  return (
    <div>
    <a className={activeStyle} onClick={() => openmail(mail.id)}>
      <li>
        <span className="date">{getprettytime(mail.time)}</span>
        <p className="mail-name">{mail.tag === 'sent' ? addFormat(mail.address) : addFormat(mail.from)}</p>
        
        <h4 className="mail-subject">{mail.subject}</h4>
      </li>
      </a>

    <div className="star"><i className={isstar} onClick={() => starmail(mail.id)}></i></div>

    </div>
    );
}

export default MailItem
