import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/LOGO.jpg';
import proicon from './images/profileicon.jpg';
import { MdGTranslate } from "react-icons/md/";

function NavHeader() {
  return (
    <Navbar bg="black" expand="lg"  fixed="top" >
      <Container >
        <Navbar.Brand  href="/Project2final/home"><img
              src={logo}
              width="350"
              height="50"
              className="d-inline-block align-left"
              alt="DarkSoulsIV LOGO"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav justify className="me-auto" fixedTop="true">
            <Nav.Link className='nav-link1' href="/Project2final/home"><span className='navtext'>Home</span></Nav.Link>
            <Nav.Link className='nav-link1' href="/Project2final/concept"><span className='navtext'>Concept</span></Nav.Link>
            <Nav.Link className='nav-link1' href="/Project2final/story"><span className='navtext'>Story</span></Nav.Link>
            <Nav.Link className='nav-link1' href="/Project2final/news"><span className='navtext'>News</span></Nav.Link>
            <NavDropdown menuVariant="dark" componentClass='nav-link1' title={<span className='navtext'>Community ▼</span>} id="basic-nav-dropdown" >
              <NavDropdown.Item href="https://twitter.com/fromsoftware_pr"><span className='navtext'>Twitter</span></NavDropdown.Item>
              <NavDropdown.Item href="/Project2final/forum"><span className='navtext'>Forum</span></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav-link1' href="/Project2final/login"><img
              src={proicon}
              width="50"
              height="50"
              className="d-inline-block"
              alt="profileicon"
            /></Nav.Link>
            <NavDropdown menuVariant="dark" className='nav-link1' title={<span className='navtext'><MdGTranslate></MdGTranslate></span>} href="translate" >
            <NavDropdown.Item href="/Project2final/home">English(US)</NavDropdown.Item>
              <NavDropdown.Item href="/Project2final/HomeJP">Japanese</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;