import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"

function Main() {
  return (
    <div>
        <SearchBar />
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Main