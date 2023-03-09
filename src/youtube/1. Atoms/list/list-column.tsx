import { Component, h } from '@stencil/core';

@Component({
  tag: 'list-col',
  styleUrl: 'list-column.scss',
  shadow: true
})
export class ListColumn {

  render() {
    return (
      <div class='list-column'>
        <slot />
      </div>
    );
  }
}