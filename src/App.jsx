import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Components/Home.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Videos from './Components/Videos.jsx'
import Members from './Components/Members.jsx'

function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home page at the root path */}
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/members" element={<Members />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
