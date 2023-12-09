import Form from "./components/Form/Form";
import * as C from './components/Form/Styles'
import React, { useState } from "react";
import ReactSwicth from 'react-switch'

function App() {
  const [theme, setTheme] = useState("light")

  const handleToggleTheme = () => {
    setTheme(curr => (curr === "light" ? "dark" : "light"))
  }

  return (
    <C.App theme={theme}>
      <Form theme={theme} />
      <br />
      <ReactSwicth checked={theme === "dark"} onChange={handleToggleTheme} />
    </C.App>
  );
}

export default App;
