import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import User from './Pages/User'
import UserDetailPage from './Pages/UserDetailPage'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import NotFound from './Pages/NotFound'
import Navbar from "./Pages/Navbar"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/user/:id" element={<UserDetailPage/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<NotFound/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
