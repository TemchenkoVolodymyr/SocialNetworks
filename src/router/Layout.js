import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/Header/HeaderContainer";
import NavBar from "../components/Nav/NavBar";
import s from './Layout.module.scss'

const Layout = () => {


  return (
    <>
      <header className={s.header}>
        <HeaderComponent/>
      </header>
      <section id={'mainContent'} className={s.containerTopLayout}>
        <nav className={s.containerNav}>
          <NavBar/>
        </nav>
        <main className={s.containerMain}>
          <Outlet/>
        </main>
        <section className={s.containerSideBar}>
          <div style={{background:"red"}}></div>
        </section>
      </section>
    </>
  );
};

export default Layout;