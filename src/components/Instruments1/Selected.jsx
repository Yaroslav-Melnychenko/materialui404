import React from 'react';
import { shape, string, boolean } from 'prop-types';

const Selected = (props) => {
  const { color } = props;
  return <div className="selected-color" style={{ backgroundColor: color.code }}><span>{color.code}</span></div>;
};
Selected.propTypes = {
  color:
    shape({
      id: string,
      code: string,
      selected: boolean,
    }).isRequired,
};
export default Selected;
