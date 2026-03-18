import React from 'react'
import About from './pages/About' 
import Contact from './pages/Contact' 
import Home from './pages/Home' 
import Shop from './pages/Shop' 
import ShopSingle from './pages/ShopSingle' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopHeader from './components/common/TopHeader'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Search from './components/common/Search'
import Login from './components/admin/login'
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/admin/Dashboard'
import {AdminRequireAuth} from './components/admin/AdminRequireAuth'
import { AdminAuthProvider } from './components/context/adminAuth'
import { default as ShowCategories } from './components/admin/category/Show'
import { default as CreateCategories } from './components/admin/category/Create'
import { default as EditCategories } from './components/admin/category/Edit'
import { default as ShowBrands } from './components/admin/brands/Show'
import { default as CreateBrands } from './components/admin/category/Create'


const App = () => {
  return (
    <div>
      <AdminAuthProvider>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Search />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/shop-single" element={<ShopSingle/>}></Route>

            <Route path="/admin/login" element={<Login/>}></Route>
            <Route path="/admin/dashboard" element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }></Route>

            <Route path="/admin/categories" element={
              <AdminRequireAuth>
                <ShowCategories/>
              </AdminRequireAuth>
            }></Route>

             <Route path="/admin/categories/create" element={
              <AdminRequireAuth>
                <CreateCategories/>
              </AdminRequireAuth>
            }></Route>

             <Route path="/admin/categories/edit/:id" element={
              <AdminRequireAuth>
                <EditCategories/>
              </AdminRequireAuth>
            }></Route>
            
             <Route path="/admin/brands" element={
              <AdminRequireAuth>
                <ShowBrands/>
              </AdminRequireAuth>
            }></Route>

            <Route path="/admin/brands/create" element={
              <AdminRequireAuth>
                <CreateBrands/>
              </AdminRequireAuth>
            }></Route>

          </Routes>
        <Footer />
      </BrowserRouter>
      </AdminAuthProvider>
      <ToastContainer />
    </div>
    
    
  )
}

export default App