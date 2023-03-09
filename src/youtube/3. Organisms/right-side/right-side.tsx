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
            { value: 'Tout', class: 'r8-primary' },
            { value: 'Bande-son', class: 'r8-secondary' },
            { value: 'Musique classique', class: 'r8-secondary' },
            { value: 'Vidéos similaires', class: 'r8-secondary' },
            { value: 'Vidéos mise en ligne récemment', class: 'r8-secondary' },
            { value: 'Regardées', class: 'r8-secondary' },
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
