
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Student from './pages/Student'
import Teachers from './pages/Teachers'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <header className='border bg-black text-white flex justify-center p-5'>
      <nav className='flex gap-5'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Student">Student</Link>
        <Link to="/Teachers">Teachers</Link>

      </nav>
    </header>
     <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/About"element={<About/>} />
      <Route path="/Student"element={<Student/>} />
      <Route path="/Teachers"element={<Teachers/>} />
     </Routes>
     <footer></footer>
    </>
  )
}

export default App
