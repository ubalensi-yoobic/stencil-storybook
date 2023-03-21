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
    <txt-ytb bold={'bold'} color="white">Lorem ipsum</txt-ytb>
    <txt-ytb bold={'bold'} color="black">Lorem ipsum</txt-ytb>
    <txt-ytb bold={'bold'} color="grey">Lorem ipsum</txt-ytb>
    <txt-ytb bold={'normal'} color="white">Lorem ipsum</txt-ytb>
    <txt-ytb bold={'normal'} color="black">Lorem ipsum</txt-ytb>
    <txt-ytb bold={'normal'} color="grey">Lorem ipsum</txt-ytb>
  </div>
  );
