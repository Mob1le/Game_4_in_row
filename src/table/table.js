import React, { Component } from 'react';
import Column from '../column/column';
import './table.css';

class Table extends Component{
    
    render() {
        return (
            <div className="table">
                {this.props.data.map (function (col, i) {
                    return <Column data={col} key={i}/>
                })
            }</div>
        );
    }
}

export default Table;