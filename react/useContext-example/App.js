import React, { useRef, useEffect } from "react";
import ThemeContext from "./themeContext";
import Toolbar from "./Toolbar";

const App = () => {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default App;
