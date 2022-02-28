import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import App from './App'
import Repositories from './ui/search/Repositories'

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App /> }/>
        <Route exact path="repos/:username" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
