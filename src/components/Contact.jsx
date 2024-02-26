import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import MapStatic from './MapStatic'

const Contact = () => {
  const form = useRef()

  const onSubmitForm = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_7nx0av8', 'template_txy155n', form.current, {
        publicKey: 'nlomm5fnIaFKAS8g_',
      })
      .then(
        () => {
          alert('Successfully')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the message, please try again', error.text)
        }
      )
  }

  return (
    <>
      <section className="bg-white py-20">
        <div className=" mx-auto max-w-7xl px-8 grid md:grid-cols-1">
          <article>
            <div className="border-b border-gray-200 pb-5">
              <h2 className="text-3xl font-medium tracking-wider capitalize">
                Contact US
              </h2>
            </div>
            <form
              ref={form}
              onSubmit={onSubmitForm}
              className="max-w-md mx-auto"
            >
              <br />
              <div className="mt-2 px-10">
                <input
                  type="text"
                  name="user_name"
                  placeholder=" Name"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 sm:leading-6 p-3"
                  required
                />
              </div>

              <div className="mt-2 px-10">
                <input
                  type="email"
                  name="user_email"
                  placeholder=" Email"
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 sm:leading-6 p-3"
                  required
                />
              </div>
              <div className="mt-2 px-10">
                <textarea
                  placeholder=" Message"
                  name="message"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 sm:leading-6 p-3"
                  required
                ></textarea>
              </div>
              <br />
              <div className="text-center mt-2 px-10">
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded">
                  SEND
                </button>
              </div>
              <br />
              <br />
            </form>
          </article>

          <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
            <MapStatic />
          </article>
        </div>
      </section>
      <div className="map-wrap"></div>
    </>
  )
}
export default Contact
