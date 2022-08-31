import {Container, Nav, Navbar} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav defaultActiveKey='/' className='me-auto'>
            <Nav.Link href='/'>Buscador de personajes</Nav.Link>
            <Nav.Link href='/exercise1'>Ejercicio 1</Nav.Link>
            <Nav.Link href='/list-nicknames'>List Nicknames</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
}

export default Layout
