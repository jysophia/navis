import { MemoryRouter, Routes, Route } from 'react-router'
import './App.css'
import HomePage from './components/extension/HomePage'

function App() {
  return (
    <>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </MemoryRouter>
    </>
  )
}

export default App
