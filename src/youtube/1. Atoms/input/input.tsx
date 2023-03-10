import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ytb-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class InputYTB {
  @Prop() placeholder: string;
  @Prop() type: string;

  render() {
    return (
      <div class={this.type}>
        <input placeholder={this.placeholder}></input>
      </div>
    );
  }
}
