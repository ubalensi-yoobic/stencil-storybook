import { h } from '@stencil/core';

export default {
  title: 'Molecules/VideoCard',
  component: 'video-card',
  parameters: {
    viewmode: 'story'
  }
};

export const VideoCard = () => (
      <video-card videoTitle={'Amelie Soundtrack'} videoAuthor={'SonGodess'}></video-card>
  );