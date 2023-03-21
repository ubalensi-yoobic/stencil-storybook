import { Component, h, Host, Prop } from '@stencil/core';
@Component({
  tag: 'ytb-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class InputYTB {
  @Prop() placeholder: string;
  @Prop({ reflect: true }) type: string;

  render() {
    return (
      <Host>
        <input placeholder={this.placeholder}></input>
      </Host>
    );
  }
}
