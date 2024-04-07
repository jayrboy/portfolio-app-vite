import { useState } from 'react'
import aboutSvg from '../assets/about.jpg'
import SectionTitle from './SectionTitle'

import project from '../assets/projects/hook-comments.png'

const About = () => {
  let [isOpen, setIsOpen] = useState(false)

  function onOpen() {
    setIsOpen(true)
  }

  function onClose() {
    setIsOpen(false)
  }

  return (
    <>
      <section className="bg-white py-20" id="about">
        <header className="align-element">
          <SectionTitle text="จุดเริ่มต้นสู่เส้นทาง🌏โปรแกรมเมอร์" />
        </header>
        <div className="grid md:grid-cols-2 align-element items-center gap-16">
          <img src={aboutSvg} className="rounded-full mt-5" />
          <article>
            <p className="text-slate-600 mt-2 leading-loose text-justify">
              👋 สวัสดีครับ ผมชื่อเจอา ณ ตอนนี้ผมอยู่กรุงเทพฯ
              กำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
              คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม ภาควิชาวิศวกรรมอิเล็กทรอนิกส์
              สาขาเทคโนโลยีคอมพิวเตอร์. มีความสนใจอยากเป็น Dev ครับ,
              โครงการวิจัยที่ทำในมหาลัย &quot;
              <a
                className="text-sky-500"
                href="https://weliveapp.netlify.app/"
                target="_blank"
              >
                ระบบสร้างออเดอร์สินค้าจาก Comments วีดีโอไลฟ์สดบน Facebook
              </a>
              &quot; โดยใช้ภาษา JavaScript ในการสร้างเว็บแอปพลิเคชัน
            </p>
            <div className="flex justify-center items-center">
              <button onClick={onOpen}>
                <img
                  src={project}
                  alt="project"
                  className="rounded-lg shadow-md hover:shadow-xl duration-300 mt-2 mb-2"
                  width="250px"
                />
              </button>
            </div>

            <p className="text-slate-600 leading-loose text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;และเมื่อผมตอนเด็ก
              อยากจะเป็นนักบินขับเครื่องบิน ✈️ F-16
              แต่พอใช้ชีวิตในโลกแห่งความเป็นจริง ความคิดเปลี่ยน
              เลยอยากเป็นวิศวกรไฟฟ้าแทน เริ่มไปเรียนสายอาชีพ ปวช ช่างไฟฟ้า ⚡
              แต่พอเรียนเข้าจริงช่วงสอนทฤษฎีไม่ชอบเลยเพราะคำนวณเยอะมาก
              แต่พอทำงานเน้นปฎิบัติผมทำได้หมด ในช่วงเรียนก็มีเรียนเขียนโปรแกรม
              ภาษาคอมพิวเตอร์ C หรือ C++ ของ Arduino Platform
              ทำให้ได้มีพื้นฐานการเขียนโปรแกรมตั้งแต่สมัย ปวส แล้วพอจบการศึกษา
              ได้ไปทำงานตำแหน่ง Product Technician
              ที่มีสภาพแวดล้อมที่ต้องร่วมมือกับแผนก Product & Developer
              ซึ่งเป็นสิ่งที่ผมสนใจเรื่องอุปกรณ์
              และโปรแกรมที่ใช้งานเฉพาะธุรกิจนั้นๆ เพราะสามารถแก้ไขปัญหาได้ด้วย
              Software ในช่วงเวลาทำงานนั้น หลังเลิกงานมาได้เปิดคลิปตาม Youtube
              และฝึกเขียนโปรแกรมภาษา Java
              และได้ศึกษาหาวิธีที่จะได้เป็นนักพัฒนาเรื่อยมา
              จนได้ส่งสมัครเรียนต่อเนื่องที่ มจพ. จนถึงปัจจุบัน
            </p>
          </article>
        </div>
      </section>
      {isOpen && (
        <div className="modal">
          <button onClick={onClose}>
            <img
              src={project}
              alt="project"
              className="shadow-md hover:shadow-xl duration-300"
            />
          </button>
        </div>
      )}
    </>
  )
}
export default About
