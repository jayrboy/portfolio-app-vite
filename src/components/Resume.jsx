import resumeJPG from '../assets/resume.jpg'
import transcriptJPG from '../assets/transcript.jpg'
import { Link } from 'react-router-dom'
import { FaFileDownload } from 'react-icons/fa'
import resumePDF from '../assets/Resume.pdf'
import transcriptPDF from '../assets/Transcript-kmutnb.pdf'

const Resume = () => {
  const downloadResume = () => {
    window.open(resumePDF) // Open the CV file in a new tab
  }

  const downloadTranscript = () => {
    window.open(transcriptPDF) // Open the CV file in a new tab
  }

  return (
    <>
      <nav className="bg-orange-100">
        <div className="align-element py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-5">
          <h2 className="text-3xl font-bold">
            Web
            <span className="text-orange-600">Portfolio</span>
          </h2>
        </div>
      </nav>
      {/* Resume */}
      <section className="bg-white py-20">
        <div className="align-element items-center">
          <article>
            <div className="border-b border-gray-200 pb-5">
              <h2 className="text-3xl font-medium tracking-wider capitalize">
                Resume
              </h2>
              <button onClick={downloadResume}>
                <FaFileDownload
                  size={25}
                  className="bouncing-text-y"
                  color="rgb(249 115 22)"
                />
              </button>
            </div>
          </article>
        </div>
        {/* Card Resume */}
        <div className="flex justify-center items-center pt-2">
          <article
            className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300"
            style={{ width: '400px' }}
          >
            <img
              src={resumeJPG}
              alt="resume"
              className="w-full object-cover rounded-t-lg"
            />
          </article>
        </div>
        <br />
        <br />
        <div className="align-element">
          <article>
            <div className="border-b border-gray-200 pb-5">
              <h2 className="text-3xl font-medium tracking-wider capitalize">
                Transcript
              </h2>
              <button onClick={downloadTranscript}>
                <FaFileDownload
                  size={25}
                  className="bouncing-text-y"
                  color="rgb(249 115 22)"
                />
              </button>
            </div>
          </article>
        </div>
        {/* Card Transcript */}
        <div className="flex justify-center items-center pt-2">
          <article
            className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300"
            style={{ width: '400px' }}
          >
            <img
              src={transcriptJPG}
              alt="resume"
              className="w-full object-cover rounded-t-lg"
            />
          </article>
        </div>
        <br />
        <br />

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded">
            <Link to="/">กลับหน้าหลัก</Link>
          </button>
        </div>
      </section>
    </>
  )
}
export default Resume
