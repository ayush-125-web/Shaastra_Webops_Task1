import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Explore from './components/exploreCompnents/explore.tsx'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
