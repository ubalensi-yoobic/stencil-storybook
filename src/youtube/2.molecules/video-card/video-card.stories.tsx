import { h } from '@stencil/core';

export default {
  title: 'Molecules/VideoCard',
  component: 'video-card',
  parameters: {
    viewmode: 'story'
  }
};

export const VideoCard = () => (
  <div style={{backgroundColor:'#0f0f0f', padding:'20px', width:'fit-content'}}>
    <video-card videoTitle={'Amelie Soundtrack'} videoAuthor={'SonGodess'}></video-card>
  </div>
  );