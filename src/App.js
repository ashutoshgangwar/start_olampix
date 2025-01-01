// App.js
import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Community from "./Community";
// import Product from "./Produtcts";
import Blogs from "./Blogs";
import Gallery from "./Gallery";
import Footer from "./Footer";
// import Accordion from "./Accordion";
// 
// import Query from "./Query";
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

      {/* <section id="Query">
        <Query />
      </section>
      <section id="Footer">
        <Footer />
      </section> */} 
    </>
  );
}

export default App;
