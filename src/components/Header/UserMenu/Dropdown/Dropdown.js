import React from 'react'

import styles from './Dropdown.module.css'

const dropdownList = ['account', 'order history', 'meal planner']

const Dropdown = () => (
  <div className={styles.dropdown}>
    <ul>
      {dropdownList.map(item => <li key={item}><a href='/'>{item}</a></li>)}
    </ul>
    <button className={styles.logoutBtn}>Logout</button>
  </div>
)

export default Dropdown
