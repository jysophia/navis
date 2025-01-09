import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import HomePage from './components/extension/HomePage'
import WebHomePage from './components/webapp/WebHomePage'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
    <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/webapp" element={<WebHomePage/>}/>
        </Routes>
    </HashRouter>
    </>
  )
}

export default App
