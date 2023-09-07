import {Outlet} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import MailList from "./Components/MailList"

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <MailList />
        <Footer />
    </>
  )
}

export default Layout