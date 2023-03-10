import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'img-ytb',
  styleUrl: 'img.scss',
  shadow: true
})
export class ImageYTB {
  @Prop() url =
    'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg';
  @Prop() type = '';

  render() {
    return <img class={this.type} src={this.url} alt="img" />;
  }
}
