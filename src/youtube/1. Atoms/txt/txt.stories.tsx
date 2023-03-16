import { h } from '@stencil/core';

export default {
  title: 'Atoms/Text',
  component: 'txt-ytb',
  parameters: {
    viewmode: 'story'
  }
};

export const Text = () => (
  <div>
    <txt-ytb type={'title'}>Amelie soundtrack</txt-ytb>
    <txt-ytb type={'normal'}>authorX</txt-ytb>
  </div>
  );
