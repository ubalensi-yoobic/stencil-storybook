import { h } from '@stencil/core';

export default {
  title: 'Atoms/Image',
  component: 'img-ytb',
  parameters: {
    viewmode: 'story'
  },
  argTypes: {
    bradius: {
      control: { type: 'boolean' }
    }
  }
};

export const Image = () => (
  <div>
    <div>
      <p>test taille</p>
      <div style={{ width: '100px', height: '50px', justifyContent: 'space-between', backgroundColor: 'bisque' }}>
        <img-ytb></img-ytb>
      </div>
      <p>test class</p>
      <div style={{ justifyContent: 'space-between', backgroundColor: 'bisque' }}>
        <img-ytb role="ytb-thumbnail"></img-ytb>
        <img-ytb role="video"></img-ytb>
      </div>
    </div>
    <div style={{ width: '200px', height: '150px', justifyContent: 'space-between', backgroundColor: 'bisque' }}>
      <p>avatar</p>
      <img-ytb url={'https://yt3.ggpht.com/ytc/AL5GRJV8fYsg6A8-M5JY6E3GRlT1OHf-4PhpuQRcDTrb9T0=s48-c-k-c0x00ffffff-no-rj'} role="avatar"></img-ytb>
    </div>
  </div>
);
