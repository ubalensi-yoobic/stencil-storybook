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
            <div class='vcard'>
                <img-video url={this.url} style={{marginRight:'8px'}}></img-video>
            
            <div class='vpresentation'>
                <txt-ytb class={'title'}>{this.videoTitle}</txt-ytb>
                <txt-ytb class={'normal'}>{this.videoAuthor}</txt-ytb>
                <txt-ytb class={'normal'}>{this.views}views * il y a {this.time}</txt-ytb>
            </div>
            </div>
        </Host>
        );
    }
}