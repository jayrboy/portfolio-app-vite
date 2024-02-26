import { useEffect, useState } from 'react'
import heroImg from '../assets/hero.png'
import { FaGithubSquare } from 'react-icons/fa'
import TrackVisibility from 'react-on-screen'
import { CgHello } from 'react-icons/cg'

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
  const period = 2000

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
      setDelta(50)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section className="bg-orange-100 py-24  ">
      <div className=" mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider bouncing-text-y">
            <CgHello color="rgb(249 115 22)" />
          </h1>
          <h2 className="text-6xl font-bold tracking-wider">I am Jakkrit</h2>

          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? 'animate__animated animate__fadeIn' : ''}
              >
                <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
                  <span data-rotate={toRotate}>
                    <span>&nbsp;{text}</span>
                  </span>
                </p>
              </div>
            )}
          </TrackVisibility>
          <br />
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
