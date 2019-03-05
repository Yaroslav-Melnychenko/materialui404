import React from 'react';
import {
  shape, string, boolean, func,
} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faTimes } from '@fortawesome/free-solid-svg-icons';

const Selected = (props) => {
  const { color, deleteColor } = props;

  return (
    <div
      className="selected-color"
      style={{ backgroundColor: color.code }}
    >
      <span>{color.code}</span>
      <span className="icon close-icon" role="presentation" onClick={deleteColor.bind(this, color.id)}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
      <span
        className="icon copy-i mr-3"
      >
        <FontAwesomeIcon icon={faCopy} />
      </span>
    </div>
  );
};
Selected.propTypes = {
  color:
    shape({
      id: string,
      code: string,
      selected: boolean,
    }).isRequired,
  deleteColor: func.isRequired,
};
export default Selected;
