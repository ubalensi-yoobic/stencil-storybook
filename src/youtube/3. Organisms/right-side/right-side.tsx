import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'right-side',
  styleUrl: 'right-side.scss',
  shadow: true
})
export class RightSide {
  @Prop() Videos: [
    {
      url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
      title: 'Title',
      author: 'Author',
      views: '400k',
      posted: '1 month',
      tags: string[],
      duration: '38:13:05',
    }
  ];
  @Prop() Tags = ['Tout', 'Bande-son', 'Musique classique', 'Vidéos similaires', 'Vidéos mise en ligne récemment', 'Regardées'];
  @State() selectTag = 'Tout';

  // createTags(videos) {
  //   const listTags = [];
  //   for (const video of videos) {
  //     for (const i in video.tags.length) {
  //       listTags.push(video.tags[i]);
  //     }
  //   }
  //   console.log('list tags', listTags);
  //   return listTags;
  // }
  render() {
    console.log('selectTag', this.selectTag);
    return (
      <list-col>
        <slider-chips tags={this.Tags} onSelected={(event) => ((this.selectTag = event.detail), console.log('selectTag', this.selectTag))}></slider-chips>
        <list-col class="list-video">
          {this.Videos.filter((item) => item.tags.includes(this.selectTag)).map((video) => (
            <video-card videoInfos={video}></video-card>
          ))}
        </list-col>
      </list-col>
    );
  }
}
