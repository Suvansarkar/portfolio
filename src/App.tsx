import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Background />
      <div className='flex flex-col max-w-7xl mx-auto w-fit'>
        <Hero />
        <Technologies />
        <Projects />
        <Footer />
      </div >

    </>
  )
}

export default App
