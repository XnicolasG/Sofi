import React, { useEffect, useState } from 'react'
import { Letter } from '../components/Home/Letter'
import { CountDown } from '../components/Home/CountDown'
import { Title } from '../components/Home/Title'

export const Home = () => {
    const [message, setMessage] = useState('♥️ ♥️ ♥️')
    const targetDate = new Date('2024-07-31T07:50:00').getTime();

    useEffect(() => {
        const updateMessage = () => {
            const now = new Date();
            const difference = targetDate - now
            if (difference <= 0) {
                setMessage('✦Feliz Cumpleaños al amort✦')
            }
        }
        const timer = setInterval(updateMessage, 1000);
        return () => clearInterval(timer)
    }, [targetDate])

    return (
        <main className='relative flex flex-col items-center justify-center h-full'>
            <section className='group relative flex justify-center overflow-hidden h-96 w-72 bg-gradient-to-b from-green-300 to-emerald-600 rounded-t-full'>
                <img className='w-full drop-shadow-xl group-hover:scale-110 transition-all duration-200' src="img/Main.png" alt="main-sofi" />
            </section>
            <h2
                className='absolute top-4 p-2 text-7xl w-full bg-gradient-to-r from-red-400 to-red-800 text-center bg-clip-text text-transparent  font-playground'>
                {/* Contando los minutos */}
                <Title />
            </h2>
            <Letter text={message} />
            <CountDown targetDate={targetDate} />
            <aside className='flex w-2/3 justify-between md:justify-around mt-10'>
                <a
                    className='w-1/2 md:w-1/4 text-stone-200 text-xl text-center rounded-2xl py-1 font-semibold shadow-lg bg-indigo-400 transition-all duration-100 hover:-translate-y-2 hover:bg-indigo-600'
                    href="/cupon">Cupon</a>
                <a
                    className='w-1/2 md:w-1/4 text-stone-200 text-xl text-center rounded-2xl py-1 font-semibold shadow-lg bg-indigo-400 transition-all duration-100 hover:-translate-y-2 hover:bg-indigo-600'
                    href="/galeria">Galleria</a>
            </aside>
        </main>
    )
}
