import React from 'react'

const SearchBar = ({ searchText, searchMails }) => {
  let searchT
  return (

    <div className="control has-icons-left">
      <input className="input is-small" type='text' ref={input => searchT = input}
        onKeyUp={(e) => {
          // if (e.keyCode === 13) {
          searchMails(searchT.value)
          // }
        }}
        onChange={function () {
          if (searchT.value === '') {
            searchMails('')
          }
        }} placeholder='Search mails' />
      <span className="icon is-small is-left"><i className="fa fa-search"></i></span>
    </div>
  )
}

export default SearchBar
