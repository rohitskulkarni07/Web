import React, { useContext } from "react";
import ThemeContext from "./themeContext";

const Toolbar = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black"
      }}
    >
      TOOLBAR COMPONENT HERE
    </div>
  );
};

export default Toolbar;
