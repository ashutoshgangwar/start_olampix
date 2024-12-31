// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
// import Homepage from "./Homepage";
// import Product from "./Produtcts";
// import Card from "./Card";
// import Accordion from "./Accordion";
// import Footer from "./Footer";
// import Query from "./Query";
// import Project from "./Project";




function App() {
  return (
    <>
      <Navbar
        title="Ashutosh Gangwar"
        Hometext="Home"
        Abouttext="About"
        Servicetext="Experience"
        Querrytext="Query"
        Producttext="Product"
      />
      {/* <section id="Homepage">
        <Homepage />
      </section>
      <section id="Product">
        <Product />
      </section>
      <section id="Accordion">
        <Accordion />
      </section>
      <section id="Card">
        <Card />
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
