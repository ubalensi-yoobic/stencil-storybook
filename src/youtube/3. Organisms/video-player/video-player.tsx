import { Component, h } from '@stencil/core';

@Component({
  tag: 'video-player',
  styleUrl: 'video-player.scss',
  shadow: true
})
export class PlayerVideoYTB {
  render() {
    return (
      <div class={'video-body'} style={{ backgroundColor: 'black', width: '1280px' }}>
        <img-ytb></img-ytb>
        <div class={'video-info'} style={{ marginTop: '12px' }}>
          <txt-ytb type={'title'} style={{ fontSize: '20px' }}>
            Amelie Full Soundtrack
          </txt-ytb>
          <div class={'details'} style={{ display: 'flex', flexDirection: 'row', margin: '10px', justifyContent: 'space-between' }}>
            <div class={'author-container'} style={{ display: 'flex', flexDirection: 'row', margin: '10px', alignItems: 'center' }}>
              <img-ytb url={'https://yt3.ggpht.com/ytc/AL5GRJV8fYsg6A8-M5JY6E3GRlT1OHf-4PhpuQRcDTrb9T0=s48-c-k-c0x00ffffff-no-rj'}></img-ytb>
              <div class={'author-info'} style={{ display: 'flex', flexDirection: 'column', margin: '0 10px' }}>
                <txt-ytb type={'title'}>Lays Alexandre</txt-ytb>
                <txt-ytb type={'normal'}>1,61 k abonnees</txt-ytb>
              </div>
              <button-ytb type={'r16 primary'} style={{ margin: '0 10px' }}>
                S'abonner
              </button-ytb>
            </div>
            <div class={'video-reaction'} style={{ display: 'flex', flexDirection: 'row', margin: '10px', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <button-ytb type={'r16 secondary'}>
                <ytb-icon type={'bi bi-hand-thumbs-up'}></ytb-icon>8,1 k<ytb-icon type={'bi bi-hand-thumbs-down'}></ytb-icon>
              </button-ytb>
              <button-ytb type={'r16 secondary'}>
                <ytb-icon type={'bi bi-reply'}></ytb-icon>Partager
              </button-ytb>
              <button-ytb type={'r16 secondary'}>
                <ytb-icon type={'bi bi-download'}></ytb-icon>Telecharger
              </button-ytb>
              <button-ytb type={'r16 secondary'}>
                <ytb-icon type={'bi bi-scissors'}></ytb-icon>Extrait
              </button-ytb>
              <button-ytb type={'r16 secondary'}>
                <ytb-icon type={'bi bi-three-dots'}></ytb-icon>
              </button-ytb>
            </div>
          </div>
          <div class={'description'} style={{ width: '1280px', backgroundColor: '#2E2E2E', borderRadius: '7px' }}>
            <button-ytb type={'r8 secondary'} style={{ display: 'flex', flexDirection: 'column' }}>
              <p>1,2 M de vues il y a 8 ans</p>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {' '}
                <p>Trilha do Filme Amélie Poulain</p> <p style={{ marginLeft: '10px', fontWeight: '30px' }}>Plus</p>
              </div>
            </button-ytb>
          </div>
        </div>
      </div>
    );
  }
}
