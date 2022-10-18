import React from "react";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {

  return (
    <Container className="App body" fluid>
      <Row>
        <Navbar />
        <Home />    
      <About />
      <Projects />
        <Skills />
        <Contact />
      </Row>
    </Container>
  );
}

export default App;
