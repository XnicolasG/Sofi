import React from 'react'

export const NavBar = () => {
    return (
        <section className='flex justify-center py-3 bg-indigo-200/30 backdrop-blur-sm'>
            <a href='/' title='inicio' className='flex place-items-center gap-x-4 rounded-3xl bg-stone-800/50 py-1 px-4 transiton-all duration-150 cursor-pointer hover:scale-105'>
                <div className='rounded-full size-10 overflow-hidden ring-2 ring-sky-400 '>
                    <img src="/img/avatar-sofi.jpg" alt="sofi" />
                </div>
                <h1 className='text-indigo-100 text-xl font-bold before:content-["Incio"] hover:before:content-["Sofi"] transition-all duration-150'>
                    {/* <span className='text-violet-300'>✦</span> */}
                    
                    {/* <span className='text-violet-400'>✦</span> */}
                </h1>
            </a>
        </section>
    )
}
