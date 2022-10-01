import React from 'react'
import Home from './components/Home/Home'
import EventPage from './components/EventPage/EventPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import styles from './App.module.css'


const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/event' element={<EventPage/>} />
        </Routes>     
      </BrowserRouter>
    </div>
  )
}

export default App