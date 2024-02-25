import { NavLink } from 'react-router-dom'
import { headers } from '../data'

const Navbar = () => {
  return (
    <nav className="bg-orange-100">
      <div className="align-element py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web
          <span className="text-orange-600">Portfolio</span>
        </h2>
        <div className="flex gap-x-3 ms-auto">
          {headers.map((header) => {
            const { id, href, text } = header
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-orange-600 duration-300"
              >
                {text}
              </a>
            )
          })}
          <NavLink
            to="/resume"
            className="capitalize text-lg tracking-wide hover:text-orange-600 duration-300"
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
