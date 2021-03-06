import Sidebar from '../components/sidebar'
import {connect} from 'react-redux'

function countunread(mails){
	const unread = mails.filter(mail => mail.tag === 'inbox' && mail.read === 'false');
	return unread.length;
}
function counttrash(mails){
	const trash = mails.filter(mail => mail.tag === 'deleted');
	return trash.length
}
function countsent(mails){
	const sent = mails.filter(mail => mail.tag === 'sent')
	return sent.length
}

function countstar(mails){
	const star = mails.filter(mail => mail.star === 'true');
	return star.length
}

const mapStateToProps = (state) => {
	return {
		currentSection: state.currentSection,
		unreadcount: countunread(state.mails),
		trashcount: counttrash(state.mails),
		sentcount: countsent(state.mails),
		starcount: countstar(state.mails)
	}
}

const mapDispatchToProps = (dispatch,ownProps) =>{
	return {
		turncompose: () => {
			dispatch({type: 'TURN_COMPOSE'})
		},
		handleCategory: (tag) =>{
			dispatch({type: 'SELECT_TAG', tag: tag})
		}
	}
}

const VSidebar = connect(mapStateToProps,mapDispatchToProps)(Sidebar)
export default VSidebar


