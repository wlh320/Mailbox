import { connect } from 'react-redux'
import ComposePart from '../components/composepart'

function timeFormat(time) {
  const timepart = time.toTimeString().split(' ')[0]
  const datepart = time.toLocaleDateString().split('/').join('-')

  return `${datepart} ${timepart}`
}

const mapStateToProps = (state) => {
  return {
    display: state.composeORnot ? 'block' : 'none',
    validateAdd: state.validateAdd,
    validateText: state.validateText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCompose: (address, message, subject) => {
      dispatch({
        type: 'COMPOSE',
        from: 'tj',
        address: address,
        time: timeFormat(new Date()),
        message: message,
        subject: subject,
        tag: 'sent',
        read: true,
        star: 'false'
      })
    },
    validateAddress: (value) => {
      dispatch({
        type: 'VALIDATE',
        value: value
      })
    },
    validateT: (text) => {
      dispatch({
        type: 'VALIDATE_TEXT',
        value: text
      })
    }
  }
}

const VComposePart = connect(mapStateToProps, mapDispatchToProps)(ComposePart)

export default VComposePart
