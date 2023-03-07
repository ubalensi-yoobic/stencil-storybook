import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'txt-ytb',
  styleUrl: 'txt.scss',
  shadow: true
})
export class TextYTB {
  @Prop() class: string;

  render() {
    return (
      <p><slot/></p>
    );
  }
}