import React from 'react';

console.log(React);

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(){
        window.alert('Hello!')
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.onClick}>Copy</button>
        );
    }
}

export default Button;