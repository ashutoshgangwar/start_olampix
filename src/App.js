// App.js
import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Community from "./components/Community";
// import Product from "./Produtcts";
import Blogs from "./components/Blogs";
import Gallery from "./components/Gallery";
import Query from "./components/Query";
import Footer from "./components/Footer";
// import Accordion from "./Accordion";
// 
// 
// import Project from "./Project";




function App() {
  return (
    <>
      <Navbar
        title="OlamPix"
        Hometext="Home"
        Abouttext="About"
        Servicetext="Experience"
        Querrytext="Query"
        Producttext="Product"
      />
       <section id="Homepage">
        <Homepage />
      </section>
      <section id="Blogs">
        <Blogs />
      </section>
      <section id="Gallery">
        <Gallery />
      </section>
      <section id="Community">
        <Community />
      </section>
      <section id="Query">
        <Query />
      </section>
      <section id="Footer">
        <Footer />
      </section>

      {/*<section id="Product">
        <Product />
      </section>
      <section id="Accordion">
        <Accordion />
      </section>
     
       {/* <section id="Project">
        <Project/>
      </section>  */}

      {/* 
      <section id="Footer">
        <Footer />
      </section> */} 
    </>
  );
}

export default App;
