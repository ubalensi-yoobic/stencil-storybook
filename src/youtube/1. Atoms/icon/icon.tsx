import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ytb-icon',
  styleUrl: 'icon.scss',
  scoped: true
})
export class GhIcon {
  @Prop() type: string;
  @Prop() color = 'red';

  render() {
    return <i class={this.type} color={this.color}></i>;
  }
}
