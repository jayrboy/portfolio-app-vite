import resume from '../assets/resume.jpg'
import transcript from '../assets/transcript.jpg'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <>
      <nav className="bg-orange-100">
        <div className="align-element py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
          <h2 className="text-3xl font-bold">
            Web
            <span className="text-orange-600">Portfolio</span>
          </h2>
        </div>
      </nav>
      <section className="bg-white py-20" id="resume">
        <div className="align-element grid  md:grid-cols-2 items-center gap-16">
          <article>
            <div className="border-b border-gray-200 pb-5">
              <h2 className="text-3xl font-medium tracking-wider capitalize">
                Resume
              </h2>
            </div>
          </article>
        </div>
        {/* Card Resume */}
        <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
          <img
            src={resume}
            alt="resume"
            className="w-full object-cover rounded-t-lg"
          />
        </article>
        <br />
        <br />
        <div className="align-element grid  md:grid-cols-2 items-center gap-16">
          <article>
            <div className="border-b border-gray-200 pb-5">
              <h2 className="text-3xl font-medium tracking-wider capitalize">
                Transcript
              </h2>
            </div>
          </article>
        </div>
        {/* Card Transcript */}
        <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
          <img
            src={transcript}
            alt="resume"
            className="w-full object-cover rounded-t-lg"
          />
        </article>
        <br />
        <div style={{ textAlign: 'center', color: 'blue' }}>
          <Link to="/">กลับหน้าหลัก</Link>
        </div>
      </section>
    </>
  )
}
export default Resume
