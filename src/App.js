import React from "react";
import Nav from "./components/molecules/Navbar/Navbar";
import Footer from "./components/molecules/Footer/Footer";
import Home from "./pages/home";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
