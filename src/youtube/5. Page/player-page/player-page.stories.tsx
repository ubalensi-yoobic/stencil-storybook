import { h } from '@stencil/core';

import {Comments, videoAuthor, VideoList,videoPlayed} from '../../data';

export default {
  title: 'Pages/PlayerPage',
  component: 'gh-repo-page',
  parameters: {
    viewmode: 'story'
  }
};

export const PlayerPage = () => <player-page videoPlayed={videoPlayed} videoAuthor={videoAuthor} Comments={Comments} VideoList={VideoList}></player-page>;