import { Component, h, Host, Prop } from '@stencil/core';
export type TShape = 'round' | 'rectangle';
export type TColor = 'transparent' | 'white' | 'black' | 'grey';
export type TSize = 'small' | 'medium' | 'medium-plus' | 'big';

@Component({
  tag: 'button-ytb',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonYTB {
  @Prop({ reflect: true }) type: string;
  @Prop({ reflect: true }) shape: TShape;
  @Prop({ reflect: true }) color: TColor;
  @Prop({ reflect: true }) size: TSize;

  render() {
    return (
      <Host>
        <button>
          <slot />
        </button>
      </Host>
    );
  }
}
