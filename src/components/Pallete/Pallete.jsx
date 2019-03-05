import React from 'react';
import {
  shape, string, boolean, arrayOf, func,
} from 'prop-types';
import Item from '../Item/Item';
import './Pallete.scss';

const Pallete = (props) => {
  const { colors } = props;

  return (
    <div className="pallete-container">
      {
        colors.map(color => <Item key={color.id} color={color} selectColor={props.selectColor} />)
      }
    </div>
  );
};

Pallete.propTypes = {
  colors: arrayOf(
    shape({
      id: string,
      code: string,
      selected: boolean,
    }),
  ).isRequired,
  selectColor: func.isRequired,
};
export default Pallete;
