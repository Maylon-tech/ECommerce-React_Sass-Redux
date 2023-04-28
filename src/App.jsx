import React from 'react'
import './App.scss'
// react Router Dom 6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import { Home, Cart, Search, CategoryProduct, ProductSingle } from './pages/index'

// Components
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import store from './store/store'
import { Provider } from "react-redux"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Sidebar />
          <h1>Ecoomerce</h1>

          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export default App
