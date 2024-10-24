import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
const ForgetPassword = () => {

    const[showPassword, setShowPassword] = useState(false);

    return (
        <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
            <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
                Recuperar contraseña
            </h1>
            <form className='mb-8'>
                <div className='relative mb-8'>
                    <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                    <input type="email" placeholder='Correo electrónico' className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg' />
                </div>
                <div>
                    <button type='submit' className='bg-primary w-full text-secondary-100 font-bold py-3 px-4 rounded-lg hover:text-gray-100 transition-colors uppercase text-sm'>
                        Enviar instrucciones
                    </button>
                </div>
            </form>
            <div className='flex items-center flex-col gap-4'>
                <span className='flex gap-2'>
                    Ya tienes cuenta?
                    <Link to="/auth" className='text-primary hover:text-gray-100 transition-colors'>
                        Ingresa
                    </Link>
                </span>
                <span className='flex gap-2'>
                    No tienes cuenta?
                    <Link to="/auth/registro" className='text-primary hover:text-gray-100 transition-colors'>
                        Registrate
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default ForgetPassword;