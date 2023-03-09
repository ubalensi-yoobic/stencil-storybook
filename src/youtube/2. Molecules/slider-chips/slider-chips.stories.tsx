import { h } from '@stencil/core';

export default {
  title: 'Molecules/ChipsSlider',
  component: 'chips-slider',
  parameters: {
    viewmode: 'story'
  }
};

export const ChipsSlider = () => (
  <div style={{ padding: '20px', border: '0' }}>
    <slider-chips
      tags={[
        { value: 'Tag1', class: 'r8-primary' },
        { value: 'Tag2', class: 'r8-secondary' },
        { value: 'Tag3', class: 'r8-secondary' },
        { value: 'Tag4', class: 'r8-secondary' },
        { value: 'Tag4', class: 'r8-secondary' },
        { value: 'Tag4', class: 'r8-secondary' }
      ]}
    ></slider-chips>
  </div>
);
