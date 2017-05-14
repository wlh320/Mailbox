import React from 'react'
import swal from 'sweetalert'
//如果按了compose，maildetail和maillist这两栏就不出现，变成一个写邮件的地方
const ComposePart = ({ display, handleCompose, validateAddress, validateAdd, validateText, validateT, showfirst }) => {
  let towhom, subject, mailbody, show
  if (showfirst === true) {
    show = (display === 'block' ? 'none' : 'block');
  } else {
    show = display;
  }
  return (
    <div className="column auto" style={{ display: show }}>
      <div className="composepart">
        <h1 className="title subject"> New Message</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (!validateAdd) {
            swal({
              title: "Invalid email address!",
              text: "",
              type: "error",
              timer: 2000,
              showConfirmButton: false
            });
          } else if (validateAdd && subject.value) {
            handleCompose(towhom.value, mailbody.value, subject.value);
            swal({
              title: "Success",
              text: "sent success.",
              type: "success",
              timer: 1000,
              showConfirmButton: false
            });
          } else {
            swal({
              title: "No subject, send anyway?",
              text: "",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Yes,send",
              closeOnConfirm: false
            }, ()=> {
              handleCompose(towhom.value, mailbody.value, "No subject");
              swal({
              title: "Success",
              text: "sent success.",
              type: "success",
              timer: 1000,
              showConfirmButton: false
            });
            });
          }
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
                className={validateText || validateText === null ? 'input' : "input is-warning"}
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
