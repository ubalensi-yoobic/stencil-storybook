import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'video-card',
  styleUrl: 'video-card.scss',
  shadow: true
})
export class VideoCardYTB {
  @Prop() videoInfos = {
    url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
    title: 'Title',
    author: 'Author',
    views: '400k',
    posted: '1 month',
    tags: ['Tout'],
    duration: '38:13:05',
  };
  render() {
    return (
      <Host>
        <img-annotated url={this.videoInfos.url} time={this.videoInfos.duration}></img-annotated>
        <div class="vinfo">
          <txt-ytb type={'title'} style={{ fontSize: '1.2rem' }}>
            {this.videoInfos.title}
          </txt-ytb>
          <txt-ytb type={'normal'} style={{ fontSize: '1rem' }}>
            {this.videoInfos.author}
          </txt-ytb>
          <txt-ytb type={'normal'} style={{ fontSize: '0.9rem' }}>
            {this.videoInfos.views}views * il y a {this.videoInfos.posted}
          </txt-ytb>
        </div>
      </Host>
    );
  }
}
