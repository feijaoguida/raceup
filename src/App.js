import React from "react";

import Header from "./components/header";
import Game from "./pages/Game";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
