import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import HomePage from './components/extension/HomePage'
import WebApp from './components/webapp/WebApp'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
    <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/webapp/*" element={<WebApp/>}/>
        </Routes>
    </HashRouter>
    </>
  )
}

export default App
