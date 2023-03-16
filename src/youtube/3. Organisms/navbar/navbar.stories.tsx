import { h } from '@stencil/core';

export default {
  title: 'Organisms/Navbar',
  component: 'nav-ytb',
  parameters: {
    viewmode: 'story'
  }
};

export const Navbar = () => <nav-ytb></nav-ytb>;
