import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import placeholderImage from './assets/placeholder.jpg'

function App() {
  return (
    <>
      <div>
        <Landing></Landing>
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
      <h1 id="home-heading">Barbie Blog</h1>
      <h3 id="home-subheading">Barbie Movie Reviews</h3>
    </section>
  )
}

function Inspo() {
  return (
    <section id="inspo" className="page">
      <div className="left">
        <h1 className="large-heading">Inspo</h1>
        <h3 className="description-header">What inspired this project?</h3>
        <p className="description">As a passionate media enthusiast, I am always deep diving into content I love! Barbie is one of the brands that have been there with me since I was a kid and as I've gotten older, I've made my way through a lot of Barbie movies! The goal of this blog is to simply share my experience with watching each Barbie movie/show and going into detail about how much I love (or don't love) the characters, scenes, and setting!</p>
      </div>
      <img className="placeholder-image" alt="placeholder image" src={placeholderImage}></img>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="page">
      <div className="left">
        <h1 className="large-heading">Blog</h1>
        <h3 className="description-header">Ready to read?!</h3>
        <p className="description">The blog page is dedicated entirely to different movies, each with their own respective blog post that goes into detail about said movie. To read more about this blog, read the "00: Background" entry.</p>
        <button className="button">Read</button>
      </div>
      <img className="placeholder-image" alt="placeholder image" src
      ={placeholderImage}></img>
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

export default App