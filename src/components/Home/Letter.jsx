import React from 'react'

export const Letter = () => {
    return (
        <>
        <hr
        class="h-[3px] w-1/3 bg-transparent bg-gradient-to-r from-transparent via-sky-500/80 to-transparent"
    />
        <div className='flex justify-center items-center w-1/3 h-14 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent overflow-hidden '>
            <span className='marquee text-2xl'>
            ♥️♥️♥️
            </span>
        </div>
        <hr
        class="h-[3px] w-1/3 bg-transparent bg-gradient-to-r from-transparent via-sky-500/80 to-transparent"
    />
        </>
    )
}
