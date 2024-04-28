import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container'
import HStack from './components/HStack'
import SidePanel from './components/SidePanel'
import { useMediaQuery, useTheme } from '@mui/material'

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
