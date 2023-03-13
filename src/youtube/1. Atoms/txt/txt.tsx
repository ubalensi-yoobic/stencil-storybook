import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'txt-ytb',
  styleUrl: 'txt.scss',
  shadow: true
})
export class TextYTB {
  @Prop({ reflect: true }) type: string;

  render() {
    return (
      <p><slot/></p>
    );
  }
}