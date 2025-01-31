import NavbarToggle from './NavbarToggle';
import { Routes, Route } from 'react-router'
import HomePage from './WebHomePage'
import ListPage from './ListPage'
import { useState } from 'react';
import { SelectedPage } from '../../shared/types';

export default function WebApp(){
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

    return (
        <div className="flex-container">
            <NavbarToggle
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/list" element={<ListPage/>}/>
                    </Routes>
                </div>
        </div>
    )
}