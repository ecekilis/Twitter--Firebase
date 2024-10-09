import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Protected from './components/Protected'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/setting" element={"ayarlar"} />
          <Route path="/profile" element={"profil"} />
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
