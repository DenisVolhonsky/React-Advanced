import React, { PureComponent, createRef } from 'react';

import Avatar from './Avatar/Avatar';
import Dropdown from './Dropdown/Dropdown';

import styles from './UserMenu.module.css';

export default class UserMenu extends PureComponent {
  containerRef = createRef();
  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  // the same as PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.isDropdownOpen !== this.state.isDropdownOpen;
  // }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(e.target);
    if (this.state.isDropdownOpen && !isTargetInsideContainer)
      this.closeDropDown(); 
  };

  openDropDown = () =>
    this.setState({
      isDropdownOpen: true,
    });

  closeDropDown = () =>
    this.setState({
      isDropdownOpen: false,
    });

  render() {
    const { isDropdownOpen } = this.state; 
    return (
      <div
        className={styles.userMenu}
        onClick={this.openDropDown}
        ref={this.containerRef}
      >
        <Avatar />
        <span className={styles.userName}>
          <span href="/">Bob Marley</span>
        </span>
        {isDropdownOpen && <Dropdown />}
      </div>
    );
  }
}
