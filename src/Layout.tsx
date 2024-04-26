import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import HStack from './components/HStack'
import SidePanel from './components/SidePanel'

const Layout = () => {
  return (
    <>
      <Navbar />
      <HStack>
        <SidePanel />
        <Container>
          <Outlet />
        </Container>
      </HStack>
    </>
  )
}

export default Layout
