import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import HStack from './components/HStack'

const Layout = () => {
  return (
    <>
      <Navbar />
      <HStack>
        <Container>
          <Outlet />
        </Container>
      </HStack>
    </>
  )
}

export default Layout
