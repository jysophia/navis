import { Link as ReactLink, useLocation } from 'react-router-dom';
import navisTitleDefault from '../../assets/navisTitleWebApp.svg';
import profileDark from '../../assets/userDark.svg';
import profileLight from '../../assets/userLight.svg'
import navbarDivider from '../../assets/navbarDivider.svg';
import bellActiveNoNoti from '../../assets/bellActiveNoNoti.svg';
import bellInactiveNoNoti from '../../assets/bellInactiveNoNoti.svg';
import listActive from '../../assets/listActive.svg';
import listInactive from '../../assets/listInactive.svg';
import savedActiveNoNoti from '../../assets/savedActiveNoNoti.svg';
import savedInactiveNoNoti from '../../assets/savedInactiveNoNoti.svg';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

  return (
    <>
        <div className="navBarContainer">
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
                    <button>
                        <img src={currentPath === '/webapp/notifications' ? bellActiveNoNoti : bellInactiveNoNoti}></img>
                    </button>
                    <button>
                        <img src={currentPath === '/webapp/new-saved-list' ? savedActiveNoNoti : savedInactiveNoNoti}></img>
                    </button>
                        <ReactLink to="/webapp/list">
                            <img src={currentPath === '/webapp/list' ? listActive : listInactive}></img>
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