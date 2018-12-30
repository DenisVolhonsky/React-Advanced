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
  agreedToTerms: false,
};

export default class SignUp extends Component {
  state = {...INITIAL_STATE};

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

  handleChangeAgree = e => {
    const {checked} = e.target
    this.setState({
      agreedToTerms: checked,
    })
  }

  reset = () => this.setState({...INITIAL_STATE})

  render() {
    const {agreedToTerms} = this.state
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
        <br />
        <label>
          Agree to terms
          <input type="checkbox" checked={agreedToTerms} onChange={this.handleChangeAgree} className={styles.fields}/>
        </label>
        <button disabled={!agreedToTerms} type="submit">Sign up as {this.state.name}</button>
      </form>
    );
  }
}
