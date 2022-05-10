import DATES_DATA from "../../data/dates-data";

const Dates = () => {

  return (
    <div className='main-container'>
      <div className='main-content'>
        <h1>Calendar</h1>
        <hr/>
        <table>
          <tbody>
            <tr>
              <th>Tournament</th>
              <th>Date</th>
            </tr>

            {
              DATES_DATA.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.date}</td>
                  </tr>
              ))
            }
            
          </tbody>
        </table>
        <hr/>
        <h5> Source: <a href="http://www.lamao.org/" rel="noreferrer" target="_blank">http://www.lamao.org/</a></h5>

      </div>
    </div>
  );
}

export default Dates;
