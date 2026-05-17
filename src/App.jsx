import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserContext from './UserContext'
import Getdata from './components/Getdata'
import Navbar from './components/Navbar'
import Profile from './components/Profile'


const App = () => {
  const [user, setUser] = useState(null)
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Getdata />}> </Route>
        <Route path='/profile' element={<Profile />}> </Route>
      </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App