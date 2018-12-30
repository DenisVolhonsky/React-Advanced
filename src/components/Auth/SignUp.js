import React, { Component } from 'react';

import styles from './Auth.module.css';

const fields = [
  {
    name: 'name',
    type: 'text',
  },
  {
    name: 'email',
    type: 'email',
  },
  {
    name: 'phone',
    type: 'phone',
  },
  {
    name: 'password',
    type: 'password',
  },
];

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

export default class SignUp extends Component {
  state = {...INITIAL_STATE};

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => this.setState({...INITIAL_STATE})

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <span>SignUp</span>
        <br />
        {fields.map(({name, type}) => (
          <input
            key={name}
            type={type}
            placeholder={name}
            className={styles.fields}
            name={name}
            value={this.state[name]}
            onChange={this.handleChange}
          />
        ))}
        <button type="submit">Sign up as {this.state.name}</button>
      </form>
    );
  }
}
