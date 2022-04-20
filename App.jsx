import React, { useState, useEffect, useContext } from 'react'
import Registration from './components/Registration';
import {Routes, Route, Link } from 'react-router-dom'

const App = () => {
  const [registrated, setRegistrated] = useState(true)

  const renderRegistration = () => {
    setRegistrated(!registrated)
  };

  return(
    <div className='App'>
      <Routes>
      <Route path='/registration' element={<Registration  registrated={registrated} setRegistrated={setRegistrated}/>}/>
      </Routes>
    </div>
  )
}
export default App;
