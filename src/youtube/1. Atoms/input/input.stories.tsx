import { h } from '@stencil/core';

export default {
  title: 'Atoms/Input',
  component: 'ytb-input',
  parameters: {
    viewmode: 'story'
  }
};

export const Input = () => (
  <div style={{ width: '500px' }}>
    <ytb-input placeholder={'basic'}></ytb-input>
    <ytb-input type={'search'} placeholder={'search'}></ytb-input>
    <ytb-input type={'comment'} placeholder={'comment'}></ytb-input>
  </div>
);
