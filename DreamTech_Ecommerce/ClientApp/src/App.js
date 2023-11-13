import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRender from "./customRouter/PageRender";
import Home from "./pages/home";
export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div className="main">
        <Header />
        <div className="main_container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:page" element={<PageRender />} />
            <Route path="/:page/:sub_page" element={<PageRender />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}
