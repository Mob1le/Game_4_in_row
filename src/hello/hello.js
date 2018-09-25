import React, { Component } from 'react';
import './hello.css';


class Hello extends Component {
    render() {
        const name = "Maxim";


        return (
            <h1>
                Hello world, {this.props.func}!
            </h1>
        );
    }
    sayHello(name) {
        return 'Hello ' + name;
    }
}

export default Hello;