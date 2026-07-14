import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layout/RootLayout'
import Home from './components/pages/Home'
import Error from './components/pages/Error'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import ProductDetails from './components/layout/ProductDetails'
import Cart from './components/layout/Cart'


function App() {
  

  return (
    <>
   <Routes>
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart/>} />
    


    </Route>
   </Routes>
    </>
  )
}

export default App
