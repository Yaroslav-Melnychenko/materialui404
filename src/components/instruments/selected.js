import React, { Component } from 'react';

class Selected extends Component {

    render(){
        return(
            <div className="selected-color" style={{backgroundColor: this.props.color.code}}>
                <span>{this.props.color.code}</span>
            </div>
        );
    }
}
export default Selected;