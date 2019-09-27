/* eslint-disable */
import React, { Component } from "react";
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Form,
  FormText,
  FormFeedback
} from "reactstrap";
import "./HomeStyle.css";
import axios from "axios";

export default class FormJodoh extends Component {
  constructor(props) {
    super(props);
    this.handleButtonCek = this.handleButtonCek.bind(this);
    this.handleButtonTry = this.handleButtonTry.bind(this);
    this.handleButtonReset = this.handleButtonReset.bind(this);
    this.state = {
      wewaran_kamu: {},
      wewaran_pasangan: {},
      match: {},
      totalurip_kamu: 0,
      totalurip_pasangan: 0,
      hasil_patemon: 0,
      isSubmitted: false,
      email: "",
      email_invalid: false,
      namaanda: "",
      namaanda_invalid: false,
      tl1: "1990-01-01",
      tl1_invalid: false,
      namapasangan: "",
      namapasangan_invalid: false,
      tl2: "1990-01-01",
      tl2_invalid: false,
      formvalid: true,
      loading: true
    };
  }

  checkWewaran = async () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
    try {
      const params = {
        tl1: this.state.tl1 + "T00:00:00Z",
        tl2: this.state.tl2 + "T00:00:00Z"
      };
      const res = await axios.post(
        "https://v6e49pog65.execute-api.ap-southeast-1.amazonaws.com/prod/tripremana/",
        params
      );
      this.setState({
        wewaran_kamu: res.data.wewaran_kamu,
        wewaran_pasangan: res.data.wewaran_pasangan,
        match: res.data.hasil_tripremana,
        totalurip_kamu: res.data.totalurip_kamu,
        totalurip_pasangan: res.data.totalurip_pasangan,
        hasil_patemon: res.data.hasil_patemon,
        loading: false
      });
    } catch (err) {
      console.log(`An Error has occured: ${err}`);
    }
  };

  handleButtonTry() {
    this.setState({ isSubmitted: false, loading: true });
  }

  checkEmailValid = email => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      this.state.email
    );
  };

  checkFormValid() {
    if (
      !this.state.email_invalid &&
      !this.state.namaanda_invalid &&
      !this.state.tl1_invalid &&
      !this.state.namapasangan_invalid &&
      !this.state.tl2_invalid
    ) {
      this.setState({ formvalid: true });
    } else {
      this.setState({ formvalid: false });
    }
  }

  handleButtonReset() {
    this.setState({
      email: "",
      email_invalid: false,
      namaanda: "",
      namaanda_invalid: false,
      tl1: "1990-01-01",
      tl1_invalid: false,
      namapasangan: "",
      namapasangan_invalid: false,
      tl2: "1990-01-01",
      tl2_invalid: false
    });
  }

  handleButtonCek = async event => {
    event.preventDefault();
    //alert(this.state.email.length);

    if (
      !this.checkEmailValid(this.state.email) &&
      this.state.email.length < 1
    ) {
      await this.setState({ email_invalid: true });
    }
    if (this.state.namaanda.length === 0) {
      await this.setState({ namaanda_invalid: true });
    }
    if (this.state.tl1.length === 0) {
      await this.setState({ tl1_invalid: true });
    }
    if (this.state.namapasangan.length === 0) {
      await this.setState({ namapasangan_invalid: true });
    }
    if (this.state.tl2.length === 0) {
      await this.setState({ tl2_invalid: true });
    }
    this.checkFormValid();
    this.state.formvalid
      ? this.setState({ isSubmitted: true })
      : this.setState({ isSubmitted: false });

    this.checkWewaran();
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });

    if (event.target.name === "email") {
      if (this.checkEmailValid(this.state.email)) {
        this.setState({ [`${event.target.name}_invalid`]: false });
      }
    } else {
      this.setState({ [`${event.target.name}_invalid`]: false });
    }
    this.checkFormValid();
  };

  render() {
    const isSubmitted = this.state.isSubmitted;
    return (
      <div>
        {!isSubmitted ? (
          <Form>
            <h6 style={{ textAlign: "center" }}>
              Cek <strong>kecocokan jodoh</strong>* anda sekarang
            </h6>
            <FormGroup style={{ marginBottom: 6 }}>
              <Label for="email" className="label">
                Alamat Email Anda
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      borderRadius: "10px 0 0 10px",
                      borderRight: "none",
                      padding: 5
                    }}
                  >
                    <img src="email.png" alt="email" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="contoh: love@tresnan.co"
                  className="form-control"
                  style={{
                    borderRadius: "0 10px 10px 0",
                    height: "38px",
                    fontSize: "0.75rem",
                    paddingLeft: 5
                    // background: 'url(email.png) no-repeat scroll 7px 7px',
                    // backgroundColor: '#ffffff',
                    // paddingLeft: 35,
                  }}
                  value={this.state.email}
                  onChange={this.changeHandler}
                  invalid={this.state.email_invalid}
                />

                <FormFeedback className="formfeedback">
                  Mohon mengisi email anda sesuai format baku (contoh:
                  love@tresnan.co)
                </FormFeedback>
              </InputGroup>
              <FormText style={{ textAlign: "right", fontSize: "0.65em" }}>
                <i>Kami tidak akan membagikan email anda kepada siapapun</i>
              </FormText>
            </FormGroup>
            <FormGroup style={{ marginBottom: 6 }}>
              <Label for="namaanda" className="label">
                Nama Anda
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      borderRadius: "10px 0 0 10px",
                      borderRight: "none",
                      padding: 5
                    }}
                  >
                    <img src="user.png" alt="user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  name="namaanda"
                  id="namaanda"
                  placeholder="contoh: Mr./Mrs. Smith"
                  style={{
                    borderRadius: "0 10px 10px 0",
                    height: "38px",
                    fontSize: "0.75em",
                    paddingLeft: 5
                  }}
                  value={this.state.namaanda}
                  onChange={this.changeHandler}
                  invalid={this.state.namaanda_invalid}
                />
                <FormFeedback className="formfeedback">
                  Mohon mengisi nama anda
                </FormFeedback>
              </InputGroup>
            </FormGroup>
            <FormGroup style={{ marginBottom: 6 }}>
              <Label for="tl2" className="label">
                Tanggal Lahir Anda
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      borderRadius: "10px 0 0 10px",
                      borderRight: "none",
                      padding: 7
                    }}
                  >
                    <img src="calendar.png" alt="user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="date"
                  name="tl1"
                  id="tl1"
                  placeholder="date placeholder"
                  style={{
                    borderRadius: "0 10px 10px 0",
                    height: "38px",
                    fontSize: "0.75em",
                    paddingLeft: 5
                  }}
                  value={this.state.tl1}
                  onChange={this.changeHandler}
                  invalid={this.state.tl1_invalid}
                />
                <FormFeedback className="formfeedback">
                  Mohon mengisi tanggal lahir anda
                </FormFeedback>
              </InputGroup>
            </FormGroup>
            <FormGroup style={{ marginBottom: 6 }}>
              <Label for="namapasangan" className="label">
                Nama Pasangan Anda
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      borderRadius: "10px 0 0 10px",
                      borderRight: "none",
                      padding: 5
                    }}
                  >
                    <img src="user.png" alt="user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  name="namapasangan"
                  id="namapasangan"
                  placeholder="contoh: Mr./Mrs. Smith"
                  style={{
                    borderRadius: "0 10px 10px 0",
                    height: "38px",
                    fontSize: "0.75em",
                    paddingLeft: 5
                  }}
                  value={this.state.namapasangan}
                  onChange={this.changeHandler}
                  invalid={this.state.namapasangan_invalid}
                />
                <FormFeedback className="formfeedback">
                  Mohon mengisi nama pasangan anda
                </FormFeedback>
              </InputGroup>
            </FormGroup>
            <FormGroup style={{ marginBottom: 6 }}>
              <Label for="tl2" className="label">
                Tanggal Lahir Pasangan Anda
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      borderRadius: "10px 0 0 10px",
                      borderRight: "none",
                      padding: 7
                    }}
                  >
                    <img src="calendar.png" alt="user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="date"
                  name="tl2"
                  id="tl2"
                  placeholder="date placeholder"
                  style={{
                    borderRadius: "0 10px 10px 0",
                    height: "38px",
                    fontSize: "0.75em",
                    paddingLeft: 5
                  }}
                  value={this.state.tl2}
                  onChange={this.changeHandler}
                  invalid={this.state.tl2_invalid}
                />
                <FormFeedback className="formfeedback">
                  Mohon mengisi tanggal lahir pasangan anda
                </FormFeedback>
              </InputGroup>
            </FormGroup>{" "}
            {/* <FormGroup style={{fontSize: '0.75em', width: '100%'}}>
              <Label for="radio1" className="label">
                Hubungan anda dengan pasangan
              </Label>
              <br />

              <FormGroup check inline style={{marginLeft: 10}}>
                <Label check>
                  <Input type="radio" id="hubungan" name="radio1" /> PDKT
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" id="hubungan" name="radio1" /> Pacaran
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" id="hubungan" name="radio1" /> Menikah
                </Label>
              </FormGroup>
            </FormGroup> */}
            <Button
              style={{
                fontSize: "0.9rem",
                backgroundColor: "#b5b5b5",
                borderRadius: 10,
                border: "none",
                boxShadow: "0 2px 2px grey",
                padding: "8px 20px 8px 20px",
                margin: "10px 0 0 0"
              }}
              onClick={this.handleButtonReset}
            >
              Muat Ulang
            </Button>{" "}
            <Button
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                backgroundColor: "#FC5185",
                borderRadius: 10,
                border: "none",
                boxShadow: "0 2px 2px grey",
                padding: "8px 20px 8px 20px",
                margin: "10px 0 0 0"
              }}
              onClick={this.handleButtonCek}
            >
              Cek Sekarang >>
            </Button>
          </Form>
        ) : (
          <div>
            {this.state.loading ? (
              <div className="lds-css ng-scope" style={{ textAlign: "center" }}>
                Harap menunggu...
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    alignContent: "center"
                  }}
                  className="lds-heart"
                >
                  <div></div>
                </div>
              </div>
            ) : (
              <div>
                <h6 style={{ textAlign: "center" }}>
                  Hasil <strong>kecocokan jodoh</strong>
                  {"* "}
                  <span style={{ textTransform: "capitalize" }}>
                    {this.state.namaanda}
                  </span>{" "}
                  &{" "}
                  <span style={{ textTransform: "capitalize" }}>
                    {this.state.namapasangan}
                  </span>
                </h6>
                <br />
                <div style={{ fontSize: "0.8rem" }}>
                  <p>
                    <span style={{ textTransform: "capitalize" }}>
                      {this.state.namaanda}
                    </span>{" "}
                    lahir pada hari{" "}
                    <strong>
                      {`${this.state.wewaran_kamu.saptawara}, ${this.state.wewaran_kamu.pancawara}, ${this.state.wewaran_kamu.sadwara}`}
                    </strong>{" "}
                    dengan total urip = {this.state.totalurip_kamu}
                  </p>
                  <p>
                    <span style={{ textTransform: "capitalize" }}>
                      {this.state.namapasangan}
                    </span>{" "}
                    lahir pada hari{" "}
                    <strong>
                      {`${this.state.wewaran_pasangan.saptawara}, ${this.state.wewaran_pasangan.pancawara}, ${this.state.wewaran_pasangan.sadwara}`}
                    </strong>{" "}
                    dengan total urip = {this.state.totalurip_pasangan}
                  </p>
                  <p>
                    Berdasarkan perhitungan perjodohan dari Lontar Tri Premana,
                    kecocokan{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {this.state.namaanda}
                    </span>{" "}
                    dan{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {this.state.namapasangan}
                    </span>{" "}
                    adalah {this.state.match.level}. {this.state.match.detail}{" "}
                    Disarankan anda dan pasangan untuk {this.state.match.saran}
                  </p>

                  <br />
                  <Button
                    style={{
                      fontSize: "0.9rem",
                      backgroundColor: "#FC5185",
                      borderRadius: 10,
                      border: "none",
                      boxShadow: "0 2px 2px grey",
                      padding: "8px 20px 8px 20px"
                    }}
                    onClick={this.handleButtonTry}
                  >
                    Coba Lagi
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
