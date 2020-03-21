// library imports
import React from 'react'
// component imports
import AppRouter from './components/router/AppRouter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
