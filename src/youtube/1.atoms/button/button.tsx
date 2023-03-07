import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-ytb',
  styleUrl: 'button.scss',
  shadow: true
})
export class ButtonYTB {
  @Prop() class: string;

  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}