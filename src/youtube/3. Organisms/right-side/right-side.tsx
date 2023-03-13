import { Component, h } from '@stencil/core';

@Component({
  tag: 'right-side',
  styleUrl: 'right-side.scss',
  shadow: true
})
export class RightSide {
  render() {
    return (
      <list-col>
        <slider-chips
          tags={[
            'Tout',
             'Bande-son',
            'Musique classique',
            'Vidéos similaires',
             'Vidéos mise en ligne récemment',
           'Regardées', 
          ]}
        ></slider-chips>
        <list-col class="list-video">
          <video-card></video-card>
          <video-card></video-card>
          <video-card></video-card>
          <video-card></video-card>
          <video-card></video-card>
          <video-card></video-card>
          <video-card></video-card>
        </list-col>
      </list-col>
    );
  }
}
