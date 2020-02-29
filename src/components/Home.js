import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import FormJodoh from './FormJodoh';
import Background from './cute.jpg';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div style={{fontFamily: '"Poppins", sans-serif'}}>
        <Container>
          <div style={{padding: '8'}}>
            <Row>
              <Col md="5">
                <h4 style={{color: '#364F6B'}}>
                  <strong>
                    Karena hidup anda begitu{' '}
                    <span style={{color: '#3c9d9b'}}>berharga</span>
                  </strong>
                </h4>
                <h6 style={{color: '#dd8218'}}>
                  Pilihlah <strong>jodoh terbaik untuk menjalaninya</strong>
                </h6>
                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: 15,
                    padding: 15,
                    margin: 0,
                    boxShadow: '0px 2px 4px grey',
                  }}
                >
                  <FormJodoh />

                  <br />
                  <p style={{fontSize: '0.7rem'}}>
                    *) Perhitungan kecocokan jodoh ini adalah berdasarkan
                    warisan budaya nusantara (Lontar Tripramana) berdasarkan
                    kombinasi hari kelahiran pasangan (Saptawara, Pancawara,
                    Sadwara).
                  </p>
                </div>
              </Col>
              <Col md="7">
                <div
                  className="right-section"
                  style={{
                    backgroundImage: `url("${Background}")`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '500px',
                  }}
                ></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Footer />
              </Col>
            </Row>
          </div>
        </Container>
        <div class="elfsight-app-de2cba49-4609-4ac0-9047-bd868cc1b629"></div>
      </div>
    );
  }
}
