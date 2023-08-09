import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";

const MessageInput = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSendMessage("user", input);
      setInput("");
    }
  };

  return (
    <div className="message-input">
       <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{height: "3rem"}}
      />
      {/* <Button type="primary" htmlType="submit">
        Send
      </Button> */}
    </form>
    </div>
  );
};

export default MessageInput;
