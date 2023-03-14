import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'com-container',
  styleUrl: 'comment.scss',
  shadow: true
})
export class CommentYTB {
  @Prop() commentInfos = {
    avatar:
      'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
    author: 'Author',
    content:
      'Rewatched the movie for the first time in 15 years. Thankful to even be alive still to view it. Audrey and Tierson’s score are a bit too much magic for the film to fully utilize, but that’s okay. A bit boring, still one of my favorites, but the music can never be praised enough.',
    like: '2',
    dislike: '',
    posted: '1 mois'
  };
  render() {
    return (
      <div class={'com-container'}>
        <img-ytb url={'https://yt3.ggpht.com/ytc/AL5GRJV8fYsg6A8-M5JY6E3GRlT1OHf-4PhpuQRcDTrb9T0=s48-c-k-c0x00ffffff-no-rj'}></img-ytb>
        <div class={'written-details'}>
          <div class={'author-details'}>
            <txt-ytb type={'title'} style={{ fontSize: '18px' }}>
              {this.commentInfos.author}
            </txt-ytb>
            <txt-ytb type={'normal'} style={{ fontSize: '12px', paddingBottom: '1px' }}>
              il y a {this.commentInfos.posted}
            </txt-ytb>
          </div>
          <txt-ytb type={'title'}>{this.commentInfos.content}</txt-ytb>
          <div class={'reactions'}>
            <button-ytb type={'rond-transparent'}>
              <ytb-icon type={'bi bi-hand-thumbs-down'} color={'white'}></ytb-icon>
              {this.commentInfos.like}
            </button-ytb>
            <button-ytb type={'rond-transparent'}>
              <ytb-icon type={'bi bi-hand-thumbs-up'} color={'white'}></ytb-icon>
              {this.commentInfos.dislike}
            </button-ytb>
            <button-ytb type={'rond-transparent'}>
              <ytb-icon type={'bi bi-heart'} color={'white'}></ytb-icon>
            </button-ytb>
            <button-ytb type={'r8 secondary'} style={{ backgroundColor: 'transparent', padding: '2px' }}>
              <txt-ytb type={'title'}>Répondre</txt-ytb>
            </button-ytb>
          </div>
        </div>
      </div>
    );
  }
}
