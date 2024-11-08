import { nanoid } from 'nanoid';
import {
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNode,
} from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';

import books from './assets/projects/books.png';
import backroads from './assets/projects/backroads.png';
import reactBasic from './assets/projects/react-basic.png';
import taskManage from './assets/projects/task-manage.png';
import blogApp from './assets/projects/blog-app.png';
import shopContext from './assets/projects/shopping-context.png';
import quizApp from './assets/projects/quiz-app.png';
import reactVite from './assets/projects/react-vite.png';
import viteApi from './assets/projects/vite-api.png';
import shopRedux from './assets/projects/shopping-redux.png';
import reactRedux101 from './assets/projects/react-redux-101.png';
import react101 from './assets/projects/react-101.png';
import qrcode from './assets/projects/qrcode.png';

import github from './assets/skills/github.svg';
import html5 from './assets/skills/html5.svg';
import javascript from './assets/skills/javascript.svg';
import typescript from './assets/skills/typescript.svg';
import react from './assets/skills/react.svg';
import bootstrap from './assets/skills/bootstrap.svg';
import tailwind from './assets/skills/tailwind.svg';
import nodejs from './assets/skills/node-js.svg';
import mongo from './assets/skills/mongo.svg';
import mysql from './assets/skills/mysql.svg';
import angular from './assets/skills/angular.png';
import dotnetCore from './assets/skills/dotnet_core.png';
import sqlServer from './assets/skills/sql-server.svg';

import firstAngular from './assets/projectNg/first_angular.png';
import inventoryProject from './assets/projectNg/inventory_project.png';
import firstAngularTravelApp from './assets/projectNg/first_angular_travel_app.png';
import activityProject from './assets/projectNg/ng_activity.png';

import firstCore from './assets/projectsCore/first_core.png';
import inventoryProjectCore from './assets/projectsCore/inventory_projectCore.png';
import activityProjectCore from './assets/projectsCore/core_activity.png';
import coreMongoDB from './assets/projectsCore/core_mongodb.png';
import crudCore from './assets/projectsCore/CRUDCore.png';
import webserverSocket from './assets/projectsCore/core_websocket.png';

export const headers = [
  { id: nanoid(), href: '#skills', name: 'Skills', current: true },
  { id: nanoid(), href: '#about', name: 'About', current: true },
  { id: nanoid(), href: '#projects', name: 'Projects', current: true },
  { id: nanoid(), href: '#contact', name: 'Contact', current: true },
  // { id: nanoid(), href: '/resume', name: 'Resume', current: true },
];

export const skills = [
  {
    id: nanoid(),
    title: 'Github',
    img: github,
    icon: <FaGithub className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'เว็บเซิร์ฟเวอร์ที่ให้บริการในการฝากไฟล์ Git ที่ทำงานบนเว็บไซต์ เป็นเครื่องมือจัดเก็บเวอร์ชันในการติดตามโค้ดที่เรียกว่า Source Code และเมื่อต้องการพัฒนาเพิ่มฟีเจอร์ หรือแก้ไขปัญหาบางส่วน สามารถ Clone มาพัฒนาได้ทันที',
  },
  {
    id: nanoid(),
    title: 'HTML&CSS',
    img: html5,
    icon: <FaHtml5 className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'กำหนดการแสดงผลข้อมูลภายในเว็บเพจ แสดงผลบนโปรแกรมบราวเซอร์ โดยใช้ HTML กำหนดโครงร่างแสดงข้อมูลต่างๆ เช่น แสดงส่วนหัวข้อ ส่วนเนื้อหา ส่วนท้าย ข้อมูลนำเข้า แบบฟอร์ม ตัวอักษร รูปภาพ และใช้ CSS ช่วยในการกำหนดเพิ่มความสวยงามให้กับเว็บเพจ เช่น รูปแบบสี ขนาด อนิเมชันเคลื่อนไหวและอื่นๆ ในเบื้องต้น',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    img: javascript,
    icon: <FaJs className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'การสร้างเว็บเพจให้ทำงานแบบไดนามิกได้ผลลัพธ์ตามเงื่อนไขหรือข้อกำหนดต่างๆ จะอยู่ในรูปแบบโมดูลฟังก์ชัน และนำองค์ประกอบที่เรียกว่าไลบรารีที่มีอยู่ใน JavaScript มาช่วยในการพัฒนาแอปพลิเคชันบนเว็บบราวเซอร์',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    img: typescript,
    icon: <SiTypescript className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'คือ JavaScript ที่ถูกนำมาปรับปรุงให้ดีขึ้น โดยสามารถดักจับข้อผิดพลาด Error โดยไม่จำเป็นต้อง Run Code ก่อน เนื่องจาก JS สามารถประกาศตัวแปรแบบไม่ต้องกำหนด Type เช่น int, float, char ที่ทำให้มีโอกาสเกิดข้อผิดพลาดในการรับส่งค่าระหว่้างตัวแปรได้ โดย TS จะเข้ามาช่วยควบคุมไม่ให้มีการใช้งานตัวแปรผิด Type',
  },
  {
    id: nanoid(),
    title: 'React',
    img: react,
    icon: <FaReact className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'ไลบรารีของภาษา JavaScript ใช้เพื่อสร้างเว็บแอปพลิเคชันฝั่งไคลเอนต์ เพื่อสร้างส่วนติดต่อกับผู้ใช้ในแบบไดนามิก JSX เมื่ออัปเดตบางส่วนของแอปโดยที่แอปจะไม่ทำการโหลดหน้าเว็บขึ้นมาใหม่ทั้งหมด ในขั้นตอนการพัฒนาเว็บแอปจะสะดวกและรวดเร็วยิ่งขึ้น',
  },
  {
    id: nanoid(),
    title: 'Angular',
    img: angular,
    text: 'เฟรมเวิร์กของภาษา JavaScript ใช้เพื่อสร้างเว็บแอปพลิเคชันฝั่งไคลเอนต์ ที่ออกแบบมาเน้นการจัดการระบบเว็บไซต์ขนาดใหญ่ได้อย่างมีประสิทธิภาพ มีเครื่องที่อำนวยความสะดวกให้กับนักพัฒนา ทำให้นิยมใช้กันอย่างมาก',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    img: bootstrap,
    icon: <FaBootstrap className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'หากปรับแต่งเว็บเพจด้วย CSS โดยตรงจะต้องใช้เวลาค่อนข้างพอสมควร หากนำ CSS เฟรมเวิร์กมาช่วยจัดรูปแบบ Style ของเว็บเพจ ที่ประกอบด้วย Grid และ Flexbox ที่รองรับการจัดโครงร่างของเว็บเพจแบบ Responsive ซึ่งให้สามารถเปิดบนอุปกรณ์ที่มีขนาดหน้าจอที่ต่างกันได้ โดยรูปแบบ CSS เฟรมเวิร์กโค้ดจะดูน้อยและจัดการได้ง่าย',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    img: tailwind,
    icon: <BiLogoTailwindCss className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'CSS เฟรมเวิร์กมาช่วยจัดรูปแบบ Style ของเว็บเพจ ที่รองรับการจัดโครงร่างของเว็บเพจแบบ Responsive',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    img: nodejs,
    icon: <FaNode className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'เป็นสภาพแวดล้อมรันไทม์ของ JavaScript ทำงานฝั่งเซิร์ฟเวอร์ แล้วประมวลผลบนพื้นฐานของ Google V8 Engine รูปแบบการทำงาน Non-Blocking I/O เว็บแอปจึงตอบสนองได้รวดเร็ว และทำงานได้กับทุกบราวเซอร์ ในขั้นตอนการพัฒนาเขียนโค้ดรับ-ส่งข้อมูล AJAX, REST API, หรือ Webhooks และจัดเก็บเข้าฐานข้อมูล SQL หรือ NoSQL',
  },
  {
    id: nanoid(),
    title: 'ASP.NET Core',
    img: dotnetCore,
    text: 'เป็น เฟรมเวิร์ก ที่ใช้พัฒนาเว็บแอปพลิเคชัน ที่มีหลักการแบง่การทำงานออกเป็น 3 ส่วน คือ Model, View, Controller เป็น Framework ที่มีความยืดหยุ่น รองรับการใช้งานบนหลายแพลตฟอร์ม เป็นเครื่องมือที่สำคัญในการสร้างแอปพลิเคชันที่ทันสมัยและมีประสิทธิภาพสูง สามารถรองรับการพัฒนาแอปพลิเคชันที่หลากหลาย',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    img: mongo,
    icon: <BiLogoMongodb className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'ฐานข้อมูลที่มีลักษณะโครงสร้างแบบ NoSQL จัดเก็บข้อมูลในรูปแบบ BSON เก็บไว้ในไฟล์ฐานข้อมูล มีทั้งแบบ Structure และ Unstructured มีชื่อ Database ภายในมี Collection, Document และ Field ใช้งานร่วมกับ DBMS ได้ และใช้งานบน Cloud ได้เป็นอย่างดี ในกรณีต้องการเก็บข้อมูลจำนวนมาก',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    img: mysql,
    icon: <GrMysql className="h-16 w-16 text-orange-500 mx-auto" />,
    text: 'ฐานข้อมูล DBMS ที่มีลักษณะโครงสร้างแบบ SQL จัดเก็บข้อมูลในรูปแบบ Relational เก็บไว้ในไฟล์ฐานข้อมูล มีชื่อ Database ภายในมี Table, Record และ Row ในขั้นตอนพัฒนา Query ข้อมูลด้วยภาษาที่อ่านเข้าใจได้ง่าย ฟรีสำหรับเวอร์ชัน Community',
  },
  {
    id: nanoid(),
    title: 'SQL Server',
    img: sqlServer,
    text: 'SQL Server ระบบจัดการฐานข้อมูลที่ถือว่ามีความนิยมและแพร่หลายอย่างกว้างขวางในโลกธุรกิจและองค์กร โดยเป็นส่วนหนึ่งของระบบฐานข้อมูลที่ใช้เทคโนโลยี SQL (Structured Query Language) เพื่อการจัดการข้อมูลในรูปแบบที่มีโครงสร้างและข้อมูลที่มีความสัมพันธ์ได้อย่างมีประสิทธิภาพ',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: books,
    url: 'https://web-books-store.netlify.app/',
    github: 'https://github.com/jayrboy/01-fundamentals-react',
    title: '101 books project',
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
    img: viteApi,
    url: 'https://vite-search-images.netlify.app',
    github: 'https://github.com/jayrboy/search-image-app-vite.git',
    title: 'Vite API Images',
    text: 'ค้นหาข้อมูลรูปภาพด้วย API',
  },
  {
    id: nanoid(),
    img: shopRedux,
    url: 'https://shopping-vite-redux.netlify.app/',
    github: 'https://github.com/jayrboy/shopping-vite-redux.git',
    title: 'shopping application',
    text: 'ระบบตะกร้าสินค้า โดยใช้ Redux Toolkit ปริมาณสินค้า จำนวน ราคา ยอดรวม เพิ่ม/ลดจำนวน และลบรายการสินค้า',
  },
  {
    id: nanoid(),
    img: reactRedux101,
    url: 'https://react-dev-101.netlify.app',
    github: 'https://github.com/jayrboy/react-development-book1.git',
    title: '101 react redux context',
    text: 'พื้นฐานการใช้งาน React และตัวอย่างการสร้างแอปพลิเคชันด้วย react + redux API + context',
  },
  {
    id: nanoid(),
    img: react101,
    url: 'https://react-app-101.netlify.app',
    github: 'https://github.com/jayrboy/react-frontend.git',
    title: '101 react',
    text: 'พื้นฐาน React พัฒนา Web App ด้วย JavaScript และ JSX',
  },
  {
    id: nanoid(),
    img: qrcode,
    url: 'https://qrcode-vite.netlify.app/',
    github: 'https://github.com/jayrboy/QRCode-vite-react',
    title: 'QR Code Generator',
    text: 'สร้าง QRCode จาก link: URL',
  },
];

export const projectsNg = [
  {
    id: nanoid(),
    img: firstAngular,
    url: '/error',
    github: 'https://github.com/jayrboy/first-angular.git',
    title: 'Angular 101',
    text: 'ระบบโชว์หนังสือ สร้าง, แก้ไข, ลบ, upload file, routing, path/:id, render data (CommonModule), input (ngModel) แล้วแต่งหน้าเว็บไซต์ด้วย Bootstrap',
  },
  {
    id: nanoid(),
    img: inventoryProject,
    url: '/error',
    github: 'https://github.com/jayrboy/ngInventory.git',
    title: 'ระบบ Inventory (เชื่อมต่อ API กับ ASP.NET Core)',
    text: 'CRUD นอกจากเพิ่มสต๊อกสินค้า แล้วมีระบบจัดการ เพิ่มจำนวนสต๊อก, ขาย, หมดอายุ ลดจำนวน, ค้นหาข้อมูล, เรียงข้อมูล, แบ่งเพจ, และสามารถดูประวัติการอัปเดตข้อมูลในตาราง PK, FD จาก SQL Server ที่เชื่อมความสัมพันธ์ข้อมูลไว้ใน SSMS แล้วแต่งหน้าเว็บไซต์ด้วย Tailwind CSS',
  },
  {
    id: nanoid(),
    img: firstAngularTravelApp,
    url: 'https://angular-travel-101.netlify.app',
    github: 'https://github.com/jayrboy/first-angular.git',
    title: '101 Travel Project',
    text: 'Tailwind CSS กับ Angular Material, Material Icon - สร้าง Model (interface) - เรียกใช้ API จาก Services - กำหนด Router และ Detail Page - FormGroup - Searching - HTTP (fetch) - JSON file',
  },
  {
    id: nanoid(),
    img: activityProject,
    url: '/error',
    github: 'https://github.com/jayrboy/ngActivity.git',
    title: 'Activity Project',
    text: 'ระบบ Login ใช้ Auth Guard (CanActivateFn), เพิ่มโครงการหลัก วันเริ่ม วันที่สิ้นสิ้น, เพิ่มไฟล์ 100 MB ได้ไม่เกิน 5 ไฟล์, และสามารถเพิ่มกิจกรรมลูกได้เรื่อยๆ เพื่อเพิ่มข้อความ',
  },
];

export const projectsNext = [
  {
    id: nanoid(),
    img: '',
    url: '/error',
    github: 'https://github.com/jayrboy',
    title: 'Next.js 101',
    text: '',
  },
];

export const projectsNode = [
  {
    id: nanoid(),
    img: '',
    url: '/error',
    github: 'https://github.com/jayrboy',
    title: 'Node.js 101',
    text: '',
  },
  {
    id: nanoid(),
    img: '',
    url: '/error',
    github: 'https://github.com/jayrboy',
    title: 'Serverless Function',
    text: '',
  },
  {
    id: nanoid(),
    img: '',
    url: '/error',
    github: 'https://github.com/jayrboy',
    title: 'Deploy Azure (VM & App Services)',
    text: '',
  },
  {
    id: nanoid(),
    img: '',
    url: '/error',
    github: 'https://github.com/jayrboy',
    title: 'Deploy AWS (Docker & Nginx)',
    text: '',
  },
  {
    id: nanoid(),
    img: '',
    url: '/error',
    github: 'https://github.com/jayrboy',
    title: 'Deploy Netlify (monolith)',
    text: '',
  },
  {
    id: nanoid(),
    img: '',
    url: '/error',
    github: 'https://github.com/jayrboy',
    title: 'Deploy Vercel (monolith)',
    text: '',
  },
  {
    id: nanoid(),
    img: '',
    url: '/error',
    github: 'https://github.com/jayrboy',
    title: 'Webhooks Messenger',
    text: '',
  },
];

export const projectsCore = [
  {
    id: nanoid(),
    img: firstCore,
    url: '/error',
    github: 'https://github.com/jayrboy/dotnet-webapi.git',
    title: 'ASP.NET Core 101',
    text: 'สร้าง Web API โดยใช้ Generate API Spec with Swagger หลักการเขียนเว็บแอปพลิเคชันฝั่งเซิร์ฟเวอร์ รูปแบบ Model, View, Controller และ Metadata ทดสอบเขียน REST API (CRUD), Soft Delete, Set Route Path, Validation, Sorting, Searching, Paging, One-to-many Relation API (SQL Server/ SSMS), Upload file API, Export Word-Excel-PDF API, JWT Login, Port Setting',
  },
  {
    id: nanoid(),
    img: inventoryProjectCore,
    url: '/error',
    github: 'https://github.com/jayrboy/dotnet-inventory-stock.git',
    title: 'ระบบ Inventory (เชื่อมต่อ API กับ Angular 17)',
    text: 'CRUD นอกจากเพิ่มสต๊อกสินค้า แล้วมีระบบจัดการ เพิ่มจำนวนสต๊อก, ขาย, หมดอายุ ลดจำนวน, ค้นหาข้อมูล, เรียงข้อมูล, แบ่งเพจ, และสามารถดูประวัติการอัปเดตข้อมูลในตาราง PK, FD จาก SQL Server ที่เชื่อมความสัมพันธ์ข้อมูลไว้ใน SSMS',
  },
  {
    id: nanoid(),
    img: activityProjectCore,
    url: '/error',
    github: 'https://github.com/jayrboy/dotnet-activity.git',
    title: 'ระบบ Activity (เชื่อมต่อ API กับ Angular 17)',
    text: 'Web API เขียนแบบ Base Controllers (MVC), มีการการพิสูจน์ตัวตน (Authentication) และการอนุญาต (Authorization) ด้วย Barer Token (Jwt) ในการใช้งาน API, และจัดการข้อมูลโครงการ ไฟล์ และข้อมูลกิจกรรมเข้าฐานข้อมูล SQL Server โดยใช้หลักการ Database First',
  },
  {
    id: nanoid(),
    img: coreMongoDB,
    url: '/error',
    github: 'https://github.com/jayrboy/dotnet-WebApiMongoDb.git',
    title: 'ASP. NET Core connect MongoDB 101',
    text: 'Web API เชื่อมต่อกับฐานข้อมูล NoSQL ด้วย MongoDB - CRUD พื้นฐาน',
  },
  {
    id: nanoid(),
    img: crudCore,
    url: '/error',
    github: 'https://github.com/jayrboy/dotnet-WebApiMongoDb.git',
    title: 'ASP. NET Core MVC 101',
    text: 'พื้นฐานการใช้งาน ASP.NET Core MVC ด้วยภาษา C# - ใช้ฐานข้อมูลจำลอง Northwind ใช้ Entity Framework แปลงฐานข้อมูลให้อยู่ในรูปแบบคลาส Model, แสดงข้อมูล 2 ตาราง, แสดงข้อมูลรายการเดียว, สร้าง, แก้ไข, ลบ',
  },
  {
    id: nanoid(),
    img: webserverSocket,
    url: '/error',
    github: 'https://github.com/jayrboy/WebServerSocket.git',
    title: 'WebServerSocket / Angular 18',
    text: 'เขียนโปรแกรมฝั่งไคเอนต์และเซิร์ฟเวอร์เพื่อใข้สำหรับ รับ และส่งข้อความระหว่างกันผ่าน TCP ทำการ Broadcast ให้กับ Web client ที่แสดงผลด้วย Angular',
  },
];
