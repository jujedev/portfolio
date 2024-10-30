import React from 'react';
import ImageComponent from './Image';
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

const ProjectCard = ({image}) => {
    return (
        <div className='rounded-xl relative inline-block bg-gray-700 hover:shadow-gray-800 hover:shadow-lg shadow-gray-500 shadow-lg transition-shadow hover:transform-gpu hover:scale-100 hover:transition-all hover:opacity-100 group'>
            <div className="basis-1/3 flex-1 group-hover:opacity-80">
                <img src={image} className="rounded-xl" />
            </div>
            <div className="absolute inset-0 group-hover:bg-gradient-to-t group-hover:from-gray-100 group-hover:to-transparent rounded-xl"></div>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-6 flex '>
                <a href='#'>
                    <AiFillGithub className='w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity' />
                </a>
                <a href='#'>
                    <AiFillChrome className='w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity' />
                </a>
            </div>
        </div>
    )
};

export default ProjectCard;