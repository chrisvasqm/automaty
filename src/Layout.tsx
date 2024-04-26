import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import HStack from './components/HStack'
import Drawer from './components/Drawer'

const Layout = () => {
  return (
    <>
      <Navbar />
      <HStack>
        <Drawer />
        <Container>
          <Outlet />
        </Container>
      </HStack>
    </>
  )
}

export default Layout
