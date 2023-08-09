import "./App.css";
import { Row, Col } from "antd";
import TextButton from "./components/TextButton";
import VoiceButton from "./components/VoiceButton";
import ChatWidget from "./chatbot/ChatWidget";

function App() {
  return (
    <div className="App">
      <Row gutter={16}>
        <Col span={4}>

          <VoiceButton />
         
        </Col>
        <Col span={4}>
          <TextButton />
        </Col>
      </Row>
    </div>
  );
}

export default App;
