import { h } from '@stencil/core';

export default {
  title: 'Atoms/Text',
  component: 'text',
  parameters: {
    viewmode: 'story'
  }
};

export const Text = () => (
  <div style={{backgroundColor:'#0f0f0f', height:'200px'}}>
    <txt-ytb class={'title'}>Amelie soundtrack</txt-ytb>
    <txt-ytb class={'normal'}>authorX</txt-ytb>
  </div>
  );
