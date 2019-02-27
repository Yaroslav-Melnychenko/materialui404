import React, { Component } from 'react';

class Item extends Component {

  state = {
    active: false
  }

  constructor(props){
    super(props);
  }

  colorPick(){
    this.setState({active: true});
  }

  render() {
    return(
      <td
        style={this.props.style}
        onClick={this.colorPick.bind(this)}
        className={this.state.active ? 'active-td' : null}
      ></td>
    );
  }

}

export default Item;
