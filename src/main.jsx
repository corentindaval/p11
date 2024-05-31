import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import Page_erreur from './pages/erreur.jsx'
import Page_info_logement from './pages/infos_logement.jsx'
import Page_a_propos from './pages/a_propos.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/logement/:id" element={<Page_info_logement />} />
                <Route path="/a_propos" element={<Page_a_propos />} />
                <Route path="*" element={<Page_erreur />} />
            </Routes>
        </Router>

       
  </React.StrictMode>,
)


