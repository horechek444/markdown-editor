import React from "react";
import TextField from "../TextField/TextField";
import PreviewField from "../PreviewField/PreviewField";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = React.useState("# Заголовок");

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  }

  return (
    <div className="app">
      <TextField markdown={markdown} handleChange={handleChange}/>

      <PreviewField markdown={markdown} />
    </div>
  );
};

export default App;