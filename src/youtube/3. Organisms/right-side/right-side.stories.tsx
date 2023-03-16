import { h } from '@stencil/core';

export default {
  title: 'Organisms/RightSide',
  component: 'right-side',
  parameters: {
    viewmode: 'story'
  }
};

export const RightSide = () => (
  <right-side
  videoInfos={[
      {
        url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
        title: 'Title',
        author: 'Author',
        views: '400k',
        posted: '1 month',
        tags: ['Tout', 'Regardées'],
        duration: '38:13:05'
      },{
        url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
        title: 'Bande-son',
        author: 'Author',
        views: '400k',
        posted: '1 month',
        tags: ['Tout', 'Bande-son', 'Regardées'],
        duration: '38:13:05',
      }, {
        url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
        title: 'Musique classique',
        author: 'Author',
        views: '400k',
        posted: '1 month',
        tags: ['Tout', 'Musique classique'],
        duration: '38:13:05',
      },{
        url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
        title: 'Vidéos similaires',
        author: 'Author',
        views: '400k',
        posted: '1 month',
        tags: ['Tout', 'Vidéos similaires','Musique classique'],
        duration: '38:13:05',
      },{
        url: 'https://i.ytimg.com/vi/HGl75kurxok/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFTyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARhmIGYoZjAP&rs=AOn4CLADTwOQRan2heX1fz9sfS6vjph2Dg',
        title: 'Récemment',
        author: 'Author',
        views: '400k',
        posted: '1 month',
        tags: ['Tout', 'Vidéos mise en ligne récemment','Vidéos similaires'],
        duration: '38:13:05',
      }
    ]}
  ></right-side>
);
