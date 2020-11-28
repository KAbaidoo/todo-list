import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ?
                'line-through' :
                'none',
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            paddingLeft: '5px',
            listStyleType: 'none',

        }
    }

    render() {
        const { title, id } = this.props.todo
        return (
            <li style={this.getStyle()}>
                <input type='checkbox' style={checkboxStyle} />
                {title}
                <button style={btnStyle}>x</button>
            </li>
        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
// styles
const checkboxStyle = {
    margin: '10px',
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    float: 'right',
    // textAlign: 'right',
    padding: '3px 6px',
    margin: '5px 10px',
    pointer: 'cursor',

}

export default TodoItem;