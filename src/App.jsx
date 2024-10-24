import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
//import Image from "./components/Image";
import deved from "../public/dev-ed-wave.png";
//import ImageComponent from "./components/Image"


function App() {

  return <div className="bg-white px-10 text-black">
    <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-bold">Jujedev</h1>
            <ul className="flex items-center">
                <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
                <li>
                    <a className="bg-gradient-to-b from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
                </li>
              </ul>
        </nav>
        <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-bold">Mauricio Maldonado</h2>
            <h3 className="text-2xl py-2 font-bold">Desarrollador Backend</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Hola! Soy un estudiante de Ingenieria en Sistemas de la Información en Universidad Tecnológica Nacional. Me gusta diseñar proyectos propios y estar en constante aprendizaje.</p>
        </div>
        <div className="text-5xl flex justify-center gap-14 py-3 text-gray-900">
            <AiFillGithub className=""/>
            <AiFillLinkedin className=""/>
            <AiFillMail className=""/>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <img src={deved} alt="dev-ed-wave" className=""/>
        </div>
    </section>
  </div>
}

export default App
