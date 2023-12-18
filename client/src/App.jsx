import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router'

import {
    LoginPage,
    RegisterPage,
    SplashScreen
} from "./pages"

function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<SplashScreen/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Routes>
        </Router>
    )
}

export default App
