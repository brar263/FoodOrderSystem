import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home, About, Products} from './Pages/index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<About />} />
      <Route path='/produts' element={<Products />} />
     </Routes>
     </Router>
    </>
  )
}

export default App
