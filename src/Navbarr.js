import React from "react";
import {Navbar,Container,Nav,Dropdown} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import {Link} from "react-router-dom";



var MyFont = {
    color:'#f794c6',
    fontSize: '120%',
    fontFamily:'cursive'

};
var MyFont1 = {
    color:'#f794c6',
    fontSize: '150%',
    fontFamily:'cursive'

};
var MyFont2 = {
    color:'#FFFF',
    fontSize: '120%',
    fontFamily:'Bakbak One'

};
var MyFont3 = {
    color:'#FFFF',
    fontSize: '120%',
    fontFamily:'cursive'

};
var MyFont3 = {
    color:'#FFFF',
    fontSize: '120%',
    fontFamily:'cursive'

};
export const Navbarr = () =>{
    return(
        <Navbar bg="dark" sticky='top' expand="md">
            <Container>
                <Navbar.Brand>
                    <img src="logo512.png" alt="" height="100"></img>
                    <babel style={MyFont}>Numerical  Project</babel>
                </Navbar.Brand>
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic" style={MyFont3}>Root of Equation</Dropdown.Toggle>    
                        <Dropdown.Menu>
                            <Nav.Link as ={Link} to="/Bisection">Bisection</Nav.Link>
                            <Nav.Link as ={Link} to="/False">FalsePosition</Nav.Link>
                            <Nav.Link as ={Link} to="/Newton">Newton Raphson</Nav.Link>
                
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic" style={MyFont3}>Linear Algebraic Equation</Dropdown.Toggle>    
                        <Dropdown.Menu>
                            <Nav.Link as ={Link} to="">Guass Eliminatio9n Method</Nav.Link>
                            <Nav.Link as ={Link} to="">Matrix Inversion Method</Nav.Link>
                        </Dropdown.Menu>
                    </Dropdown>
                
            </Container>
        </Navbar>
    )
}
export default Navbarr