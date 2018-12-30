import React, { Component } from 'react';

import styles from './Auth.module.css';

const fields = [
  {
    name: 'email',
    type: 'email',
  },
  {
    name: 'password',
    type: 'password',
  },
];

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    });
  }
   

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <span>SignIn</span>
        <br />
        {fields.map(({ name, type }) => (
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
        <button type="submit">Sign in as {this.state.name}</button>
      </form>
    );
  }
}
