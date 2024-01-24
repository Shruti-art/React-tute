import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
