import React from 'react'
import { Letter } from '../components/Home/Letter'

export const Home = () => {
    return (
        <main className='relative flex flex-col place-items-center justify-center h-2/3'>
            <section className='group relative flex justify-center overflow-hidden h-96 w-72 bg-gradient-to-b from-green-300 to-emerald-600 rounded-t-full'>
                <img className='w-full drop-shadow-xl group-hover:scale-105 transition-all duration-200' src="img/Main.png" alt="main-sofi" />
            </section>
            <h2 className='absolute top-16 md:top-24 text-3xl w-full text-sky-950 text-center '>Contando los minutos</h2>
            <Letter />
        </main>
    )
}
