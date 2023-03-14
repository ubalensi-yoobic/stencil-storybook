import { h } from '@stencil/core';

export default {
  title: 'Molecules/VideoCard',
  component: 'video-card',
  parameters: {
    viewmode: 'story'
  }
};

export const VideoCard = () => (
      <video-card></video-card>
  );