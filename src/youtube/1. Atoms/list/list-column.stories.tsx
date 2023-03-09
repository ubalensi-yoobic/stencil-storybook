import { h } from '@stencil/core';

export default {
  title: 'Atoms/ListColumn',
  component: 'list-column',
  parameters: {
    viewmode: 'story'
  }
};

export const ListColumn = () => (
  <div style={{display:'flex', flexDirection:'row', alignContent:'space-between'}}>
    <list-col>
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
        <p>item 4</p>
    </list-col>
    <list-col>
        <img-video bradius={true}></img-video>
        <img-video bradius={true}></img-video>
        <img-video bradius={true}></img-video>
        <img-video bradius={true}></img-video>
    </list-col>
    <list-col>
        <div style={{width:'100px', height:'100px', backgroundColor:'blue', border:'solid 1px black'}} ></div>
        <div style={{width:'100px', height:'100px', backgroundColor:'blue', border:'solid 1px black'}} ></div>
        <div style={{width:'100px', height:'100px', backgroundColor:'blue', border:'solid 1px black'}} ></div>
        <div style={{width:'100px', height:'100px', backgroundColor:'blue', border:'solid 1px black'}} ></div>
    </list-col>
  </div>);