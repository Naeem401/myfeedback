import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer"

function Main() {
  return (
    <div>
        <SearchBar />
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Main