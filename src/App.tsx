import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { items as menuItems } from "./menu.js";

import { Menu } from "./components/Menu";

import "./styles.css";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [containerElement, setContainerElement] = useState(null);
  const containerRef = useRef();

  useEffect(() => {
    setContainerElement(containerRef.current);
  }, []);

  return (
    <>
      <div className="App" id="app" ref={containerRef}>
        <h1>Background menu</h1>
        <h2>Just click following button :)</h2>
        <button
          className="menuButton"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          Open menu
        </button>
      </div>
      <Menu
        items={menuItems}
        containerElement={containerElement}
        open={menuOpened}
      />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
