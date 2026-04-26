import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import SkillsMarquee from './components/SkillsMarquee'
import About        from './components/About'
import Research     from './components/Research'
import Timeline     from './components/Timeline'
import Projects     from './components/Projects'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import Cursor       from './components/Cursor'
import ProjectDetail from './pages/ProjectDetail'

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Research />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
