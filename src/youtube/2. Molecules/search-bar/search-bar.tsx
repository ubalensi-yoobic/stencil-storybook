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
        <ytb-input type={'search'} placeholder={'Search'} style={{ width:'540px'}}></ytb-input>
        <button-ytb type={'right-r16-solid-border'} style={{ height:'40px', width:'32px'}}>
            <ytb-icon  type={'bi bi-search'} color={'white'} style={{width:"25px", height:"20px",padding:'0 5px'}}></ytb-icon>
        </button-ytb>
      </div>
    );
  }
}