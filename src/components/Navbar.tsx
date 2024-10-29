import { Skull } from "lucide-react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="p-4 border shadow titulo flex">
        <Link to={'/'}>CQRS Architecture</Link>
        <Skull className="text-red-500"></Skull>
    </nav>
  )
}
