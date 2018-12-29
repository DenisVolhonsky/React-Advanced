import React from 'react';

import styles from './Logo.module.css';

const Logo = ({image=''}) => <img src={image} alt="logo" className={styles.logo} />;

export default Logo;
