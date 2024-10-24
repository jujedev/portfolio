import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
const Login = () => {

    const[showPassword, setShowPassword] = useState(false);

    return (
        <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]'>
            <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8'>
                Iniciar sesión
            </h1>
            <form className='mb-6'>
                <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100'>
                    <img src="../../../multimedia/icons/logo_google.png" alt="logo-google" className='w-4 h-4' />
                    Ingresa con google
                </button>
                <div className='relative mb-4'>
                    <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                    <input type="email" placeholder='Correo electrónico' className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg' />
                </div>
                <div className='relative mb-8'>
                    <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2'/>
                    <input type={showPassword ? "text" : "password"} placeholder='Contraseña' className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg' />

                    {showPassword ? (
                        <RiEyeOffLine onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer' /> )
                        : 
                        (<RiEyeLine onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer' /> )
                    }
                </div>
                <div>
                    <button type='submit' className='bg-primary w-full text-secondary-100 font-bold py-3 px-4 rounded-lg hover:text-gray-100 transition-colors uppercase text-sm'>
                        Ingresar
                    </button>
                </div>
            </form>
            <div className='flex items-center flex-col gap-4'>
                <Link to="/auth/olvidar-contrasenia" className='hover:text-primary transition-colors'>
                    Olvidaste tu contrasenia?
                </Link>
                <span className='flex gap-2'>
                    No tienes cuenta?<Link to="/auth/registro" className='text-primary hover:text-gray-100 transition-colors'>
                        Registrate
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Login;