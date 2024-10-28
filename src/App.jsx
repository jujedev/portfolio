import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useState } from "react";

import deved from "/dev-ed-wave.png?url";
import design from "/design.png?url";
import code from "/code.png?url";
import consulting from "/consulting.png?url";
import ImageComponent from "./components/Image";
import web1 from "/web1.png?url";
import web2 from "/web2.png?url";
import web3 from "/web3.png?url";
import web4 from "/web4.png?url";
import web5 from "/web5.png?url";
import web6 from "/web6.png?url";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode ? "dark" : ""}>
          <div className="bg-white px-10 text-black md:px-20 lg:px-40 dark:bg-gray-900">
            <section className="min-h-screen">
                <nav className="py-10 mb-10 flex justify-between">
                    <div className="flex">
                        <h1 className="text-xl font-bold dark:text-white">JUJEDEV</h1>
                    </div>
                    <ul className="flex items-center">
                        {darkMode ? (
                        <IoSunnyOutline  onClick={() => setDarkMode(!darkMode)} className="text-white cursor-pointer text-2xl" /> )
                        : 
                        (<IoMoonOutline onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /> )
                        }
                        <li>
                            <a className="bg-gradient-to-b from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-full ml-8" href="#">Mi CV</a>
                        </li>
                      </ul>
                </nav>
                <div className="text-center pt-10">
                    <h2 className="text-5xl py-2 text-teal-600 font-bold md:text-6xl dark:text-teal-400">Mauricio Maldonado</h2>
                    <h3 className="text-2xl py-2 font-bold md:text-3xl dark:text-white ">Desarrollador Backend</h3>
                    <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">¡Hola! Soy estudiante de Ingeniería en Sistemas de la Información en la Universidad Tecnológica Nacional. Me apasiona diseñar proyectos y aprender constantemente. Aunque me especializo en el desarrollo backend, disfruto aprender sobre React como hobby, con el objetivo de complementar mis habilidades en frontend y backend en el futuro.</p>
                </div>
                <div className="text-5xl flex justify-center gap-14 py-2 text-gray-500 dark:text-gray-600">
                    <a className="hover:text-black transition-colors dark:hover:text-white" target={"_blank"} href={"https://github.com/jujedev/"}>
                        <AiFillGithub className=""/>
                    </a>
                    <a className="hover:text-blue-700 transition-colors dark:hover:text-blue-400" target={"_blank"} href={"https://www.linkedin.com/in/m-a-maldonado/"}>
                        <AiFillLinkedin className=""/>
                    </a>
                    <a className="hover:text-red-700 transition-colors dark:hover:text-red-400" target={"_blank"} href={"mailto:maurimaldonado6@gmail.com"}>
                        <AiFillMail className=""/>
                    </a>
                </div>
                <div className="mt-10 w-80 h-80 mx-auto relative rounded-full justify-items-center">
                    <img src={deved} alt="" className="pt-10 bg-gradient-to-b from-teal-600 to-teal-100 w-80 h-80 rounded-full" style={{objectFit:'fill'}}/>
                </div>
            </section>
            <section>
                <div>
                    <h3 className="text-3xl pt-10 py-1">Services I offer</h3>
                    <p className="text-md   py-2 leading-8 text-gray-800">
                        Since the beginning of my journey  as a freelance designer and developer, I've done remote work for <span className="text-teal-500">agencies</span>, consulted for <span className="text-teal-500">startups</span>, and collaborated with talented people to create digital products for both business and consumer use.
                    </p>
                </div>
                <div className="lg:flex gap-20">
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                        <div className="flex justify-center">
                            <ImageComponent src={design} height={100} width={100} className="" />
                        </div>
                        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                        <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
                        <h4 className="py-4 text-teal-600">Design tools I use</h4>
                        <p className="text-gray-800 py-1">Photoshop</p>
                        <p className="text-gray-800 py-1">Illustrator</p>
                        <p className="text-gray-800 py-1">Figma</p>
                    </div>
                    <div className="text-center shadow-lg p-10 rounded-xl my-10">
                        <div className="flex justify-center">
                            <ImageComponent src={consulting} height={100} width={100} className="" />
                        </div>
                        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                        <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
                        <h4 className="py-4 text-teal-600">Design tools I use</h4>
                        <p className="text-gray-800 py-1">Photoshop</p>
                        <p className="text-gray-800 py-1">Illustrator</p>
                        <p className="text-gray-800 py-1">Figma</p>
                    </div>
                    <div className="text-center shadow-lg p-10 justify-items-center items-center rounded-xl my-10">
                        <div className="flex justify-center">
                            <ImageComponent src={code} height={100} width={100} className="" />
                        </div>
                        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                        <p className="py-2">Creating elegant designs suited for your needs following core design theory</p>
                        <h4 className="py-4 text-teal-600">Design tools I use</h4>
                        <p className="text-gray-800 py-1">Photoshop</p>
                        <p className="text-gray-800 py-1">Illustrator</p>
                        <p className="text-gray-800 py-1">Figma</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h3 className="text-3xl py-1">Proyectos</h3>
                    <p className="text-md   py-2 leading-8 text-gray-800">
                        Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span
                        className="text-teal-500">agencies</span>, consulted for <span className="text-teal-500">startups</span>,
                        and collaborated with talented people to create digital products for both business and consumer use.
                    </p>
                </div>
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                    <div className="rounded-xl basis-1/3 flex-1 hover:shadow-teal-600 shadow-gray-500 shadow-lg transition-shadow">
                        <ImageComponent src={web1} />
                    </div>
                    <div className="rounded-xl basis-1/3 flex-1 hover:shadow-teal-600 shadow-gray-500 shadow-lg transition-shadow">
                        <ImageComponent src={web2} />
                    </div>
                    <div className="rounded-xl basis-1/3 flex-1 hover:shadow-teal-600 shadow-gray-500 shadow-lg transition-shadow">
                        <ImageComponent src={web3} />
                    </div>
                    <div className="rounded-xl basis-1/3 flex-1 hover:shadow-teal-600 shadow-gray-500 shadow-lg transition-shadow">
                        <ImageComponent src={web4} />
                    </div>
                </div>
            </section>
          </div>
      </div>
  )
}

export default App
