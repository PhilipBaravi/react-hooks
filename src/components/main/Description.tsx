import { FC, memo } from 'react';


type DescriptionProps = {
  hookDescription: JSX.Element | undefined;
};

const Description: FC<DescriptionProps> = ({ hookDescription }) => {
  

  return (
    <div className="mt-[1%]">
      {hookDescription ? hookDescription : <p>Description not available.</p>}
      </div>
        
  );
};

export default memo(Description);
