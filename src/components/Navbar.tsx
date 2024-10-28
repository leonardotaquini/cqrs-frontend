import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="p-4 border shadow">
        <Link to={'/'}>CQRS Architecture</Link>
    </nav>
  )
}
