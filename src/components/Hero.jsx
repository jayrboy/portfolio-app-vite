import { useEffect, useState } from 'react'
import heroImg from '../assets/hero.png'
import { FaGithubSquare } from 'react-icons/fa'
import TrackVisibility from 'react-on-screen'
import { CgHello } from 'react-icons/cg'
import project from '../assets/myapp.png'

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(50)
  const [index, setIndex] = useState(1)
  const toRotate = [
    'Programmer',
    'Web Developer',
    'Frontend Developer',
    'React Developer',
  ]
  const period = 1000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(100)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section className="bg-zinc-800 py-24">
      <div className=" mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8">
        <article>
          <p className="text-7xl font-bold tracking-wider bouncing-text-y">
            <a href="https://weliveapp.netlify.app/" target="_blank">
              <img
                src={project}
                alt="logo"
                width={70}
                style={{ border: '1px solid #555', borderRadius: '20%' }}
              />
            </a>
          </p>
          <h2 className="text-6xl font-bold tracking-wider text-white">
            I am Jakkrit
          </h2>

          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? 'animate__animated animate__fadeIn' : ''}
              >
                <p className="mt-4 text-3xl capitalize tracking-wide text-slate-300">
                  <span data-rotate={toRotate}>
                    <span>&nbsp;{text}</span>
                  </span>
                </p>
              </div>
            )}
          </TrackVisibility>
          <br />
          <p className="mt-2 text-l capitalize tracking-wide text-slate-100">
            เปลี่ยนไอเดียให้กลายเป็นเว็บแอปพลิเคชัน
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/jayrboy" target="_new">
              <FaGithubSquare className="h-8 w-8 text-white hover:text-slate-500" />
            </a>
          </div>
        </article>

        <article className="hidden md:block ">
          <img
            src={heroImg}
            className="h-90 lg:h-100"
            style={{ borderRadius: '10%' }}
          />
        </article>
      </div>
    </section>
  )
}
export default Hero
