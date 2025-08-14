import react from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects"
import MouseScroll from "./components/MouseScroll";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import "./App.css"

export default function App(){
  return(
    <>
      <Header />
      <Hero />
      <MouseScroll />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}