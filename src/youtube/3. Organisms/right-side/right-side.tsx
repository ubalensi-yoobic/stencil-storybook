import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'right-side',
  styleUrl: 'right-side.scss',
  shadow: true
})
export class RightSide {
  @Prop() videoInfos = [
    {
      url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
      title: 'Title',
      author: 'Author',
      views: '400k',
      posted: '1 month',
      tags: ['All'],
      duration: '38:13:05'
    }
  ];
  @State() Tags = ['All'];
  @State() selectTag = 'All';

  createTags(videoslist) {
    const listTags = [];
    for (const video of videoslist) {
      for (let i = 0; i < video.tags.length; i++) {
        if (listTags.includes(video.tags[i]) === false) {
          listTags.push(video.tags[i]);
        }
      }
    }
    return listTags;
  }
  render() {
    this.Tags = this.createTags(this.videoInfos);
    return (
      <list-col>
        <slider-chips tags={this.Tags} onSelected={(event) => ((this.selectTag = event.detail), console.log('selectTag', this.selectTag))}></slider-chips>
        <list-col class="list-video">
          {this.videoInfos
            .filter((item) => item.tags.includes(this.selectTag))
            .map((video) => (
              <video-card videoInfos={video}></video-card>
            ))}
        </list-col>
      </list-col>
    );
  }
}
