import Navbar from './Navbar';

export default function WebHomePage(){
    return (
        <div className="flex-container">
            <Navbar />
            <div className="flex-child">
                <img src='/public/navisLogo.png' />
                <h1>Hey Navis,</h1>
                <h2>You added 1 new scholarship! Go check it out</h2>
                <h3>Applications in Progress</h3>
                <ul>
                    <li>Pacific Oceans Award</li>
                    <li>The Dead Sea Nominations</li>
                    <li>Ice Caps Beneficial</li>
                </ul>
                <h3>Featured News</h3>
                <ul>
                    <li>This is a news about a scholarship.</li>
                </ul>
            </div>
            
            <div className="flex-child">
                <h2>My calendar</h2>
            </div>
        </div>
    )
}