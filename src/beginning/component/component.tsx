import { Component, h,Prop } from '@stencil/core';

@Component({
  tag: 'compliment-perso',
  styleUrl: 'component.css',
})
export class MyComponent {
  @Prop() name: string;
  @Prop() adjective: string;

  render() {
    return <div>Hello, {this.name}! You are {this.adjective} !</div>;
  }
}