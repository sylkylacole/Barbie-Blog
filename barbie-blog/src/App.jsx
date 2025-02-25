import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as JS from './script.js'

function App() {
  return (
    <>
      <div>
        <Landing></Landing>
        <BackToTop></BackToTop>
      </div>
    </>
  )
}

function Landing() {
  return (
    <div>
      <Navigation></Navigation>
      <Home></Home>
      <Inspo></Inspo>
      <Blog></Blog>
      <Subscribe></Subscribe>
      <Contact></Contact>  
    </div>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#inspo">Inspo</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#subscribe">Subscribe</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

function Home() {
  return (
    <section id="home" className="page">
      <h1 className="large-heading">Barbie Blog</h1>
      <h3 className="small-heading">A Barbie Girl's Movie Review Home</h3>
    </section>
  )
}

function Inspo() {
  return (
    <section id="inspo" className="page">
      <h1>Inspo</h1>
      <p>What inspired this project?</p>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="page">
      <h1>Barbie Blog</h1>
      <p>Click to read blog posts!</p>
      <button>Read</button>
    </section>
  )
}

function Subscribe() {
  return (
    <section id="subscribe" className="page">
      <h1>Subscribe</h1>
      <p>Subscribe for email updates!</p>
      <div id="subscribe-form" className="form">
        <input type="email" placeholder="Email"></input>
        <button>Subscribe</button>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="page">
      <h1>Contact</h1>
      <p>Contact form</p>
      <div id="contact-form" className="form">
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </div>
    </section>
  )
}

function BackToTop() {
  return (
    <div>
      <button id="back-to-top">Back to top</button>
    </div>
  )
}

export default App
