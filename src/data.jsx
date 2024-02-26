import { nanoid } from 'nanoid'
import {
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNode,
} from 'react-icons/fa'
import { BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'

import books from './assets/projects/books.png'
import backroads from './assets/projects/backroads.png'
import reactBasic from './assets/projects/react-basic.png'
import taskManage from './assets/projects/task-manage.png'
import blogApp from './assets/projects/blog-app.png'
import shopContext from './assets/projects/shopping-context.png'
import quizApp from './assets/projects/quiz-app.png'
import reactVite from './assets/projects/react-vite.png'
import shopRedux from './assets/projects/shopping-redux.png'

export const headers = [
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'Github',
    icon: <FaGithub className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'เว็บเซิร์ฟเวอร์ที่ให้บริการในการฝากไฟล์ Git ที่ทำงานบนเว็บไซต์ เป็นเครื่องมือจัดเก็บเวอร์ชันในการติดตามโค้ดที่เรียกว่า Source Code และเมื่อต้องการพัฒนาเพิ่มฟีเจอร์ หรือแก้ไขปัญหาบางส่วน สามารถ Clone มาพัฒนาได้ทันที',
  },
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'กำหนดการแสดงผลข้อมูลภายในเว็บเพจ แสดงผลบนโปรแกรมบราวเซอร์ โดยใช้ HTML กำหนดโครงร่างแสดงข้อมูลต่างๆ เช่น แสดงส่วนหัวข้อ ส่วนเนื้อหา ส่วนท้าย ข้อมูลนำเข้า แบบฟอร์ม ตัวอักษร รูปภาพ และใช้ CSS ช่วยในการกำหนดเพิ่มความสวยงามให้กับเว็บเพจ เช่น รูปแบบสี ขนาด อนิเมชันเคลื่อนไหวและอื่นๆ ในเบื้องต้น',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'การสร้างเว็บเพจให้ทำงานแบบไดนามิกได้ผลลัพธ์ตามเงื่อนไขหรือข้อกำหนดต่างๆ จะอยู่ในรูปแบบโมดูลฟังก์ชัน และนำองค์ประกอบที่เรียกว่าไลบรารีที่มีอยู่ใน JavaScript มาช่วยในการพัฒนาแอปพลิเคชันบนเว็บบราวเซอร์',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'ไลบรารีของภาษา JavaScript ใช้เพื่อสร้างแอปพลิเคชันฝั่งไคลเอนต์ เพื่อสร้างส่วนติดต่อกับผู้ใช้ในแบบไดนามิก JSX เมื่ออัปเดตบางส่วนของแอปโดยที่แอปจะไม่ทำการโหลดหน้าเว็บขึ้นมาใหม่ทั้งหมด ในขั้นตอนการพัฒนาเว็บแอปจะสะดวกและรวดเร็วยิ่งขึ้น',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'หากปรับแต่งเว็บเพจด้วย CSS โดยตรงจะต้องใช้เวลาค่อนข้างพอสมควร หากนำ CSS เฟรมเวิร์กมาช่วยจัดรูปแบบ Style ของเว็บเพจ ที่ประกอบด้วย Grid และ Flexbox ที่รองรับการจัดโครงร่างของเว็บเพจแบบ Responsive ซึ่งให้สามารถเปิดบนอุปกรณ์ที่มีขนาดหน้าจอที่ต่างกันได้ โดยรูปแบบ CSS เฟรมเวิร์กโค้ดจะดูน้อยและจัดการได้ง่าย',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <BiLogoTailwindCss className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'CSS เฟรมเวิร์กมาช่วยจัดรูปแบบ Style ของเว็บเพจ ที่รองรับการจัดโครงร่างของเว็บเพจแบบ Responsive',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNode className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'เป็นสภาพแวดล้อมรันไทม์ของ JavaScript ทำงานฝั่งเซิร์ฟเวอร์ แล้วประมวลผลบนพื้นฐานของ Google V8 Engine รูปแบบการทำงาน Non-Blocking I/O เว็บแอปจึงตอบสนองได้รวดเร็ว และทำงานได้กับทุกบราวเซอร์ ในขั้นตอนการพัฒนาเขียนโค้ดรับ-ส่งข้อมูล AJAX, REST API, หรือ Webhooks และจัดเก็บเข้าฐานข้อมูล SQL หรือ NoSQL',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <BiLogoMongodb className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'ฐานข้อมูลที่มีลักษณะโครงสร้างแบบ NoSQL จัดเก็บข้อมูลในรูปแบบ BSON เก็บไว้ในไฟล์ฐานข้อมูล มีทั้งแบบ Structure และ Unstructured มีชื่อ Database ภายในมี Collection, Document และ Field ใช้งานร่วมกับ DBMS ได้ และใช้งานบน Cloud ได้เป็นอย่างดี ในกรณีต้องการเก็บข้อมูลจำนวนมาก',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <GrMysql className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'ฐานข้อมูล DBMS ที่มีลักษณะโครงสร้างแบบ SQL จัดเก็บข้อมูลในรูปแบบ Relational เก็บไว้ในไฟล์ฐานข้อมูล มีชื่อ Database ภายในมี Table, Record และ Row ในขั้นตอนพัฒนา Query ข้อมูลด้วยภาษาที่อ่านเข้าใจได้ง่าย ฟรีสำหรับเวอร์ชัน Community',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: books,
    url: 'https://web-books-store.netlify.app/',
    github: 'https://github.com/jayrboy/01-fundamentals-react',
    title: 'books project',
    text: 'ระบบโชว์หนังสือจากร้านค้า',
  },
  {
    id: nanoid(),
    img: backroads,
    url: 'https://backroads-web-app-01.netlify.app',
    github: 'https://github.com/jayrboy/backroads-app-react',
    title: 'HTML template เปลี่ยนเป็น react project',
    text: 'HTML Template แบบเดิมที่มีอยู่ นำมาเปลี่ยนการแสดงผลให้อยู่รูปแบบ JSX',
  },
  {
    id: nanoid(),
    img: reactBasic,
    url: 'https://react-state-basic-101.netlify.app/',
    github: 'https://github.com/jayrboy/react-basic',
    title: '101 react project',
    text: 'แอปพลิเคชันเก็บข้อมูลนักเรียน เก็บข้อมูลโดย Array State โดยส่ง Properties ไปแสดง Component ย่อย และสร้างปุ่ม ซ่อน/แสดง จำนวนนักเรียน',
  },
  {
    id: nanoid(),
    img: taskManage,
    url: 'https://react-task-management-web.netlify.app/',
    github: 'https://github.com/jayrboy/task-app-react.git',
    title: 'task management',
    text: 'แอปพลิเคชันจัดการงาน เก็บข้อมูลใน Local Storage เพิ่ม ลบ แก้ไข และปุ่มปรับโหมดกลางวัน/กลางคืน',
  },
  {
    id: nanoid(),
    img: blogApp,
    url: 'https://react-blog-webapp.netlify.app/',
    github: 'https://github.com/jayrboy/blog-app-react.git',
    title: 'blog application',
    text: 'แอปพลิเคชันสำหรับดูบทความ โครงสร้างเว็บทั่วไป เปลี่ยนเส้นทางหน้าเว็บเพจ หน้าแรก, บทความทั้งหมด, เกี่ยวกับเรา โดยใช้ React Router DOM V6 และช่องรับข้อมูล Search สำหรับค้นหาบทความ',
  },
  {
    id: nanoid(),
    img: shopContext,
    url: 'https://shopping-context-reducer.netlify.app/',
    github: 'https://github.com/jayrboy/shopping-app-react.git',
    title: 'shopping application',
    text: 'ระบบตะกร้าสินค้า โดยใช้ Context และ Reducer ปริมาณสินค้า จำนวน ราคา ยอดรวม เพิ่ม/ลดจำนวน และลบรายการสินค้า',
  },
  {
    id: nanoid(),
    img: quizApp,
    url: 'https://quiz-app-react-ect.netlify.app/',
    github: 'https://github.com/jayrboy/quiz-app-react.git',
    title: 'quiz application',
    text: 'ระบบทำข้อสอบ โดยใช้ Context',
  },
  {
    id: nanoid(),
    img: reactVite,
    url: 'https://react-vite-app-tutorial.netlify.app/',
    github: 'https://github.com/jayrboy/app-react-vite.git',
    title: '101 react+vite project',
    text: 'React Vite Application',
  },
  {
    id: nanoid(),
    img: shopRedux,
    url: 'https://shopping-vite-redux.netlify.app/',
    github: 'https://github.com/jayrboy/shopping-vite-redux.git',
    title: 'shopping application',
    text: 'ระบบตะกร้าสินค้า โดยใช้ Redux Toolkit ปริมาณสินค้า จำนวน ราคา ยอดรวม เพิ่ม/ลดจำนวน และลบรายการสินค้า',
  },
]
