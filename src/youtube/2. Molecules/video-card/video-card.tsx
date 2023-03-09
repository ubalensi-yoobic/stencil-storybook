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
            <img-video bradius={true} url={this.url} style={{marginRight:'8px', height:'94px', width:'168px'}}></img-video>
            <div class='vinfo'>
                <txt-ytb class={'title'}  style={{ fontSize: '1.2rem',lineSize:'1',fontWeight: '500'}}>{this.videoTitle}</txt-ytb>
                <txt-ytb class={'normal'} style={{ fontSize: '20',lineSize:'1',fontWeight: '400'}} >{this.videoAuthor}</txt-ytb>
                <txt-ytb class={'normal'} style={{ fontSize: '1',lineSize:'1',fontWeight: '400'}}>{this.views}views * il y a {this.time}</txt-ytb>
            </div>
        </Host>
        );
    }
}