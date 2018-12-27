import React from 'react';

import Avatar from './Avatar/Avatar';
import Dropdown from './Dropdown/Dropdown'

import styles from './UserMenu.module.css'

const UserMenu = () => {
  return (
    <div className={styles.userMenu}>
      <Avatar/>
      <span className={styles.userName}>
          <a href="/" >Bob Marley</a>
      </span>
      <Dropdown/>
    </div>
  )
}

export default UserMenu
