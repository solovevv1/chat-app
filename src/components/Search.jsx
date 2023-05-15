import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm" >
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="https://media.istockphoto.com/id/1281998322/photo/portrait-of-young-angry-woman.jpg?s=170667a&w=0&k=20&c=-JscNJC-sc_F9HTHhON9WmBeXYpghz9rHadYcEC13T4=" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search