import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'slider-chips',
  styleUrl: 'slider-chips.scss',
  shadow: true
})
export class Slider {
  @Prop() tags = [{ value: 'tag1', class: 'class' }];
  @State() rightEnd = false;
  @State() leftEnd = true;

  tagsTab!: HTMLElement;

  readonly scrollAmount = 100;

  scrollTagsTab(direction: 'right' | 'left') {
    console.log('avant right', this.rightEnd)
    console.log('this.tagsTab.scrollWidth', this.tagsTab.scrollWidth);
    console.log('this.tagsTab.clientWidth', this.tagsTab.clientWidth);
    console.log('this.tagsTab.scrollLeft', this.tagsTab.scrollLeft);

    this.tagsTab.scrollBy({
      top: 0,
      left: direction === 'right' ? this.scrollAmount : -this.scrollAmount,
      behavior: 'smooth'
    });
    this.rightEnd = Math.abs(this.tagsTab.scrollWidth - this.tagsTab.clientWidth - this.tagsTab.scrollLeft) < 10;
    this.leftEnd = this.tagsTab.scrollLeft < 1;
    console.log('après right', this.rightEnd)

    console.log('this.tagsTab.scrollWidth', this.tagsTab.scrollWidth);
    console.log('this.tagsTab.clientWidth', this.tagsTab.clientWidth);
    console.log('this.tagsTab.scrollLeft', this.tagsTab.scrollLeft);
  }

  render() {
    return (
      <div class="wrapper">
        <div class={this.leftEnd ? 'no-arrow' : 'arrow'}>
          <button-ytb class={'rond-r50-transparent'} onClick={() => this.scrollTagsTab('left')}>
            <ytb-icon type={'bi bi-caret-left'}></ytb-icon>
          </button-ytb>
        </div>
        <div class={'tags-tab'} ref={(el) => (this.tagsTab = el as HTMLElement)}>
          {this.tags.map((item) => (
            <button-ytb class={item.class}>{item.value}</button-ytb>
          ))}
        </div>
        <div class={this.rightEnd ? 'no-arrow' : 'arrow'}>
          <button-ytb class={'rond-r50-transparent'} onClick={() => this.scrollTagsTab('right')}>
            <ytb-icon type={'bi bi-caret-right'}></ytb-icon>
          </button-ytb>
        </div>
      </div>
    );
  }
}
