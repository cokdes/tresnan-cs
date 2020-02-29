import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          padding: '20px 30px',
          textAlign: 'center',
          fontSize: '0.8em',
          textColor: 'grey',
        }}
      >
        <div>
          <strong>© Tresnan 2020</strong>
        </div>
        <div style={{padding: '8px'}}>
          <a
            href="https://www.instagram.com/tresnan.bali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="iglogo.webp" alt="tresnan.bali" width="25px" />{' '}
          </a>
          <a
            href="https://www.facebook.com/tresnan.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="fblogo.png" alt="tresnan.bali" width="25px" />{' '}
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6281338797128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="walogo.jpeg" alt="tresnan.bali" width="25px" />{' '}
          </a>
        </div>
      </div>
    );
  }
}
