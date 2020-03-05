import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <div
          style={{
            padding: '20px 30px',
            fontSize: '0.8em',
            textColor: 'grey',
          }}
        >
          <Row>
            <Col md="6">
              <div style={{textAlign: 'center', padding: '8px'}}>
                <strong>© Tresnan 2017-2020</strong>
              </div>
            </Col>
            <Col md="6">
              <div style={{textAlign: 'center', padding: '8px'}}>
                <a
                  href="https://www.instagram.com/tresnan.bali/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="iglogo2.jpg" alt="tresnan.bali" width="25px" />{' '}
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
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
