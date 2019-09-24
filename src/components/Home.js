import React, { Component } from "react";
import { Container, Navbar, NavbarBrand, Row, Col } from "reactstrap";
import FormJodoh from "./FormJodoh";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wewaran_kamu: {},
      wewaran_pasangan: {},
      match: {}
    };
  }

  render() {
    return (
      <div style={{ fontFamily: '"Poppins", sans-serif' }}>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <img src="logo_tresnan.png" alt="Logo" width="120" />
          </NavbarBrand>
        </Navbar>
        <Container>
          <Row>
            <Col md="5">
              <h5 style={{ color: "#364F6B", fontSize: "1.3em" }}>
                Karena <span style={{ fontWeight: "700" }}>hidup</span> anda
                begitu <strong>berharga</strong>
              </h5>
              <p style={{ color: "#dd8218" }}>
                Pilihlah <strong>jodoh terbaik untuk menjalaninya</strong>
              </p>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 15,
                  padding: 12,
                  margin: 0,
                  boxShadow: "0px 2px 4px grey"
                }}
              >
                <FormJodoh />

                <br />
                <p style={{ fontSize: "0.7rem" }}>
                  *) Perhitungan kecocokan jodoh ini adalah berdasarkan warisan
                  budaya nusantara yang tertuang di dalam lontar Tri Premana
                  yang menghitung kombinasi pertemuan hari kelahiran pasangan.
                  Pelajari lebih lanjut <a href="/">disini</a>.
                </p>
              </div>
            </Col>
            <Col md="6">Ini images nya</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
