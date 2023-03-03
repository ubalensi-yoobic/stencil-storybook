import { h } from '@stencil/core';

export default {
  title: 'Components/Button',
  component: 'bouton',
  parameters: {
    viewmode: 'story'
  },
  argTypes: {
    color: { control: 'color' },
    label: { control: 'text' }
  },
};

 const Template = (args) => (<btn-general color={args.color} label={args.label} ></btn-general>);
//  const Ex2 = (args) => (<compliment-perso name='Alizee' adjective='beautiful' ></compliment-perso>);
//  const Ex3 = (args) => (<compliment-perso name='Barbara' adjective='amazing' ></compliment-perso>);

 export const WithControl = Template.bind({});
 WithControl.args = {
    color:'blue',
    label:'Button'
};
export const BlueNoControl = (args) => (<btn-general color='red' label='test' ></btn-general>);
export const Scratch = (args) => (<btn-general color={args.color} label={args.label} ></btn-general>);