import { useState } from 'react'
import { Navbar } from './compontents/Navbar/Navbar'
import Intro from './compontents/Intro/Intro'
import Skill from './compontents/Skill/Skill'
import Education from './compontents/Education/Education'
import Projects from './compontents/Projects/Projects'
import Contact from './compontents/Contact/Contact'
import Footer from './compontents/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
          </>
  )
}

export default App
