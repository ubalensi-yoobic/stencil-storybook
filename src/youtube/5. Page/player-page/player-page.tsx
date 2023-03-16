import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'player-page',
  styleUrl: 'player-page.scss',
  shadow: true
})
export class YtbPage {
  @Prop() videoPlayed = {
    title: 'Piano Ghibli Collection 1',
    url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
    like: '121K'
  };
  
  @Prop() videoAuthor = {
    name: 'Vangakuz ヴァンガクズ',
    subscribers: '17.1K',
    avatar: 'https://yt3.ggpht.com/T_iyoxzgRUQM1JB4_9KsfthcgDAEuGN9FxE3HO8_yJ-ixu3ZENIEDlje_xaYIm3i9soTwrVr=s48-c-k-c0x00ffffff-no-nd-rj'
  };
  @Prop() Comments = [
    {
      avatar:
        'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
      author: 'Author',
      content:
        'Rewatched the movie for the first time in 15 years. Thankful to even be alive still to view it. Audrey and Tierson’s score are a bit too much magic for the film to fully utilize, but that’s okay. A bit boring, still one of my favorites, but the music can never be praised enough.',
      like: '2',
      dislike: '',
      posted: '1 mois'
    }
  ];

 @Prop() VideoList = [
    {
      url: 'https://i.ytimg.com/vi/1Gd1tHNdOjI/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVPKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGBEgcihAMA8=&rs=AOn4CLAYY8jXwFCzJRMKsSGKD5J-UfdtMw',
      title: 'Amélie Full Soundtrack',
      author: 'Lays Alexandre',
      views: '1.3M',
      posted: '8 years',
      tags: ['All', 'Watched'],
      duration: '1:00:08'
    }
  ];

  render() {
    return (
      <Host>
        <nav-ytb></nav-ytb>
        <main>
          <video-player videoPlayed={this.videoPlayed} videoAuthor={this.videoAuthor} Comments={this.Comments}></video-player>
          <right-side videoInfos={this.VideoList}></right-side>
        </main>
      </Host>
    );
  }
}
