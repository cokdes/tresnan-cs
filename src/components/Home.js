import React, {Component} from 'react';
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
} from 'reactstrap';
import axios from 'axios';

export default class Home extends Component {
  state = {
    wewaran_kamu: {},
    wewaran_pasangan: {},
    match: {},
  };

  fetchProducts = async () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
    try {
      const params = {
        tl1: '1985-03-25T00:00:00Z',
        tl2: '1985-07-28T00:00:00Z',
      };
      const res = await axios.post(
        'https://v6e49pog65.execute-api.ap-southeast-1.amazonaws.com/prod/tripremana/',
        params
      );
      this.setState({wewaran_kamu: res.data.wewaran_kamu});
      this.setState({wewaran_pasangan: res.data.wewaran_pasangan});
      this.setState({match: res.data.hasil_tripremana});
    } catch (err) {
      console.log(`An Error has occured: ${err}`);
    }
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <img src="logo_tresnan.png" alt="Logo" width="80" />
          </NavbarBrand>
        </Navbar>
        <Container>
          <Row>
            <Col md="6">
              <h5 color="#364F6B">Cek Kecocokan Jodoh Kamu</h5>
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Form>
                  <FormGroup>
                    <Label for="tl2" style={{margin: 10, fontSize: '0.85rem'}}>
                      Tanggal Lahir Kamu
                    </Label>
                    <Input
                      type="date"
                      name="tl1"
                      id="tl1"
                      placeholder="date placeholder"
                      style={{borderRadius: 18, width: 300}}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="tl2" style={{margin: 10, fontSize: '0.85rem'}}>
                      Tanggal Lahir Pasanganmu
                    </Label>
                    <Input
                      type="date"
                      name="tl2"
                      id="tl2"
                      placeholder="date placeholder"
                      style={{borderRadius: 18, width: 300}}
                    />
                  </FormGroup>{' '}
                  <Button
                    style={{
                      backgroundColor: '#FC5185',
                      borderRadius: 18,
                      border: 'none',
                      width: 100,
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
              <div>
                Kamu lahir pada hari : {this.state.wewaran_kamu.saptawara},{' '}
                {this.state.wewaran_kamu.pancawara}
                <br />
                {this.state.match.level}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
