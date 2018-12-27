import React from 'react';

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <Logo/>
    <Navigation/>
    <UserMenu/>
  </header>
)


export default Header
