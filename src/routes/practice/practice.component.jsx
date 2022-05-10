import PRACTICE_DATA from '../../data/practice-data';

import TestTable from '../../components/test-table/test-table.component';

const Practice = () => {

  return (
    <div className='main-container'>
      <div className='main-content'>
        <h1>Practice Tests</h1>
        <hr/>
        <br/>
       
        {
          PRACTICE_DATA.map((set) => (
              <TestTable key={set.name} set={set}/>
          ))
        }

      </div>
    </div>
  );
}

export default Practice;
