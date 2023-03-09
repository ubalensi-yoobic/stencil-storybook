import { h } from '@stencil/core';

export default {
  title: 'Atoms/Image',
  component: 'img',
  parameters: {
    viewmode: 'story'
  },
  argTypes: {
    bradius: {
        control: { type: 'boolean' },
      }
  },
};

export const Image = (args) => (
  <div>
    <div>
      <p>test taille</p>
      <div style={{ width:'100px', height:'50px', justifyContent:'space-between', backgroundColor:'bisque'}}>
        <img-video></img-video>
      </div>
      <p>test class</p>
      <div style={{ width:'200px', height:'150px', justifyContent:'space-between', backgroundColor:'bisque'}}>
        <img-video class='ytb-thunmail'></img-video>
      </div>
    </div>
    <div>
      <p>Change radius border</p>
      <img-video bradius={args.bradius} ></img-video>
    </div>
    
  </div>)