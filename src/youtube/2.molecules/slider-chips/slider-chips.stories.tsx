import { h } from '@stencil/core';

export default {
  title: 'Molecules/ChipsSlider',
  component: 'video-card',
  parameters: {
    viewmode: 'story'
  }
};

export const VideoCard = () => (
  <div style={{backgroundColor:'#0f0f0f', padding:'20px', width:'fit-content'}}>
    <slider-chips>
        <button-ytb>Tout</button-ytb>
        <button-ytb>Bande-son</button-ytb>
        <button-ytb>Tout</button-ytb>
        <button-ytb>Tout</button-ytb>
        <button-ytb>Tout</button-ytb>
        <button-ytb>Tout</button-ytb>
        <button-ytb>Tout</button-ytb>
        <button-ytb>Tout</button-ytb>
        <button-ytb>Tout</button-ytb>
        <button-ytb>Tout</button-ytb>
    </slider-chips>
  </div>
  );