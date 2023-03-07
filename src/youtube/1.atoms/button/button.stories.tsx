import { h } from '@stencil/core';

export default {
  title: 'Atoms/Button',
  component: 'button',
  parameters: {
    viewmode: 'story'
  }
};

export const Button = () => (
    <div>
      <button-ytb>Normal</button-ytb>
    </div>
  );

