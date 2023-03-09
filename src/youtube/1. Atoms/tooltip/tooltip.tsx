import { Component, h,Prop } from '@stencil/core';

@Component({
  tag: 'tooltip-ytb',
  styleUrl: 'tooltip.scss',
  shadow: true
})
// 
export class ButtonYTB {
@Prop() tooltipText:string;

  render() {
    return (
      <div>
        <slot />
        <span class={this.tooltipText !== ''?"hovertext":''}>{this.tooltipText}</span>
      </div>
    );
  }
}