import React, { Component } from 'react'
import Titlebar from './titlebar'
import VSidebar from '../containers/sidebar'
import VMaillist from '../containers/maillist'
import VMailDetail from '../containers/maildetail'
import VComposePart from '../containers/composepart'


class Mailbox extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <div className="columns">
          <VSidebar />
          <VMaillist />
          <VComposePart showfirst={false} />
          <VMailDetail />
        </div>
      </div>)
  }
}

export default Mailbox
