import React from 'react';
import './Item.scss';

const Item  = (props) => {
  const { color, selectColor} = props;
  const cssClass = color.selected ? 'colorpaletteitem-component selected' : 'colorpaletteitem-component';
  return(
    <span
      className={cssClass}
      onClick={selectColor.bind(this, color.id)}
      role="presentation"
      style={{backgroundColor: color.code}}
    />
  );
}
export default Item;