const ResourceBit = ({name, href, desc}) => {  
  return (
    <>
      <a href={ href } rel="noreferrer" target="_blank"> { name } </a>
      <br />
      { desc }
      <br />
      <br />
    </>
  );
}


export default ResourceBit;
