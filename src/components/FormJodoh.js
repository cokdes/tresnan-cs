import React, {Component} from 'react';
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
  FormFeedback,
} from 'reactstrap';
import './HomeStyle.css';

export default class FormJodoh extends Component {
  constructor(props) {
    super(props);
    this.handleButtonCek = this.handleButtonCek.bind(this);
    this.handleButtonTry = this.handleButtonTry.bind(this);
    this.state = {
      wewaran_kamu: {},
      wewaran_pasangan: {},
      match: {},
      isSubmitted: false,
      email: '',
      email_invalid: false,
      namaanda: '',
      namaanda_invalid: false,
      tl1: '',
      tl1_invalid: false,
      namapasangan: '',
      namapasangan_invalid: false,
      tl2: '',
      tl2_invalid: false,
      formvalid: true,
    };
  }

  handleButtonTry() {
    this.setState({isSubmitted: false});
  }

  handleButtonCek = async event => {
    event.preventDefault();
    //alert(this.state.email.length);
    if (this.state.email.length === 0) {
      await this.setState({formvalid: false});
      await this.setState({email_invalid: true});
    } else if (this.state.namaanda.length === 0) {
      await this.setState({formvalid: false});
      await this.setState({namaanda_invalid: true});
    }

    this.state.formvalid
      ? this.setState({isSubmitted: true})
      : this.setState({isSubmitted: false});
    // alert(this.state.isSubmitted);
    // alert(
    //   this.state.email +
    //     this.state.namaanda +
    //     this.state.tl1 +
    //     this.state.namapasangan +
    //     this.state.tl2
    // );
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
    this.setState({[`${event.target.name}_invalid`]: false});
    this.setState({formvalid: true});
  };

  render() {
    const isSubmitted = this.state.isSubmitted;
    return (
      <div>
        {!isSubmitted ? (
          <Form>
            <h6 style={{textAlign: 'center'}}>
              Cek <strong>kecocokan jodoh</strong> anda sekarang
            </h6>
            <FormGroup style={{marginBottom: 6}}>
              <Label for="email" className="label">
                Alamat Email Anda
              </Label>
              <InputGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="love@tresnan.co"
                  style={{
                    borderRadius: '10px 0 0 10px',
                    height: '38px',
                    fontSize: '0.75rem',
                  }}
                  value={this.state.email}
                  onChange={this.changeHandler}
                  invalid={this.state.email_invalid}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      backgroundColor: 'none',
                      borderRadius: '0 10px 10px 0',
                    }}
                  >
                    <i class="material-icons md-18">email</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormFeedback className="formfeedback">
                  Mohon mengisi email anda sesuai format baku (contoh:
                  love@tresnan.co)
                </FormFeedback>
              </InputGroup>
              <FormText style={{textAlign: 'right', fontSize: '0.65em'}}>
                <i>Kami tidak akan membagikan email anda kepada siapapun</i>
              </FormText>
            </FormGroup>
            <FormGroup style={{marginBottom: 6}}>
              <Label for="namaanda" className="label">
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
                    height: '38px',
                    fontSize: '0.75em',
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
            <FormGroup style={{marginBottom: 6}}>
              <Label for="tl2" className="label">
                Tanggal Lahir Anda
              </Label>
              <InputGroup>
                <Input
                  type="date"
                  name="tl1"
                  id="tl1"
                  placeholder="date placeholder"
                  style={{
                    borderRadius: '10px 0 0 10px',
                    height: '38px',
                    fontSize: '0.75em',
                  }}
                  value={this.state.tl1}
                  onChange={this.changeHandler}
                  invalid={this.state.tl1_invalid}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      backgroundColor: 'none',
                      borderRadius: '0 10px 10px 0',
                    }}
                  >
                    <i class="material-icons md-18">date_range</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormFeedback className="formfeedback">
                  Mohon mengisi tanggal lahir anda
                </FormFeedback>
              </InputGroup>
            </FormGroup>
            <FormGroup style={{marginBottom: 6}}>
              <Label for="namapasangan" className="label">
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
                    height: '38px',
                    fontSize: '0.75em',
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
            <FormGroup style={{marginBottom: 6}}>
              <Label for="tl2" className="label">
                Tanggal Lahir Pasangan Anda
              </Label>
              <InputGroup>
                <Input
                  type="date"
                  name="tl2"
                  id="tl2"
                  placeholder="date placeholder"
                  style={{
                    borderRadius: '10px 0 0 10px',
                    height: '38px',
                    fontSize: '0.75em',
                  }}
                  value={this.state.tl2}
                  onChange={this.changeHandler}
                  invalid={this.state.tl2_invalid}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText
                    style={{
                      backgroundColor: 'none',
                      borderRadius: '0 10px 10px 0',
                    }}
                  >
                    <i class="material-icons md-18">date_range</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormFeedback className="formfeedback">
                  Mohon mengisi tanggal lahir pasangan anda
                </FormFeedback>
              </InputGroup>
            </FormGroup>{' '}
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
                backgroundColor: '#FC5185',
                borderRadius: 10,
                border: 'none',
                boxShadow: '0 2px 2px grey',
                padding: '12px 30px 12px 30px',
                margin: '10px 0 0 0',
              }}
              onClick={this.handleButtonCek}
            >
              Cek Sekarang >>
            </Button>
          </Form>
        ) : (
          <div>
            haloha
            <br />
            <Button
              style={{
                backgroundColor: '#FC5185',
                borderRadius: 10,
                border: 'none',
                boxShadow: '0 2px 2px grey',
                padding: '12px 30px 12px 30px',
              }}
              onClick={this.handleButtonTry}
            >
              Coba Lagi
            </Button>
          </div>
        )}
      </div>
    );
  }
}
