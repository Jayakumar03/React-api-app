import React, { useState, useEffect} from 'react';
import {Container, Row, Col  } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios"

import "./App.css"
import Card from "./Card";






const App = () => {

/* STATES FOR API AND REASON FOR OBJECT INSIDE THE USE STATE IS BECAUSE API DATA WILL BE IN JSON AND OBJECT */
const [details, setDetails] = useState({});


const fetchDetails = async () => {
// this will directly  get data  from api
  const {data} = await Axios.get("https://randomuser.me/api/") 
  console.log("response : " ,  data)

   // or
  // const response = await Axios.get("https://randomuser.me/api/")
  // const newData =  response.data // if we used this method then this line is extra we havs to store it in a const
  // console.log("response : " ,  response)

  const details = data.results[0]
  // console.log(details)

  setDetails(details)

}

  useEffect( () => {

    fetchDetails()

  },[])

  return (
     <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <Card details = {details}/>
        </Col>
      </Row>
     </Container>
  );
 
}

export default App;
