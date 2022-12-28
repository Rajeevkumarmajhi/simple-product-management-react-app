import React from 'react'
import { Navbar, Nav, Container, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem('userInfo'));
  if(user && user[0]){
    user = user[0];
  }
  function logOut()
  {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar>
                <Link to="/" > <NavbarBrand className='text-white'>SuperSale</NavbarBrand> </Link>
            </Navbar>
          <Nav className="me-auto">
            {
              localStorage.getItem('userInfo')?
              <>
                <Link className='nav-item nav-link' to="/add">Add Product</Link>
                <Link className='nav-item nav-link' to="/search">Search Product</Link>
                {/* <Link className='nav-item nav-link' to="/update">Update Product</Link> */}
              </>
              :
              <>
                <Link className='nav-item nav-link' to="/login">Login User</Link>
                <Link className='nav-item nav-link' to="/register">Register User</Link>
              </>
            }
          </Nav>
          {
            user?
            <Nav>
              <NavDropdown title={user && user.name} >
                <NavDropdown.Item onClick={logOut}> Logout </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :null
          }
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
