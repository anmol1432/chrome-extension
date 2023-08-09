import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
if (!document.getElementById('ChatBoxLumino')) {
  const tempDiv = document.createElement("div");
  tempDiv.setAttribute('id', 'ChatBoxLumino')
  window.document.body.insertAdjacentElement("beforeend", tempDiv);
  const domNode = document.getElementById('ChatBoxLumino');
  const root = ReactDOM.createRoot(domNode);
  root.render(
    <React.StrictMode>
      <App style={{ border: "solid red" }} />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

