import React from "react";
import { Header } from "./Header";
import SideBar from "./SideBar";

const Index = ({ children }) => {
  return (
    <main className="layout__section">
      <section className="layout__section--div">
        {/* SideBar */}
        <div className="layout__side">
          <SideBar />
        </div>
        {/* Header */}
        <div className="layout__mainbody">
          <Header />
          {/* Main Children */}
          {/* <section className="layout__main--section">{children}</section> */}
        </div>
      </section>
    </main>
  );
};

export default Index;
