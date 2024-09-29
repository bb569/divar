import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {Route,Routes} from 'react-router-dom'
import Divar from './dashbord/Main'
import Divar2 from './dashbord/routerss/Rout1' 
import Divar3 from './dashbord/routerss/Rout2' 
import Divar4 from './dashbord/routerss/Rout3' 
import Divar5 from './dashbord/routerss/Rout4'
import Divar6 from './dashbord/routerss/Rout5'
import Divar7 from './dashbord/routerss/Rout6'
import Divar8 from './dashbord/routerss/Rout7'
import Divar9 from './dashbord/routerss/Rout8'
import Divar10 from './dashbord/routerss/Rout9'
import Divar11 from './dashbord/routerss/Rout10'
function App() {

  return (
    <>
    <Routes>
      
      <Route path='/' element={<Divar />}/>
      <Route path='/routerss/Rout1'  element={<Divar2 />}/>
      <Route path='/routerss/Rout2'  element={<Divar3 />}/>
      <Route path='/routerss/Rout3'  element={<Divar4 />}/>
      <Route path='/routerss/Rout4' element={<Divar5 />}/>
      <Route path='/routerss/Rout5' element={<Divar6 />}/>
      <Route path='/routerss/Rout6' element={<Divar7 />}/>
      <Route path='/routerss/Rout7' element={<Divar8 />}/>
      <Route path='/routerss/Rout8' element={<Divar9 />}/>
      <Route path='/routerss/Rout9' element={<Divar10 />}/>
      <Route path='/routerss/Rout10' element={<Divar11 />}/>
      
    </Routes>
     
    </>
  )
}

export default App
