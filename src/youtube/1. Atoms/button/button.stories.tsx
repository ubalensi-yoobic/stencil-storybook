import { h } from '@stencil/core';

export default {
  title: 'Atoms/Button',
  component: 'button',
  parameters: {
    viewmode: 'story'
  }
};

export const Button = () => (
    <div style={{backgroundColor:'#0f0f0f', padding:'20px', width:'100%', height:'500px', display:'flex', flexDirection:'row'}}>
      <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignContent:'space-between'}}>
        <button-ytb class={'rond-r50-colored'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </button-ytb>
      <button-ytb class={'rond-r50-transparent'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
        </svg></button-ytb>
      </div>
      <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column'}}>
        <button-ytb class={'r8-secondary'}>Secondary radius 8</button-ytb>
        <button-ytb class={'r8-primary'}>Primary radius 8</button-ytb>
      </div>
      <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column'}}>
        <button-ytb class={'r16-secondary'}>Secondary radius 16</button-ytb>
        <button-ytb class={'r16-primary'}>Primary radius 16</button-ytb>
      </div>
      <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column'}}>
        <button-ytb class={'right-r16-solid-border'}>r16-right-solid-border</button-ytb>
        <button-ytb class={'left-r16-right-border'}>left-r16-right-border</button-ytb>
        <button-ytb class={'right-r16-left-border'} hoverText={'je suis la'}>right-r16-left-border</button-ytb>
      </div>
    </div>
  );

