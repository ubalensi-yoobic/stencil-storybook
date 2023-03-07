
import  { Component, h,Prop, State } from  '@stencil/core';

@Component({
   tag: 'my-rating',
   styleUrl: 'rating.scss',
   shadow: true
})
export  class  MyRatingComponent  {
  @Prop() maxValue =  5;
  @Prop() value = 0;
  @Prop() color = 'orange';

  @State() starList: Array<object> = [];

  componentWillLoad() {
    this.createStarList(this.value);
  }
  setValue(newValue) {
    this.value = newValue;
    this.createStarList(this.value);
  }

  createStarList(numberOfStars: number) {
    const starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= numberOfStars) {
        starList.push(<span style={{color:this.color}} onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2605;</span>);
      } else {
        starList.push(<span onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.value)} onClick={() => this.setValue(i)}>&#x2606;</span>);
      }
    }

    this.starList = starList;
  }
  render() {
    return  (
      <div>
        {this.starList}
      </div>
    );
   }
}
