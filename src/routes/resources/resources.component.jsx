import './resources.styles.css';

import ResourceCombo from '../../components/resource-combo/resource-combo.component';

import RESOURCES_DATA from '../../data/resources-data';

const Resources = () => {
  return (
    <div className='main-container'>
      <div className='main-content'>
        <h1>Resources</h1>
        <div id="toc-container">
            <p className="toc-title">Table of Contents</p>
            <ul className="toc-list">
              <li><a href="#learning">Learning</a></li>
              <li><a href="#locals">MAΘ - Local</a></li>
              <li><a href="#nationals">MAΘ - National</a></li>
              <li><a href="#misc">Miscellaneous</a></li>
              <li><a href="#ap">AP Exams</a></li>
              <li><a href="#amc">AMC/AIME</a></li>
            </ul>
          </div>

        {
          RESOURCES_DATA.map((combo) => (
              <ResourceCombo 
                key={combo.header.name} 
                combo={combo}/>
          ))
        }

      </div>
    </div>
  );
}

export default Resources;
