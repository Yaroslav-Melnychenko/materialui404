import React from 'react';
import Item from '../Item/Item';
import './Pallete.scss';

const Pallete = (props) => {
  const { colors } = props;
  return(
    <div className="pallete-container">
      {
        colors.map(color => <Item key={color.id} color={color} selectColor={props.selectColor} />)
      }
    </div>
  );
};  
export default Pallete;
