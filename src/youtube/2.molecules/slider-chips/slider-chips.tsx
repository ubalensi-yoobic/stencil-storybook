import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'slider-chips',
	styleUrl: 'slider-chips.scss',
	shadow: true
})
export class Slider {
    @Prop()


	render() {
		return (
			<div class="wrapper">
      <div class="icon"><i id="left" class="fa-solid fa-angle-left"></i></div>
      <ul class="tabs-box">
        <slot></slot>
      </ul>
      <div class="icon"><i id="right" class="fa-solid fa-angle-right"></i></div>
    </div>
		);
	}

}