import { Component, h } from '@stencil/core';

@Component({
  tag: 'logo-ytb',
  styleUrl: 'logo.scss',
  shadow: true
})
export class LogoYtb {
  render() {
    return (
      <div class='logo'>
        <slot />
      </div>
    );
  }
}