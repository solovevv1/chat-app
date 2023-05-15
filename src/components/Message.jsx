import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://media.istockphoto.com/id/1281998322/photo/portrait-of-young-angry-woman.jpg?s=170667a&w=0&k=20&c=-JscNJC-sc_F9HTHhON9WmBeXYpghz9rHadYcEC13T4=" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://media.istockphoto.com/id/1281998322/photo/portrait-of-young-angry-woman.jpg?s=170667a&w=0&k=20&c=-JscNJC-sc_F9HTHhON9WmBeXYpghz9rHadYcEC13T4=" alt="" />
      </div>
    </div>
  )
}

export default Message