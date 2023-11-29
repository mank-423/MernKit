import React from 'react'
import TestPage from './Pages/TestPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TestPage />} />
          </Routes>
        </BrowserRouter>

      </>

    </div>
  )
}

export default App
