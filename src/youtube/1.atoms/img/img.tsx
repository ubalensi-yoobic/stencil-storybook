import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'img-video',
    styleUrl: 'img.scss',
    shadow: true
  })

  export class ImageYTB {
    @Prop() url='https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg';
    @Prop() bradius= true;
  
    render() {
      return (
      <img
      style={this.bradius ? {borderRadius:'7px'}:{borderRadius:'0px'}}
        src={this.url}
        alt="img"
      />);
    }
  }