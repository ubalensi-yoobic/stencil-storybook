
import { h } from '@stencil/core';

export default {
  title: 'Molecules/SearchBar',
  component: 'search-bar',
  parameters: {
    viewmode: 'story'
  }
};

export const SearchBar = () => (
    <ytb-search-bar></ytb-search-bar>
  );