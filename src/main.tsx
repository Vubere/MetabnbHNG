import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App'
import Airbnb from './pages/Airbnb'
import PlaceToStay from './pages/place_to_stay'
import NoPage from './pages/NoPage'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as routes from './routes/route'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Airbnb/>}/>
          <Route path={routes.places} element={<PlaceToStay/>}/>
          <Route path='*' element = {<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
