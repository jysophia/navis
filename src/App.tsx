import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import HomePage from './components/extension/HomePage'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
