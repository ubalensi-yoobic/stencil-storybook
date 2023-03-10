import { h } from '@stencil/core';

export default {
  title: 'Atoms/Image',
  component: 'img',
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
        <img-ytb type="ytb-thunmail"></img-ytb>
        <img-ytb type="video"></img-ytb>
      </div>
    </div>
    <div style={{ width: '200px', height: '150px', justifyContent: 'space-between', backgroundColor: 'bisque' }}>
      <p>avatar</p>
      <img-ytb type="smaller avatar"></img-ytb>
      <img-ytb type="avatar"></img-ytb>
    </div>
  </div>
);
