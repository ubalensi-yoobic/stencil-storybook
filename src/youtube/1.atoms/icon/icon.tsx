
import { Component, h } from '@stencil/core';

@Component({
  tag: 'ytb-icon',
  styleUrl: 'icon.scss',
  scoped: true
})
export class GhIcon {
  //@Prop({ reflect: true }) type: string;
  //@Prop() color = '';

  render() {
    return <svg class="bi-volume-mute-fill"></svg>
    //<i class={this.type} style={{ color: this.color }}></i>;
  }
}