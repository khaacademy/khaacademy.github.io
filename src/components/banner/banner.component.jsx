import './banner.styles.css'
import khaAcademyLogo from '../../assets/khaAcademyLogo.png';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Banner = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 600px)'})

  return (
    <header style={{padding: (isDesktop ? '64px 0px 16px 0px' : '115px 0px 16px 0px')}} className='banner-container'>
      <Link to="/">
      <img className='kha-academy-logo' style={{width: (isDesktop ? '35%' : '90%')}} alt='Kha Academy Logo' src={khaAcademyLogo} />         
      </Link>
    </header>
    
  );
}


export default Banner;
