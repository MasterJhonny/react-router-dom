import { useState, Fragment } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'

// import components
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Users } from './pages/Users'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { Login } from './pages/Login'
import { Dasbhoard } from './pages/Dasbhoard';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={auth ? <Home/> : <Navigate to='/login'/>}/>
        <Route path="/login" element={<Login setAuth={setAuth}/>} />
        <Route path="/about/*" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<User/>}/>

        <Route path="/dasbhoard/*" element={<Dasbhoard/>}>
          <Route path="welcome" element={<h3>Welcome !!</h3>}/>
          <Route path="bye" element={<h3>bye !!</h3>}/>
        </Route>

        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
