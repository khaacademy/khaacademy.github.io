const TestTable = ({set}) => {
  const {name, image_data, includes_raws, rows} = set;
  const {src, height} = image_data;
  const src_message = (src) => {
    return src != '' ? 'Download' : ''
  }

  return (
    <>
      <h5>
        <img 
          src={src}
          alt={`${name} Logo`}
          title={name}
          height={height}
        />
      </h5>

      <table>
        <tbody>
          <tr>
            {
              includes_raws ?
              <>
                <th>Subject Area</th>
                <th>Typeset</th>
                <th>Raws</th>
              </> : <>
                <th>Subject Area</th>
                <th>Tests</th>
              </>
            }
          </tr>
          {
            includes_raws ?
            rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td><a href={row.typeset} target="_blank">{src_message(row.typeset)}</a></td>
                <td><a href={row.raw} target="_blank">{src_message(row.raw)}</a></td>
              </tr>
            ))
            :
            rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td><a href={row.test} target="_blank">{src_message(row.test)}</a></td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <br />
      <br />
    </>
  );
}


export default TestTable;
