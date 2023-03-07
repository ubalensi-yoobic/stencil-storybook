import { h } from '@stencil/core';

export default {
  title: 'Components/Rating',
  component: 'rating',
  parameters: {
    viewmode: 'story'
  },
  argTypes: {
    maxValue: { control: 'number' },
    value:{ control: 'number' },
    color: { control: 'color' }
  },
};

export const Rating = (args) => (
  <div>
    <my-rating id="myRatingComponent" max-value="6" value="2" color='blue'></my-rating>
    <my-rating id="myRatingComponent" max-value="6" value="2" color='orange'></my-rating>
    <my-rating id="myRatingComponent" max-value="6" value="2" color='red'></my-rating>
    <my-rating id="myRatingComponent" max-value="6" value="2" color='green'></my-rating>
    <my-rating id="myRatingComponent" max-value={args.maxValue} value={args.value} color={args.color}></my-rating>
  </div>);
