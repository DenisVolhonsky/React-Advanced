import React from 'react'
import logo from '../../../assets/img/logo.jpg' 

import styles from './Logo.module.css'

const Logo = () => (
  <img src={logo} alt="logo" className={styles.logo}/>
)

export default Logo