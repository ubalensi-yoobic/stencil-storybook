import { h } from '@stencil/core';

export default {
  title: 'Atoms/Input',
  component: 'ytb-input',
  parameters: {
    viewmode: 'story'
  }
};

export const Input = () => (
  <div style={{width:'500px'}}>
    <ytb-input placeholder={'basic'}></ytb-input>
    <ytb-input class={'search'} placeholder={'search'}></ytb-input>
    <ytb-input class={'comment'} placeholder={'comment'}></ytb-input>
  </div>
);