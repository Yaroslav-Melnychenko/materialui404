import React from 'react';
import Selected from './selected';
import './instruments.scss';

const Instruments = (props) => {
  const { colors } = props;
  return(
    <div className="color-panel-container">
      <div className="panel-heading">Selected colors</div>
      <div className="color-panel">
        {
          colors.map(color => <Selected key={color.id} color={color} />)
        }
      </div>
    </div>
  );
};
export default Instruments;