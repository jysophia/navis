import { SelectedPage } from '../../shared/types';
import Link from './Link';
import navisTitleDefault from '../../assets/navisTitleDefault.svg';
import profile from '../../assets/user.svg';
import navbarDivider from '../../assets/navbarDivider.svg';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  return (
    <>
        <div className="navBarContainer fixed">
            <div className="navBarInnerContainer">
                <div className="navBarLogo">
                    <img src={navisTitleDefault} alt="logo"/>
                </div>
                <div className="navBarMenuItems">
                    <button className="profile-btn">
                        <img src={profile} alt="profile" className="profile-icon"/>
                    </button>
                    <i className="bi bi-bell navBarOption"></i>
                    <i className="bi bi-bookmark navBarOption"></i>
                    <i className="bi bi-list-task navBarOption">
                        <Link 
                            page={SelectedPage.List}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        ></Link>
                    </i>
                </div>
                
            </div>
            <div className="navBarDivider">
                <img src={navbarDivider}></img>
            </div>
        </div>
    </>
  )
}

export default Navbar;