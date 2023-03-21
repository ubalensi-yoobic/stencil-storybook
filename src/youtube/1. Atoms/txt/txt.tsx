import { Component, h, Prop } from '@stencil/core';
export type TColorText = 'white' | 'black' | 'grey';
export type TBold = 'bold' | 'normal';
@Component({
  tag: 'txt-ytb',
  styleUrl: 'txt.scss',
  shadow: true
})
export class TextYTB {
  @Prop({ reflect: true }) color: TColorText;
  @Prop({ reflect: true }) bold: TBold;
  render() {
    return (
      <span><slot/></span>
    );
  }
}