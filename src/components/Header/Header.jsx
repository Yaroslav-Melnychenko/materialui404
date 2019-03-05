import React from 'react';
import { string } from 'prop-types';
import './Header.scss';

const Header = React.memo(props => (
  <header>
    Colors Pallete
    <span
      className="to-right"
      style={{ color: props.copiedColor }}
    >{props.copiedColor ? `Copied color: ${props.copiedColor}` : null}
    </span>
  </header>
));

Header.propTypes = {
  copiedColor: string.isRequired,
};
export default Header;
