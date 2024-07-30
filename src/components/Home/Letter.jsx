import React from 'react'

export const Letter = ({text}) => {
   
    return (
        <>
        <hr
        className="h-[3px] w-80 md:w-1/3 bg-transparent bg-gradient-to-r from-transparent via-sky-500/80 to-transparent"
    />
        <div className='flex justify-center items-center w-80 md:w-1/3 h-14 bg-gradient-to-r from-transparent via-indigo-200/40 to-transparent overflow-hidden '>
            <span className={`${text === '♥️ ♥️ ♥️' ? 'marquee' : 'marqueeSlow' } text-2xl`}>
            {text}
            </span>
        </div>
        <hr
        className="h-[3px] w-80 md:w-1/3 bg-transparent bg-gradient-to-r from-transparent via-sky-500/80 to-transparent"
    />
        </>
    )
}
