const ResourceHeader = ({name, tag, desc}) => {  
  return (
    <>
      <hr id={tag}/>
        <h3 className='gray-text'>{name}</h3>
        <b>{desc}</b>
      <hr/>
    </>
  );
}


export default ResourceHeader;
