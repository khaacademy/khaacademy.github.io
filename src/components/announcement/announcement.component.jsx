const Announcement = ({announcement}) => {  
  const {date, messages, logs} = announcement;

  return (
    <>
      <br/>
      <h3>Announcement {date}:</h3>
      <hr/>
      {
        messages.map((message) => (
          <p key={message}>{message}</p>
        ))
      }
      {
        logs.map((log) => (
          <p key={log}>● <i>{log}</i></p>
        ))
      }
      <hr/>
    </>
  );
}


export default Announcement;
