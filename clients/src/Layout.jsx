/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
// import Inbox from './components/Inbox'
import { Outlet } from 'react-router-dom'
// import NewMessage from './components/NewMessage'
// import NewMessage from './components/NewMessage'

export const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
       <Sidebar/>
       {/* <NewMessage/> */}
       <Outlet/>
    </div>
    </>
  )
}
