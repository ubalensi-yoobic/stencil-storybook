
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ytb-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class InputYTB {
  @Prop() placeholder: string;
  @Prop() class: string;

  render() {
    return (
      <div class={this.class}>
        <input placeholder={this.placeholder}></input>
      </div>
    );
  }
}