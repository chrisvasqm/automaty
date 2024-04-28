import { useMediaQuery, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Container from './components/Container'
import HStack from './components/HStack'
import Navbar from './components/Navbar'
import SidePanel from './components/SidePanel'

const Layout = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <Navbar />
      <HStack>
        { isTablet && <SidePanel />}
        <Container>
          <Outlet />
        </Container>
      </HStack>
    </>
  )
}

export default Layout
