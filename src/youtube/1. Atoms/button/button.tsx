import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-ytb',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonYTB {
  @Prop() type: string;

  render() {
    return (
      <button class={this.type}>
        <slot />
      </button>
    );
  }
}
