import React from 'react';

const Selected = (props) => {
	const { color } = props;
	return <div className="selected-color" style={{backgroundColor: color.code}}><span>{color.code}</span></div>;
};
export default Selected;