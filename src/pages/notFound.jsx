import React from 'react'

export const NotFound = () => {
    return (
        <div className='flex flex-col gap-4 mt-4 items-center justify-center'>
            <h1 className='text-xl' >Aun no creamos esta pagina</h1>
            <a className='w-1/3 text-stone-200 text-center rounded-2xl py-1 font-semibold text-lg shadow-lg bg-indigo-400 transition-all duration-100 hover:-translate-y-2 hover:bg-indigo-600'
                href="/">
                Inicio
            </a>
        </div>
    )
}
