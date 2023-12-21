
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRender from "./customRouter/PageRender";
import Home from "./pages/home";
import ModalAuth from "./components/auth";
import ModalLogout from './components/ModalLogout';
import Alert from "./components/Alert";
import AccountPage from "./pages/account";
import Addresses from "./pages/account/address";
import OrdersHistory from "./pages/account/orders_history";

export default function App() {
  const modalAuth = useSelector(state => state.modalAuth);
  const modalLogout = useSelector(state => state.modalLogout);

  return (
    <div className="main">
      {modalAuth && <ModalAuth />}
      {modalLogout && <ModalLogout />}
      <Header />
      <Alert />
      <div className="main_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:sub_page" element={<PageRender />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/addresses" element={<Addresses />} />
          <Route path="/account/orders-history" element={<OrdersHistory />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );

}
