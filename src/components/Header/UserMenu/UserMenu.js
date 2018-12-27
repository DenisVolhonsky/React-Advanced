import React from 'react';

import Avatar from './Avatar/Avatar';

import styles from './UserMenu.module.css'



const UserMenu = () => {
  return (
    <div className={styles.userMenu}>
      <Avatar/>
      <span className={styles.userName}>
          <a href="/" >Bob Marley</a>
      </span>
    </div>
  )
}

export default UserMenu
