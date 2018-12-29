import React from 'react';

import styles from './Avatar.module.css';

import avatar from '../../../../assets/img/bob.jpg';

const Avatar = () => (
  <img src={avatar} alt="Avatar" className={styles.avatar} />
);

export default Avatar;
