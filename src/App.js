import React from 'react'
import LandingPage from './components/LandingPage.js'
import './assets/landingPage.css'
import SignIn from './components/signin/SignIn.js'
import './components/signin/signin.css'
import { Route, Router, Routes } from 'react-router-dom'
import SignUp from './components/Signup/SignUp.js'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />,
            <Route path="/signin" element={<SignIn />} />,
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default App