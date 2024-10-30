import React from 'react';
import ImageComponent from './Image';
import PropTypes from 'prop-types';

const SkillsCard = ({ logo, titulo, subtitulo, skill1, skill2, skill3, skill4}) => {
    return (
        <div className="basis-1/3 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:shadow-black hover:transform-gpu hover:scale-105 hover:transition-transform">
            <div className="flex justify-center">
                <ImageComponent src={logo[0]} height={100} width={100} className="" />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">{logo[1]}</h3>
            <p className="py-2 dark:text-gray-300">{titulo}</p>
            <h4 className="py-4 text-teal-600">{subtitulo}</h4>
            <div className="flex gap-3 pt-4">
                <div className="flex flex-col items-center basis-1/4">
                    <img src={skill1[0]} width={40} height={40} alt="" className="" />
                    <p className="text-gray-800 dark:text-gray-300 py-1"><strong>{skill1[1]}</strong></p>
                </div>
                <div className="flex flex-col items-center basis-1/4">
                    <img src={skill2[0]} width={40} height={40} alt="" />
                    <p className="text-gray-800 dark:text-gray-300 py-1"><strong>{skill2[1]}</strong></p>
                </div>
                <div className="flex flex-col items-center basis-1/4">
                    <img src={skill3[0]} width={40} height={40} alt="" />
                    <p className="text-gray-800 dark:text-gray-300 py-1"><strong>{skill3[1]}</strong></p>
                </div>
                <div className="flex flex-col items-center basis-1/4">
                    <img src={skill4[0]} width={40} height={40} alt="" />
                    <p className="text-gray-800 dark:text-gray-300 py-1"><strong>{skill4[1]}</strong></p>
                </div>
            </div>
        </div>
    );
};

/*SkillsCard.propTypes = {
    titulo: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};*/

export default SkillsCard;