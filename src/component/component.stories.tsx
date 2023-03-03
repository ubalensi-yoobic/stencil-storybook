import { h } from '@stencil/core';

export default {
  title: 'Components/Compliment-generator',
  component: 'Compliment-generator',
  parameters: {
    viewmode: 'story'
  },
  argTypes: {
    name: { control: 'text' },
    adjective: {
      control: { type: 'select' },
      options: ['cool', 'beautiful', 'amazing','strong', 'creative'],
    },
  },
};

 const Template = (args) => (<compliment-perso name={args.name} adjective={args.adjective} ></compliment-perso>);
//  const Ex2 = (args) => (<compliment-perso name='Alizee' adjective='beautiful' ></compliment-perso>);
//  const Ex3 = (args) => (<compliment-perso name='Barbara' adjective='amazing' ></compliment-perso>);

 export const WithControl = Template.bind({});
 WithControl.args = {
  name:'Alizee',
  adjective:'cool'
};
export const WithoutControl = () => (<compliment-perso name='John' adjective='cool' ></compliment-perso>);



