import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'slider-chips',
  styleUrl: 'slider-chips.scss',
  shadow: true
})
export class Slider {
  @Prop() tags = [{ value: 'tag1', class: 'class' }];

  tagsTab!: HTMLElement;

  readonly scrollAmount = 100;

  scrollTagsTab(direction: 'right' | 'left') {
    this.tagsTab.scrollBy({
      top: 0,
      left: direction === 'right' ? this.scrollAmount : -this.scrollAmount,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div class="wrapper">
        <div class="arrow" onClick={() => this.scrollTagsTab('left')}>
          <ytb-icon  type={'bi bi-caret-left'}></ytb-icon>
        </div>
        <div class={"tags-tab"} ref={(el) => (this.tagsTab = el as HTMLElement)}>
          {this.tags.map((item) => (
            <button-ytb class={item.class}>{item.value}</button-ytb>
          ))}
        </div>
        <div class="arrow" onClick={() => this.scrollTagsTab('right')}>
          <ytb-icon type={'bi bi-caret-right'}></ytb-icon>
        </div>
      </div>
    );
  }
}
