import CHANGELOG_DATA from "../../data/changelog-data";
import { Link } from 'react-router-dom';
import Announcement from "../../components/announcement/announcement.component";

const Changelog = () => {

  return (
    <div className='main-container'>
      <div className='main-content'>
        {
          CHANGELOG_DATA.map((announcement) => (
            <Announcement announcement={announcement}/>
          ))
        }
  
        <p><i><Link to='/' href="changelog.html">Click here to return home...</Link></i></p>

      </div>
    </div>
  );
}

export default Changelog;
