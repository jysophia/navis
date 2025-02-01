import { Link as ReactLink } from 'react-router-dom';
import navisTitleDefault from '../../assets/navisTitleDefault.svg';
import profile from '../../assets/user.svg';
import navbarDivider from '../../assets/navbarDivider.svg';

const Navbar = () => {
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