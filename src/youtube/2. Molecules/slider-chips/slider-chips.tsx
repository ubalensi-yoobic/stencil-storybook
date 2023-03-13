import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'slider-chips',
  styleUrl: 'slider-chips.scss',
  shadow: true
})
export class Slider {
  @Prop() tags = ['tag1'];
  @State() rightEnd = false;
  @State() leftEnd = true;
  @State() selectedTag = 0;

  tagsTab!: HTMLElement;

  readonly scrollAmount = 100;

  atTheEnd(){
    this.rightEnd = Math.abs(this.tagsTab.scrollWidth - this.tagsTab.clientWidth - this.tagsTab.scrollLeft) < 10;
    this.leftEnd = this.tagsTab.scrollLeft < 1;
  }

  scrollTagsTab(direction: 'right' | 'left') {
    this.tagsTab.scrollBy({
      top: 0,
      left: direction === 'right' ? this.scrollAmount : -this.scrollAmount,
      behavior:'smooth',
    });
  }


  render() {
    return (
      <div class="wrapper">
        <div class={this.leftEnd ? 'no-arrow' : 'arrow'}>
          <button-ytb type={'rond-transparent'} onClick={() => this.scrollTagsTab('left')}>
            <ytb-icon type={'bi bi-chevron-left'}></ytb-icon>
          </button-ytb>
        </div>
        <div class={'tags-tab'} ref={(el) => (this.tagsTab = el as HTMLElement)} onScroll={() => this.atTheEnd()}>
          {this.tags.map((item,index) => (
            <button-ytb type={index === this.selectedTag?'r8 primary' : 'r8 secondary'} onClick={() => this.selectedTag=index}>{item}</button-ytb>
          ))}
        </div>
        <div class={this.rightEnd ? 'no-arrow' : 'arrow'}>
          <button-ytb type={'rond-transparent'} onClick={() => this.scrollTagsTab('right')}>
            <ytb-icon type={'bi bi-chevron-right'}></ytb-icon>
          </button-ytb>
        </div>
      </div>
    );
  }
}
