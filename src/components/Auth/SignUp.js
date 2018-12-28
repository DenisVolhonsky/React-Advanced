import React from 'react'

import styles from './Auth.module.css'

const fields = ['Name', 'Email', 'Phone', 'Password']

const SignUp = () => (
  <div className={styles.form}>
    <span>SignUp</span><br/>
    {fields.map(input => <input type="text" key={input} placeholder={input} className={styles.fields}/>)}
    <button>SignUp</button>    
  </div>
)

export default SignUp