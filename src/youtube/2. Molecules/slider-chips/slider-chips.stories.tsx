import { h } from '@stencil/core';

export default {
  title: 'Molecules/ChipsSlider',
  component: 'slider-chips',
  parameters: {
    viewmode: 'story'
  }
};

export const ChipsSlider = () => (
  <div style={{ padding: '20px', border: '0', width: '300px' }}>
    <slider-chips tags={['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6']}></slider-chips>
  </div>
);
