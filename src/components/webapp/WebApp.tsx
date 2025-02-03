import { Routes, Route } from 'react-router-dom';
import NavbarToggle from './NavbarToggle';
import HomePage from './WebHomePage'
import ListPage from './ListPage'

export default function WebApp(){

    return (
        <div className="flex-container">
            <NavbarToggle />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/list" element={<ListPage/>}/>
            </Routes>
        </div>
    )
}