import './nav-bar.styles.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const path_check = (path_name) => {
    return location.pathname === path_name ? 'nav-item nav-item-current' : 'nav-item';
  }

  return (
  <div className='nav-top'>
    <div className='nav-bar-container'>
      <Link to='/' className={path_check('/')}>Home</Link>
      <Link to='/practice' className={path_check('/practice')}>Practice Tests</Link>
      <Link to='/dates' className={path_check('/dates')}>Dates</Link>
      <Link to='/resources' className={path_check('/resources')}>Resources</Link>
      <Link to='/about' className={path_check('/about')}>About</Link>
    </div>
  </div>
  );
}

export default NavBar;
