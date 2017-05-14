import swal from 'sweetalert'
import React from 'react'
import VComposePart from '../containers/composepart'


const MailDetail = ({ mails, selectedEmailID, display, deleteemail, handleCompose }) => {
  // if (selectedEmailID === null) { return <div className="nothing" style={{ display: display }} /> }
  if (selectedEmailID === null) { return <VComposePart showfirst={true} /> }
  const selected = mails[selectedEmailID];
  const deleteable = selected.tag === 'deleted' ? 'none' : 'inline-block'
  let message;
  return (
    <div className="column is-6 maildetail" style={{ display: display }}>
      <div className="mail-header">
        <p className="from" style={{ display: selected.tag === 'sent' ? 'none' : 'inline-block' }}>FROM: {selected.from}</p>
        <p className="address">{selected.address}</p>
        <p className="subject title">{selected.subject}</p>
        <span>{selected.time.split(' ').join(' | ')}</span>
        <i className='fa fa-lg fa-trash trash' style={{ display: deleteable }} title='delete'
          onClick={() => deleteemail(
            mails, selectedEmailID, selected.tag
          )} />
      </div>
      <hr />
        <div className="mail-body" style={{width:'100%', wordWrap: 'break-word'}}>
          <div className="content is-medium" dangerouslySetInnerHTML={{ __html: selected.message }} />
        </div>
      <div className="reply">
        <form onSubmit={(e) => {
          e.preventDefault();
          if (!message.value.trim()) { return; }
          const subject = 'reply:' + selected.subject;
          handleCompose(selected.address, message.value, subject);
          // alert
          swal({
            title: "Success", text: "", type: "success",
            timer: 2000, showConfirmButton: false
          });
          message.value = '';
        }}>
          <br />

          <div className="field">
            <label className="label">REPLY</label>
            <p className="control">
              <textarea className="textarea" type='textarea' ref={v => message = v} />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input className="send button is-primary" type='submit' value='SEND' />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MailDetail
