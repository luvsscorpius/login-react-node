import Form from "./components/Form/Form";
import * as C from './components/Form/Styles'
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <C.App theme={theme}>
      <Form theme={theme} />
    </C.App>
  );
}

export default App;
