import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio'
import AcercaDe from './AcercaDe'
import VideoJuegos from './VideoJuegos'
import Footer from './Footer'

function App() {

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link to='/' className='nav-link'>Inicio</Link>
              <Link to='/about' className='nav-link'>Acerca de</Link>
              <Link to='/videoJuegos' className='nav-link'>VideoJuegos</Link>
            </ul>
          </div>
        </nav>
        <Routes>
            <Route path="/videoJuegos" element={<VideoJuegos/>}/>
        </Routes>
        <Routes>
            <Route path="/about" element={<AcercaDe/>}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
