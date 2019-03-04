import React from 'react';
import {
  shape, string, boolean, func,
} from 'prop-types';
import './Item.scss';

const Item = (props) => {
  const { color, selectColor } = props;
  const cssClass = color.selected ? 'colorpaletteitem-component selected' : 'colorpaletteitem-component';
  return (
    <span
      className={cssClass}
      onClick={selectColor.bind(this, color.id)}
      role="presentation"
      style={{ backgroundColor: color.code }}
    />
  );
};
Item.propTypes = {
  color:
    shape({
      id: string,
      code: string,
      selected: boolean,
    }).isRequired,
  selectColor: func.isRequired,
};
export default Item;
