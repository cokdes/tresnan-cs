import React, {Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Badge,
} from 'reactstrap';
import './NavStyle.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Container>
        <div style={{fontFamily: '"Poppins", sans-serif'}}>
          <Navbar
            light
            style={{
              fontSize: '1em',
              height: '100px',
              fontWeight: '600',
              padding: 0,
            }}
            expand="md"
            fixed-top
          >
            <NavbarBrand href="/">
              <img src="tresnanlogo3.png" alt="Logo" width="150" />
            </NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://forms.gle/9Fj2wFSQeVHT8zhx8"
                  target="_blank"
                >
                  <Badge color="warning">Ikuti survey berhadiah kami!!</Badge>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </Container>
    );
  }
}
