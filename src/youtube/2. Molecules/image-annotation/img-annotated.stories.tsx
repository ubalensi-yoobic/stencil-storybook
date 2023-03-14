import { h } from '@stencil/core';

export default {
  title: 'Molecules/ImgAnnotated',
  component: 'annotated-img',
  parameters: {
    viewmode: 'story'
  }
};

export const ImgAnnotated = () => (
    <img-annotated ></img-annotated>
  );