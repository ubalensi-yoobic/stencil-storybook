import { h } from '@stencil/core';

export default {
  title: 'Atoms/Icon',
  component: 'ytb-icon',
  parameters: {
    viewmode: 'story'
  }
};

export const Icon = () => <ytb-icon type={'bi bi-search'}></ytb-icon>;
