import React from 'react'


const Message = ({ author, content }) => (
    <div >
     
      <div className="content">{content}</div>
      <div className="author">{author}</div>
    </div>
  );

  export default Message