import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Home extends Component {
    state = {
        match : {}
    }
    
    fetchProducts = async () => {
        // add call to AWS API Gateway to fetch products here
        // then set them in state
        try{
          const params = {
            "tl1" : "1985-03-25T00:00:00Z",
            "tl2" : "1985-07-28T00:00:00Z"
          }
          const res = await axios.get("https://3sr0gz6a0j.execute-api.ap-southeast-1.amazonaws.com/prod/tripremana", params);
          this.setState({match : res.data});
        }catch(err){
          console.log(`An Error has occured: ${err}`)
        }
      }    

      componentDidMount = () => {
        this.fetchProducts();
      }

    render() {
        return (
            <Container>
                <h2>Welcome</h2>
                <Form>
                    <FormGroup>
                    <Label for="exampleDate1">Tanggal Lahir Kamu</Label>
                    <Input
                        type="date"
                        name="date1"
                        id="exampleDate1"
                        placeholder="date placeholder"
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label for="exampleDate2">Tanggal Lahir Pasanganmu</Label>
                    <Input
                        type="date"
                        name="date2"
                        id="exampleDate2"
                        placeholder="date placeholder"
                    />
                    </FormGroup>
                    {' '}
                    <Button color="primary">Submit</Button>
                </Form>
                <div>
                    {this.state.match.matching_level}
                </div>
            </Container>
        )
    }
}

