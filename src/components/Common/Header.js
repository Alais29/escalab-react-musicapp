import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core/';
import logo from './../../assets/images/logo.png';

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <img src={logo} alt="logo" width="32" height="32" />
      &nbsp; &nbsp;
      <h1>Lyric Finder App</h1>
    </Toolbar>

  </AppBar>
)

Header.displayName = "Header";

export default Header;