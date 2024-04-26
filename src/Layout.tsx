import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
