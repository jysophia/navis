import { Link as ReactLink, useLocation } from 'react-router-dom';
import navisTitleDefault from '../../assets/navisTitleDefault.svg';
import profileDark from '../../assets/userDark.svg';
import profileLight from '../../assets/userLight.svg'
import navbarDivider from '../../assets/navbarDivider.svg';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

  return (
    <>
        <div className="navBarContainer fixed">
            <div className="navBarInnerContainer">
                <div className="navBarLogo">
                    <img src={navisTitleDefault} alt="logo"/>
                </div>
                <div className="navBarMenuItems">
                    <button className="profile-btn">
                        <ReactLink to="/webapp">
                            <img src={currentPath === '/webapp' ? profileDark : profileLight } alt="profile" className="profile-icon"/>
                        </ReactLink>
                    </button>
                    <i className="bi bi-bell navBarOption"></i>
                    <i className="bi bi-bookmark navBarOption"></i>
                        <ReactLink to="/webapp/list">
                            <i className="bi bi-list-task navBarOption"></i>
                        </ReactLink>
                </div>
                
            </div>
            <div className="navBarDivider">
                <img src={navbarDivider}></img>
            </div>
        </div>
    </>
  )
}

export default Navbar