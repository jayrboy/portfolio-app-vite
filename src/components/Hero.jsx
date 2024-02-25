import heroImg from '../assets/hero.png'
import { FaGithubSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-orange-100 py-24  ">
      <div className=" mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider bouncing-text-x">
            👋
          </h1>
          <h2 className="text-7xl font-bold tracking-wider bouncing-text-y">
            I am Jakkrit
          </h2>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            web developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            เปลี่ยนไอเดียให้กลายเป็นเว็บแอปพลิเคชัน
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/jayrboy" target="_new">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block ">
          <img src={heroImg} className="h-90 lg:h-100" />
        </article>
      </div>
    </section>
  )
}
export default Hero
