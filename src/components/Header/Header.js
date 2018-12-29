import React from 'react';

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

import logo from '../../assets/img/logo.jpg';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo image={logo}/>
    <Navigation />
    <UserMenu />
  </header>
);

export default Header;
