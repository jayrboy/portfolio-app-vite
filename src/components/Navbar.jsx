import { NavLink } from 'react-router-dom'
import { headers } from '../data'

const Navbar = () => {
  return (
    <nav className="bg-zinc-800">
      <div className="align-element py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-5">
        <h2 className="text-white text-3xl font-bold">
          Web
          <a href="#" className="text-orange-600">
            Portfolio
          </a>
        </h2>
        <div className="flex gap-x-3 ms-auto text-white">
          {headers.map((header) => {
            const { id, href, text } = header
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-orange-600 duration-300 menu"
              >
                {text}
              </a>
            )
          })}
          <NavLink
            to="/resume"
            className="capitalize text-lg tracking-wide hover:text-orange-600 duration-300 menu"
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
