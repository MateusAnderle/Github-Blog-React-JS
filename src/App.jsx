import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { DataContextProvider } from './context/DataContext'

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <Router />
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
