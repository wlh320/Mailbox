import React from 'react'
import swal from 'sweetalert'
//如果按了compose，maildetail和maillist这两栏就不出现，变成一个写邮件的地方
const ComposePart = ({ display, handleCompose, validateAddress, validateAdd, validateText, validateT }) => {
  let towhom, subject, mailbody
  return (
    <div className="column is-8" style={{ display: display }}>
      <div className="composepart">
      <h1 className="title"> New Message</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (validateAdd && subject.value) {
          // alert
          handleCompose(towhom.value, mailbody.value, subject.value);
          swal({
            title: "Success",
            text: "",
            type: "success",
            timer: 2000,
            showConfirmButton: false
          });
        } else {
          return
        }
        towhom.value = ''
        mailbody.value = ''
        subject.value = ''
      }}>

        <div className="field">
          <p className="control">
            <label className="label">To</label>
		        <input type='text' ref={(v) => towhom = v} placeholder='address'
              className={validateAdd || validateAdd === null ? 'input' : "input is-danger"}
              onBlur={() => validateAddress(towhom.value)} />
          </p>
        </div>


        <div className="field">
          <p className="control">
            <label className="label">Subject</label>
          <input type='text' ref={(v) => subject = v} placeholder='subject'
              className={validateText || validateText === null ? 'input' : "input is-danger"}
              onBlur={() => validateT(subject.value)} />
          </p>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <p className="control">
            <textarea className="textarea" type='textarea' ref={(v) => mailbody = v} />
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

export default ComposePart
