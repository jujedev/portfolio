import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import PdfButton from "./components/PdfButton";
import SkillsCard from "./components/SkillsCard";
import ProjectCard from "./components/ProjectCard";

import deved from "/dev-ed-wave.png?url";
import ImageComponent from "./components/Image";
import backend from "/backend.svg";
import frontend from "/frontend.svg";
import database from "/database.svg";
import java from "/java.svg";
import c from "/c.svg";
import python from "/python.svg";
import springboot from "/springboot.svg";
import html from "/html.svg";
import css from "/css.svg";
import javascript from "/javascript.svg";
import react from "/react.svg";
import docker from "/docker.svg";
import mysql from "/mysql.svg";
import tailwind from "/tailwind.svg";
import git from "/git.svg";
import web1 from "/web1.png?url";
import web2 from "/web2.png?url";
import web3 from "/web3.png?url";
import web4 from "/web4.png?url";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode ? "dark" : ""}>
          <div className="bg-white px-10 text-black md:px-20 lg:px-40 dark:bg-gray-900">
            <section className="min-h-screen">
                <nav className="py-10 mb-5 flex justify-between">
                    <div className="flex">
                        <h1 className="text-2xl font-bold dark:text-white">JUJEDEV</h1>
                    </div>
                    <ul className="flex items-center">
                        {darkMode ? (
                        <IoSunnyOutline  onClick={() => setDarkMode(!darkMode)} className="text-white cursor-pointer text-2xl" /> )
                        : 
                        (<IoMoonOutline onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /> )
                        }
                        <li>
                            <PdfButton />
                        </li>
                      </ul>
                </nav>
                <div className="text-center pt-5">
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
                    <h3 className="text-3xl pt-10 py-1 dark:text-white">Habilidades Técnicas</h3>
                    <hr></hr>
                    <p className="text-md md:text-xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                    Durante mi trayectoria como <span className="text-teal-500">desarrollador de software</span>, he adquirido habilidades que me permiten desarrollar aplicaciones de manera efectiva. A continuación, destaco algunas de las más relevantes:
                    </p>
                </div>
                <div className="lg:flex gap-20">
                    <SkillsCard 
                        logo={[backend, "Backend"]}
                        titulo={"Desarrollo de código robusto, escalable y mantenible."}
                        subtitulo={"Lenguajes, librerias y frameworks usados"}
                        skill1={[java, "Java"]}
                        skill2={[c, "C"]}
                        skill3={[python, "Python"]}
                        skill4={[springboot, "Spring boot"]}
                    />

                    <SkillsCard 
                        logo={[frontend, "Frontend"]}
                        titulo={"Interfaces amigables, diseños responsivos y a medida. Enfocados en la experiencia del usuario."}
                        subtitulo={"Lenguajes, librerias y frameworks usados"}
                        skill1={[html, "HTML"]}
                        skill2={[css, "CSS"]}
                        skill3={[javascript, "Javascript"]}
                        skill4={[react, "React"]}
                    />

                    <SkillsCard 
                        logo={[database, "Tecnologías y Bases de datos"]}
                        titulo={"Utilizo herramientas para mejorar, optimizar y configurar entornos estables."}
                        subtitulo={"Lenguajes, librerias y frameworks usados"}
                        skill1={[docker, "Docker"]}
                        skill2={[mysql, "MySQL"]}
                        skill3={[tailwind, "Tailwind CSS"]}
                        skill4={[git, "Git"]}
                    />
                </div>
            </section>
            <section>
                <div>
                    <h3 className="text-3xl py-1 dark:text-white">Proyectos</h3>
                    <hr></hr>
                    <p className="text-md md:text-xl py-2 leading-8 text-gray-800 dark:text-gray-300">
                    Como desarrollador backend, me apasiona crear software que resuelva problemas cotidianos. Utilizo <span className="text-teal-500">Java</span> para el desarrollo, almacenando información en bases de datos <span className="text-teal-500">MySQL</span>. También tengo experiencia con <span className="text-teal-500">React</span> y <span className="text-teal-500">Tailwind</span>, y próximamente trabajaré con <span className="text-teal-500">Spring&nbsp;boot</span>. Mi objetivo es desarrollar interfaces amigables, así como código bien estructurado y escalable. A continuación, presento una selección de mis trabajos, que reflejan mis conocimientos técnicos y mi compromiso con la calidad del software.
                    </p>
                </div>
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                    <ProjectCard image={web1} />
                    <ProjectCard image={web2} />
                    <ProjectCard image={web3} />
                    <ProjectCard image={web4} />
                </div>
            </section>
          </div>
      </div>
  )
}

export default App
