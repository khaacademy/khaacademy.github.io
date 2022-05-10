import CHANGELOG_DATA from "../../data/changelog-data";
import { Link } from 'react-router-dom';
import Announcement from "../../components/announcement/announcement.component";

const Home = () => {

  return (
    <div className='main-container'>
      <div className='main-content'>
        <h1>Welcome!</h1>
        <hr/>
        <h5 className="gray-text"><Link to='/practice' style={{textShadow: '2px 2px 4px #94424246'}}>Practice Tests</Link> - Recommended! Warm up with official tests from previous tournaments!</h5>
        <hr/>
        <h5 className="gray-text"><Link to='/dates'>Dates</Link> - Your very own tournament calendar!</h5>
        <hr/>
        <h5 className="gray-text"><Link to='/resources'>Resources</Link> - Other helpful sites, cheat sheets, last-minute tips, and more!</h5>
        <hr/>

        <Announcement announcement={CHANGELOG_DATA[0]}/>
  
        <p><i>
          <Link to='/changelog'>Click here to view previous announcements...</Link>
        </i></p>

      </div>
    </div>
  );
}

export default Home;
