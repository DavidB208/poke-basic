//Styles
import './sass/app.scss'

//Components
import { Routes, Route } from 'react-router-dom'
import Layout from './layout'
import { Info } from './components/Info'
import Default from './Default'

//Hooks
import { useState, useEffect } from 'react'

const App = () => {
   return (
    <div className='pokedex'>
      <Routes>
            <Route path='/' element={<Layout />}></Route>
            <Route path='/pokemon/:ide' element={<Info />}></Route>
            <Route path='*' element={<Default />}> </Route>
        </Routes>
      
    </div>
  )
}

export {App}
