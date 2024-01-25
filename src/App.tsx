import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import NavItem from './navItem'
import Home from './home'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
