import React from 'react';
import marked from "marked";
import './App.css';

const App = () => {
  const [markDown, setMarkDown] = React.useState("#sup");

  const handleChange = (event) => {
    setMarkDown(event.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markDown} />

      <div className="preview">{marked(markDown)}</div>
    </div>
  );
};

export default App;
