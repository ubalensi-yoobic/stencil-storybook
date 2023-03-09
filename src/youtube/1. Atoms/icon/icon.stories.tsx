import { h } from '@stencil/core';

export default {
  title: 'Atoms/Icon',
  component: 'icon-ytb',
  parameters: {
    viewmode: 'story'
  }
};

export const Icon = (args) => (
  <ytb-icon  type={'bi bi-search'}></ytb-icon>)