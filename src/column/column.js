import React, { Component } from 'react';
import Cell from '../cell/cell';

class Column extends Component {
    render() {
        return (
            <div className="column">
                {this.props.data.map (function (el, i) {
                return <Cell data={el} key={i}/> })
                
            }
            </div>
        );
    }
}

export default Column;