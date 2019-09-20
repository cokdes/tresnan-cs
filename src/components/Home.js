import React, { Component } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import axios from "axios";

export default class Home extends Component {
  state = {
    wewaran_kamu: {},
    wewaran_pasangan: {},
    match: {}
  };

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

  render() {
    return (
      <div style={{ fontFamily: '"Poppins", sans-serif' }}>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <img src="logo_tresnan.png" alt="Logo" width="100" />
          </NavbarBrand>
        </Navbar>
        <Container>
          <Row>
            <Col md="6">
              <h5 style={{ color: "#364F6B", fontSize: "1.2em" }}>
                Karena <strong>hidup</strong> anda begitu berharga
              </h5>
              <p style={{ color: "orange" }}>
                Pilihlah jodoh terbaik untuk menjalaninya
              </p>
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 15,
                  padding: 12,
                  boxShadow: "0px 2px 4px grey"
                }}
              >
                <h6 style={{ textAlign: "center" }}>
                  Cek kecocokan jodoh anda sekarang
                </h6>
                <Form>
                  <FormGroup style={{ marginBottom: 6 }}>
                    <Label
                      for="email"
                      style={{ margin: 10, fontSize: "0.85rem" }}
                    >
                      Alamat Email Anda
                    </Label>
                    <InputGroup>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="jayaprana@tresnan.co"
                        style={{
                          borderRadius: "10px 0 0 10px",
                          height: "38px",
                          fontSize: "0.85rem"
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText
                          style={{
                            backgroundColor: "none",
                            borderRadius: "0 10px 10px 0"
                          }}
                        >
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 6 }}>
                    <Label
                      for="namaanda"
                      style={{ margin: 10, fontSize: "0.85rem" }}
                    >
                      Nama Anda
                    </Label>
                    <InputGroup>
                      <Input
                        type="text"
                        name="namaanda"
                        id="namaanda"
                        placeholder="Mr./Mrs. Smith"
                        style={{
                          borderRadius: 10,
                          height: "38px",
                          fontSize: "0.85rem"
                        }}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 6 }}>
                    <Label
                      for="tl2"
                      style={{ margin: 10, fontSize: "0.85rem" }}
                    >
                      Tanggal Lahir Anda
                    </Label>
                    <InputGroup>
                      <Input
                        type="date"
                        name="tl1"
                        id="tl1"
                        placeholder="date placeholder"
                        style={{
                          borderRadius: "10px 0 0 10px",
                          height: "38px",
                          fontSize: "0.85rem"
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText
                          style={{
                            backgroundColor: "none",
                            borderRadius: "0 10px 10px 0"
                          }}
                        >
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 6 }}>
                    <Label
                      for="namapasangan"
                      style={{ margin: 10, fontSize: "0.85rem" }}
                    >
                      Nama Pasangan Anda
                    </Label>
                    <InputGroup>
                      <Input
                        type="text"
                        name="namapasangan"
                        id="namapasangan"
                        placeholder="Mr./Mrs. Smith"
                        style={{
                          borderRadius: 10,
                          height: "38px",
                          fontSize: "0.85rem"
                        }}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 6 }}>
                    <Label
                      for="tl2"
                      style={{ margin: 10, fontSize: "0.85rem" }}
                    >
                      Tanggal Lahir Pasangan Anda
                    </Label>
                    <InputGroup>
                      <Input
                        type="date"
                        name="tl2"
                        id="tl2"
                        placeholder="date placeholder"
                        style={{
                          borderRadius: "10px 0 0 10px",
                          height: "38px",
                          fontSize: "0.85rem"
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText
                          style={{
                            backgroundColor: "none",
                            borderRadius: "0 10px 10px 0"
                          }}
                        >
                          @
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>{" "}
                  <FormGroup style={{ fontSize: "0.85rem" }}>
                    <Label for="radio1" style={{ margin: 10 }}>
                      Hubungan anda dengan pasangan
                    </Label>
                    <br />

                    <FormGroup check inline style={{ marginLeft: 10 }}>
                      <Label check>
                        <Input type="radio" name="radio1" checked /> PDKT
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="radio" name="radio1" /> Pacaran
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="radio" name="radio1" /> Menikah
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <br />
                  <Button
                    style={{
                      backgroundColor: "#FC5185",
                      borderRadius: 10,
                      border: "none",
                      boxShadow: "0 2px 2px grey"
                    }}
                  >
                    Cek Sekarang >>
                  </Button>
                  <br />
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
