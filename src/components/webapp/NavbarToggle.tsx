import Navbar from './Navbar';
import useMediaQuery from '../../utils/UseMediaQuery';
import navisIcon from '../../assets/navisIcon.svg';
import { useState } from 'react';
import exit from '../../assets/exit_dark.svg';

// Reference: https://github.com/ed-roh/gym-typescript/blob/master/src/scenes/navbar/index.tsx

const NavbarToggle = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return (
        <nav>
            { isAboveMediumScreens ? (
            <Navbar />
            )   : (
                <button
                    className="rounded-full bg-secondary-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <img src={navisIcon}></img>
                </button>
            )}

            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed left-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img src={exit} className="exit"></img>
                        </button>
                    </div>
                    <Navbar />
                </div>
            )}
        </nav>
        
    )
}

export default NavbarToggle;