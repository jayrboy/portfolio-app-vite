import { useState } from 'react';
import aboutSvg from '../assets/about.jpg';
import SectionTitle from './SectionTitle';

import project from '../assets/projects/hook-comments.png';
import projectJ from '../assets/projects/hook-comments-j.png';

const About = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenJ, setIsOpenJ] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onOpenJ() {
    setIsOpenJ(true);
  }

  function onCloseJ() {
    setIsOpenJ(false);
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
              กำลังใกล้จะเรียนจบแล้วครับ
              ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
              คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม ภาควิชาวิศวกรรมอิเล็กทรอนิกส์
              สาขาเทคโนโลยีคอมพิวเตอร์. มีความสนใจอยากเป็น Dev ครับ,
              ช่วงนี้กำลังฝึกงาน และ ทำโครงการวิจัยที่ทำในมหาลัย &quot;
              <a
                className="text-sky-500"
                href="https://weliveapp.netlify.app/"
                target="_blank"
              >
                ระบบสร้างออเดอร์สินค้าจาก Comments วีดีโอไลฟ์สดบน Facebook
              </a>
              &quot; โดยใช้ React และ Node Express ของภาษา JavaScript
              ในการสร้างเว็บแอปพลิเคชัน
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

            {/* <div className="flex justify-center items-center">
              <button onClick={onOpenJ}>
                <img
                  src={projectJ}
                  alt="projectJ"
                  className="rounded-lg shadow-md hover:shadow-xl duration-300 mt-2 mb-2"
                  width="250px"
                />
              </button>
            </div> */}

            <p className="text-slate-600 leading-loose text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;ความเป็นมาเมื่อก่อน ตอนเด็กๆ
              ผมมีความฝันอยากจะเป็นนักบินขับเครื่องบิน ✈️ F-16
              แต่พอใช้ชีวิตในโลกแห่งความเป็นจริง ความคิดก็เปลี่ยน เลยคิดว่า
              อยากเป็นวิศวกรไฟฟ้า เลยเริ่มไปเรียนสายอาชีพ ปวช ช่างไฟฟ้า ⚡
              แต่พอเรียนเข้าจริงช่วงสอนทฤษฎีไม่ชอบเลยเพราะคำนวณไม่ค่อยเก่ง
              แต่พอทำงานเน้นปฎิบัติผมทำได้หมด แล้วในช่วงเรียนมีเรียนเกี่ยวกับ
              Logic จากวิชา Digital สมัย ปวช แล้วเริ่มมีการเขียนโปรแกรม
              ภาษาคอมพิวเตอร์ C และ C++ ของ Arduino Platform
              ทำให้ได้มีพื้นฐานการเขียนโปรแกรมสมัย ปวส แล้วพอจบการศึกษา
              {/* ช่วงปีแรกเป็นช่างไฟฟ้าใน Hall เมืองทองธาณี
              ปีที่สองเปลี่ยนแผนกไปทำ AV&Media
              เป็นทั้งช่างติดตั้งและควบคุมสวิตช์
              ผ่านโปรแกรมเฉพาะตามงานแสดงสินค้า ปีที่สามเป็นนักสำรวจผังเมือง
              เก็บข้อมูลสิ่งปลูกสร้าง
              // เพื่อนำข้อมูลเข้าแผนที่ผังเมืองโยธาธิการผ่านโมบายแอปพลิเคชัน
              ปีที่สี่-ห้า  */}
              ได้ไปทำงานตำแหน่ง Product Technician ได้ดูแลอุปกรณ์ GPS Tracking
              ก่อนและหลังติดตั้ง และ Monitor รู้ถึงปัญหา สาเหตุ แนวทางป้องกัน
              วิเคราะห์สาเหตุต่างๆ รายงานปัญหาอุปกรณ์และเซ็นเซอร์ต่างๆ
              จากปัญหาการใช้งานผู้ใช้และระบบไฟฟ้ากระแสตรง-กระแสสลับของอุปกรณ์ทั้งหมดเบื้องต้น
              และที่ทำงานก็มีสภาพแวดล้อมที่ต้องร่วมมือกับแผนก Product &
              Development ซึ่งเป็นสิ่งที่ผมสนใจเรื่องอุปกรณ์
              และโปรแกรมที่ใช้งานเฉพาะธุรกิจนั้นๆ เพราะสามารถแก้ไขปัญหาได้ด้วย
              Software และ Hardware ต่างๆ และ ในช่วงเวลาทำงานนั้น
              หลังเลิกงานมาได้เริ่มศึกษาเปิดคลิปตาม Youtube
              เริ่มฝึกเขียนโปรแกรมภาษา JAVA เพราะช่วงนั้นสนใจอยากจะลองสร้าง
              โมบายแอปพลิเคชันเป็น
              ก็เลยไปศึกษาหาวิธีที่จะได้เป็นนักพัฒนาซอฟต์แวร์
              จนได้ส่งสมัครเรียนต่อเนื่องที่ มจพ.
            </p>
            <p className="text-slate-600 leading-loose text-justify">
              &nbsp;&nbsp;&nbsp;&nbsp;หลังจากเรียนครบ 2 ปี และก็ไม่ติด F เลย
              ช่วงซัมเมอร์ ก็ได้ลงทะเบียนฝึกงานตามหลักสูตร
              ก็เลยติดต่อสัมภาษณ์งานบริษัทแห่งหนึ่ง และได้ฝึกตำแหน่ง Developer
              ฝ่าย Software Engineering ที่กรุงเทพฯ เขตหลักสี่ จนถึงปัจจุบัน.
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
      {isOpenJ && (
        <div className="modal">
          <button onClick={onCloseJ}>
            <img
              src={projectJ}
              alt="projectJ"
              className="shadow-md hover:shadow-xl duration-300"
            />
          </button>
        </div>
      )}
    </>
  );
};
export default About;
