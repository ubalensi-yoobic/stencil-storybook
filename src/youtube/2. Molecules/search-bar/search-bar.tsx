import { Component, h } from '@stencil/core';

@Component({
  tag: 'ytb-search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true
})
export class SearchBarYTB {
  render() {
    return (
      <div style={{display:'flex', flexDirection:'row', maxWidth:'644px', height:'40px'}}>
        <ytb-input class={'search'} placeholder={'Search'} style={{ width:'540px'}}></ytb-input>
        <button-ytb class={'right-r16-solid-border'} style={{ height:'40px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style={{ padding:'0 10px'}}>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </button-ytb>
      </div>
    );
  }
}