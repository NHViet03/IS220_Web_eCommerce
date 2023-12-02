import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import PageRender from "./customRouter/PageRender";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar showSideBar={showSideBar} />
        <div
          className="main_container"
          style={{
            marginLeft: showSideBar ? "250px" : "0",
          }}
        >
          <Header setShowSideBar={setShowSideBar} />
          <div
            style={{
              flex: 1,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:page" element={<PageRender />} />
              <Route path="/:page/:id" element={<PageRender />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
