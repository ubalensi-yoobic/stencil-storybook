import { h } from '@stencil/core';

export default {
  title: 'Organisms/VideoPlayer',
  component: 'video-player',
  parameters: {
    viewmode: 'story'
  }
};

export const VideoPlayer = () => <video-player></video-player>;