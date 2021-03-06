import {connect} from 'react-redux'
import MailDetail from '../components/maildetail'

const mapStateToProps = (state) => {
	return {
		mails: state.mails,
		selectedEmailID: state.selectedEmailID,
		display: state.composeORnot ? 'none':'block'
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleCompose: (address,message,subject) => {dispatch({
			type:'COMPOSE',
			from: 'Chen Yisha',
			address:address,
			time: timeFormat(new Date()),
			message:message,
			subject: subject,
			tag:'sent',
			read:true
		})},
		deleteemail: (mails,id,origTag)=> {dispatch({type: 'MOVE_MAIL',mails,id,origTag,tag:'deleted'})}
	}
}

const VMailDetail = connect(mapStateToProps,mapDispatchToProps)(MailDetail)

export default VMailDetail

function timeFormat(time){
	const timepart = time.toTimeString().split(' ')[0]
	const datepart = time.toLocaleDateString().split('/').join('-')

	return `${datepart} ${timepart}`
}
