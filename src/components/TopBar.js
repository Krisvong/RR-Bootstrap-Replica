import { Navbar, Nav, Button } from 'react-bootstrap';

function TopBar() {
    return (
      <div>
        <Navbar bg="white" expand="lg" style={{height: "50px" }} className="justify-content-between">
          <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
            <div aria-label="Open main menu" role="button" tabIndex="0" data-testid="hamburger-button" style={{ marginRight: '20px' }}>
              <svg width="28" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.8 17.5c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6Zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6Zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6Z"></path>
              </svg>
            </div>
            <img src="./images/instacart-logo.png" alt="Instacart logo" />
          </Navbar.Brand>
          <Nav style={{ display: 'flex', alignItems: 'center' }}>
            <Nav.Link href="#LogIn" style={{ color: "#343538", fontSize: "18px", fontWeight: "bolder", marginRight: "2em" }}>Log In</Nav.Link>
            <Button variant="success" style={{ backgroundColor: "#0AAD09", fontSize: "18px", fontWeight: "bolder", borderRadius: "50%" }}>Sign Up</Button>
          </Nav>
        </Navbar>
      </div>
    )
  }
  
  
  export default TopBar;
  