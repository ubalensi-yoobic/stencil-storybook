import { Component, h } from '@stencil/core';

@Component({
  tag: 'ytb-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true
})
export class SearchBarYTB {
  render() {
    return (
      <div class={'search-bar-container'} style={{ display: 'flex', flexDirection: 'row', maxWidth: '644px', height: '40px' }}>
        <ytb-input type={'search'} placeholder={'Search'}></ytb-input>
        <button-ytb type={'right-r16-solid-border'}>
          <ytb-icon type={'bi bi-search'} color={'white'} style={{ width: '25px', height: '20px', padding: '0 5px' }}></ytb-icon>
        </button-ytb>
      </div>
    );
  }
}
