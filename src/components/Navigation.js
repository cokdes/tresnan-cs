import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./NavStyle.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ fontFamily: '"Poppins", sans-serif' }}>
        <Navbar
          color="faded"
          light
          expand="md"
          style={{
            fontSize: "0.85em",
            fontWeight: "600"
          }}
        >
          <NavbarBrand href="/">
            <img src="logo_tresnan.png" alt="Logo" width="120" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" active>
                  Cek Jodoh
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" active>
                  Tentang Tresnan
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/donation" active>
                  Donasi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact" active>
                  Hubungi Kami
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
