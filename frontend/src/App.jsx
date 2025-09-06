import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import Authentication from "./pages/Authentication"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  

  return (
    <>
      <Router>
        {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
        {/* </AuthProvider> */}
      </Router>
    </>
  )
}

export default App
