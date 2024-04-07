import resumeJPG from '../assets/resume.jpg'
import transcriptJPG from '../assets/transcript.jpg'
import { Link } from 'react-router-dom'
import resumePDF from '../assets/Resume.pdf'
import transcriptPDF from '../assets/Transcript-kmutnb.pdf'
import Footer from './Footer'

const Resume = () => {
  return (
    <>
      <nav className="bg-zinc-800">
        <div className="align-element py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-5">
          <h2 className="text-3xl font-bold text-white">
            Web
            <Link to="/" className="text-orange-600">
              Portfolio
            </Link>
          </h2>
        </div>
      </nav>

      <div className="bg-white py-20 ">
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* Resume */}
          <div className="align-element items-center">
            <article>
              <div className="border-b border-gray-200 pb-5">
                <h2 className="text-3xl font-medium tracking-wider capitalize mt-3">
                  Resume
                </h2>
              </div>
            </article>
            <article
              className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300"
              style={{ width: '400px' }}
            >
              <button onClick={() => window.open(resumePDF)}>
                <img
                  src={resumeJPG}
                  alt="resume"
                  className="w-full object-cover rounded-t-lg"
                />
              </button>
            </article>
          </div>
          {/* Card Transcript */}
          <div className="align-element items-center mt-3">
            <article>
              <div className="border-b border-gray-200 pb-5">
                <h2 className="text-3xl font-medium tracking-wider capitalize">
                  Transcript
                </h2>
              </div>
            </article>
            <article
              className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300"
              style={{ width: '400px' }}
            >
              <button onClick={() => window.open(transcriptPDF)}>
                <img
                  src={transcriptJPG}
                  alt="resume"
                  className="w-full object-cover rounded-t-lg"
                />
              </button>
            </article>
          </div>
        </section>
        {/* Button */}
        <br />
        <div className="bg-white text-center mt-5">
          <button className="bg-orange-500 hover:bg-orange-600 text-white e py-1 px-3 rounded">
            <Link to="/">กลับหน้าหลัก</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Resume
