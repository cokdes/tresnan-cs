import React, {Component} from 'react';
import {Container, Navbar, NavbarBrand, Row, Col} from 'reactstrap';
import FormJodoh from './FormJodoh';
import Background from './cute.jpg';

export default class Home extends Component {
  render() {
    return (
      <div style={{fontFamily: '"Poppins", sans-serif'}}>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <img src="logo_tresnan.png" alt="Logo" width="120" />
          </NavbarBrand>
        </Navbar>
        <Container>
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
                  *) Perhitungan kecocokan jodoh ini adalah berdasarkan warisan
                  budaya nusantara yang tertuang di dalam lontar Tri Premana
                  yang menghitung kombinasi pertemuan hari kelahiran pasangan.
                  Pelajari lebih lanjut <a href="/">disini</a>.
                </p>
              </div>
            </Col>
            <Col md="7">
              <div
                className="right-section"
                style={{
                  backgroundImage: `url("${Background}")`,
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
