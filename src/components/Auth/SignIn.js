import React from 'react'

import styles from './Auth.module.css'

const fields = ['Email', 'Password']

const SignIn = () => (
  <div className={styles.form}>
    <span>SignIn</span><br/>
    {fields.map(input => <input type="text" key={input} placeholder={input} className={styles.fields}/>)}    
    <button>SignIn</button>
  </div>
)

export default SignIn
