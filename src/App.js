import React from "react";
import HomePage from "./components/home/HomePage";
import Home from "./components/New Home/Home";
import DesignCard from "./components/Design card/DesignCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main className="App">
      <Navbar />
      <DesignCard />
      {/*<Home />*/}
      {/*<HomePage />*/}
    </main>
  );
}

export default App;
