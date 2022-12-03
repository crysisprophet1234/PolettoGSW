import Header from './header/header'
//import Navigation from './Navigation'
//import Footer from './Footer'

const Layout = ({ children }) => {

  return (

    <>

      <Header />

      <main>{children}</main>

    </>

  )

}

export default Layout