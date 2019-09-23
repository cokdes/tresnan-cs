import React, { Component } from "react";
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import "./HomeStyle.css";

export default class FormJodoh extends Component {
  render() {
    return (
      <div>
        <h6 style={{ textAlign: "center" }}>
          Cek <strong>kecocokan jodoh</strong> anda sekarang
        </h6>
        <FormGroup style={{ marginBottom: 6 }}>
          <Label for="email" className="label">
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
                <i class="material-icons md-18">email</i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <FormGroup style={{ marginBottom: 6 }}>
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
                height: "38px",
                fontSize: "0.85rem"
              }}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup style={{ marginBottom: 6 }}>
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
                <i class="material-icons md-18">date_range</i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <FormGroup style={{ marginBottom: 6 }}>
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
                height: "38px",
                fontSize: "0.85rem"
              }}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup style={{ marginBottom: 6 }}>
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
                <i class="material-icons md-18">date_range</i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>{" "}
        <FormGroup style={{ fontSize: "0.85rem", width: "100%" }}>
          <Label for="radio1" className="label">
            Hubungan anda dengan pasangan
          </Label>
          <br />

          <FormGroup check inline style={{ marginLeft: 10 }}>
            <Label check>
              <Input type="radio" name="radio1" /> PDKT
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
      </div>
    );
  }
}
