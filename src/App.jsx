import react from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects"
import MouseScroll from "./components/MouseScroll";
import "./App.css"

export default function App(){
  return(
    <>
      <Header />
      <Hero />
      <MouseScroll />
      <AboutMe />
      <Projects />
    </>
  )
}