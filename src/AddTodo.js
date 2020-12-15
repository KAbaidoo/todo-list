import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''

    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input type='text' name='title' placeholder='Add Todo ...' style={{ flex: '10' }} value={this.state.title} onChange={this.handleChange} />
                <input type='submit' value='submit' className='btn' style={{ flex: '1' }} onClick={this.onSubmit} />
            </form>
        );
    }
}
//Proptypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,

}

export default AddTodo;
