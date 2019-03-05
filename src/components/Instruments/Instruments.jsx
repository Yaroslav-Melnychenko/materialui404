import React from 'react';
import {
  arrayOf, shape, string, boolean, func,
} from 'prop-types';
import Selected from './Selected';
import './Instruments.scss';


const Instruments = React.memo((props) => {
  const { colors } = props;

  return (
    <div className="color-panel-container">
      <div className="panel-heading">Selected colors</div>
      <div className="color-panel">
        {
          colors.map(color => (
            <Selected
              key={color.id}
              color={color}
              deleteColor={props.deleteColor}
              copyColor={props.copyColor}
            />
          ))
        }
      </div>
    </div>
  );
});
Instruments.propTypes = {
  colors: arrayOf(
    shape({
      id: string,
      code: string,
      selected: boolean,
    }),
  ).isRequired,
  deleteColor: func.isRequired,
  copyColor: func.isRequired,
};
export default Instruments;
