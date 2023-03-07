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
      },
  },
};
// const big: any = {
//   borderRadius: '5px',
//   height: '100%',
//   width:'80%'
// };
// const small: any = {
//   borderRadius: '5px',
//   height: '50%',
//   width:'30%'
// };

export const Image = (args) => (
  <div style={{display:'flex', flexDirection:'row', alignItem:'space-between'}}>
    Big
    <img-video bradius={true}></img-video>
    Small
    <img-video bradius={false} url={'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg'} ></img-video>
    Changement
    <img-video bradius={args.bradius} url={'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg'} ></img-video>
  </div>)