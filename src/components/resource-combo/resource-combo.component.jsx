import ResourceHeader from "../resource-header/resource-header.component";
import ResourceBit from "../resource-bit/resource-bit.component";

const ResourceCombo = ({combo}) => {  
  const {header, bits} = combo;

  return (
    <>
      <ResourceHeader
        name={header.name} 
        tag={header.tag} 
        desc={header.desc}
      />

      {
        bits.map((bit) => (
          <ResourceBit 
            key={bit.name} 
            name={bit.name} 
            href={bit.href} 
            desc={bit.desc}
          />
        ))
      }

      <br />
    </>
  );
}

export default ResourceCombo;
