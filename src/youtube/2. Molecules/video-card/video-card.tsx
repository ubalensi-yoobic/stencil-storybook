import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'video-card',
    styleUrl: 'video-card.scss',
    shadow: true
  })

  export class VideoCardYTB {
      @Prop() videoTitle='Title';
      @Prop() videoAuthor='author';
      @Prop() views='400k';
      @Prop() time='1 month';
      @Prop() url='https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg'
    ;

    render() {
      return (
        <Host>
            <img-ytb url={this.url} ></img-ytb>
            <div class='vinfo'>
                <txt-ytb type={'title'}  style={{ fontSize: '1.2rem'}}>{this.videoTitle}</txt-ytb>
                <txt-ytb type={'normal'} style={{ fontSize: '1rem'}} >{this.videoAuthor}</txt-ytb>
                <txt-ytb type={'normal'} style={{ fontSize: '0.9rem'}}>{this.views}views * il y a {this.time}</txt-ytb>
            </div>
        </Host>
        );
    }
}