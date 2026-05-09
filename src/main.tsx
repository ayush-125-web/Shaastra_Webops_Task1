import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Cart from './components/cartComponents/cart.tsx'
import Explore from './components/exploreCompnents/explore.tsx'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { CartProvider } from './lib/cartContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
