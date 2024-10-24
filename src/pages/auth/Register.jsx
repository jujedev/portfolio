import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiUserLine } from 'react-icons/ri'
const Register = () => {

    const[showPassword, setShowPassword] = useState(false);

    return (
        <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
            <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
                Crear <span className='text-primary'>cuenta</span>
            </h1>
            <form className='mb-6'>
                <button
                    className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100'>
                    <img src="../../../multimedia/icons/logo_google.png" alt="logo-google" className='w-4 h-4'/>
                    Registrate con google
                </button>
                <div className='relative mb-4'>
                    <RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                    <input type="text" placeholder='Nombre(s)'
                           className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'/>
                </div>
                <div className='relative mb-4'>
                    <RiUserLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                    <input type="text" placeholder='Apellidos'
                           className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'/>
                </div>
                <div className='relative mb-4'>
                    <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                    <input type="email" placeholder='Correo electrónico'
                           className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg'/>
                </div>
                <div className='relative mb-4'>
                    <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                    <input type={showPassword ? "text" : "password"} placeholder='Contraseña'
                           className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg'/>

                    {showPassword ? (
                            <RiEyeOffLine onClick={() => setShowPassword(!showPassword)}
                                          className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'/>)
                        :
                        (<RiEyeLine onClick={() => setShowPassword(!showPassword)}
                                    className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'/>)
                    }
                </div>
                <div className='relative mb-8'>
                    <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                    <input type={showPassword ? "text" : "password"} placeholder='Confirmar contraseña'
                           className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg'/>

                    {showPassword ? (
                            <RiEyeOffLine onClick={() => setShowPassword(!showPassword)}
                                          className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'/>)
                        :
                        (<RiEyeLine onClick={() => setShowPassword(!showPassword)}
                                    className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'/>)
                    }
                </div>
                <div>
                    <button type='submit'
                            className='bg-primary w-full text-secondary-100 font-bold py-3 px-4 rounded-lg hover:text-gray-100 transition-colors uppercase text-sm'>
                        Registrarme
                    </button>
                </div>
            </form>
            <div className='flex items-center flex-col gap-4'>
                <span className='flex gap-2'>
                    Ya tienes cuenta?<Link to="/auth"
                                           className='text-primary hover:text-gray-100 transition-colors'>
                        Ingresar
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Register;