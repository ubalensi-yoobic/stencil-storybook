import { h } from '@stencil/core';

export default {
  title: 'Atoms/Icon',
  component: 'icon-ytb',
  parameters: {
    viewmode: 'story'
  }
};

export const Icon = () => (
  <div>
    <ytb-icon type={'bi-alarm'} color={'red'}></ytb-icon>
    <ytb-icon type={'bi-alarm'} color={'blue'}></ytb-icon>
    <ytb-icon type={'bi-alarm'} color={'blue'}></ytb-icon>
    <ytb-icon type={'bi-alarm'} color={'blue'}></ytb-icon>
  </div>
);