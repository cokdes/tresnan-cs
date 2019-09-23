import React, { Component } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Form,
  Button
} from "reactstrap";
import FormJodoh from "./FormJodoh";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleButtonCek = this.handleButtonCek.bind(this);
    this.handleButtonTry = this.handleButtonTry.bind(this);
    this.state = {
      wewaran_kamu: {},
      wewaran_pasangan: {},
      match: {},
      isSubmitted: false
    };
  }

  fetchProducts = async () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
    try {
      const params = {
        tl1: "1985-03-25T00:00:00Z",
        tl2: "1985-07-28T00:00:00Z"
      };
      const res = await axios.post(
        "https://v6e49pog65.execute-api.ap-southeast-1.amazonaws.com/prod/tripremana/",
        params
      );
      this.setState({ wewaran_kamu: res.data.wewaran_kamu });
      this.setState({ wewaran_pasangan: res.data.wewaran_pasangan });
      this.setState({ match: res.data.hasil_tripremana });
    } catch (err) {
      console.log(`An Error has occured: ${err}`);
    }
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  handleButtonTry() {
    this.setState({ isSubmitted: false });
  }

  handleButtonCek() {
    this.setState({ isSubmitted: true });
  }

  render() {
    const isSubmitted = this.state.isSubmitted;

    return (
      <div style={{ fontFamily: '"Poppins", sans-serif' }}>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <img src="logo_tresnan.png" alt="Logo" width="100" />
          </NavbarBrand>
        </Navbar>
        <Container>
          <br />
          <Row>
            <Col md="5">
              <h5 style={{ color: "#364F6B", fontSize: "1.4em" }}>
                Karena <strong>hidup</strong> anda begitu{" "}
                <strong>berharga</strong>
              </h5>
              <p style={{ color: "#dd8218" }}>
                Pilihlah <strong>jodoh terbaik untuk menjalaninya</strong>
              </p>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 15,
                  padding: 12,
                  boxShadow: "0px 2px 4px grey"
                }}
              >
                <Form>
                  {isSubmitted ? (
                    <div>
                      Mantapp
                      <br />
                      <Button
                        style={{
                          backgroundColor: "#FC5185",
                          borderRadius: 10,
                          border: "none",
                          boxShadow: "0 2px 2px grey",
                          padding: "12px 30px 12px 30px"
                        }}
                        onClick={this.handleButtonTry}
                      >
                        Coba Lagi
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <FormJodoh />
                      <Button
                        style={{
                          backgroundColor: "#FC5185",
                          borderRadius: 10,
                          border: "none",
                          boxShadow: "0 2px 2px grey",
                          padding: "12px 30px 12px 30px"
                        }}
                        onClick={this.handleButtonCek}
                      >
                        Cek Sekarang >>
                      </Button>
                    </div>
                  )}

                  <br />
                  <p style={{ fontSize: "0.8rem" }}>
                    *) Perhitungan kecocokan jodoh ini adalah berdasarkan
                    warisan budaya nusantara yang tertuang di dalam lontar Tri
                    Premana yaitu pertemuan hari kelahiran pasangan. Pelajari
                    lebih lanjut <a href="/">disini</a>.
                  </p>
                </Form>
              </div>
              <div>
                Kamu lahir pada hari : {this.state.wewaran_kamu.saptawara},{" "}
                {this.state.wewaran_kamu.pancawara}
                <br />
                {this.state.match.level}
              </div>
            </Col>
            <Col md="6">Ini images nya</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
