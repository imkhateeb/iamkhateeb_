import './App.css';

import { About, Footer, Education, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components';


const App = () => {

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-black shadow-2xl'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Education />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default App
