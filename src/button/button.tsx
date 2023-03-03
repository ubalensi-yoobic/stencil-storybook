import { Component, h,Prop } from '@stencil/core';

@Component({
  tag: 'btn-general',
})
export class MyButton {
  @Prop() label: string;
  @Prop() color: string;

  render() {
    return <button style={{backgroundColor:this.color}} >{this.label}</button>;
  }
}