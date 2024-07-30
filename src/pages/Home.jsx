import React, { useEffect, useState } from 'react'
import { Letter } from '../components/Home/Letter'
import { CountDown } from '../components/Home/CountDown'

export const Home = () => {
    const [message, setMessage] = useState('♥️ ♥️ ♥️')
    const targetDate = new Date('2024-07-31T07:50:00').getTime();

    useEffect(() => {
        const updateMessage =()=> {
            const now = new Date();
            if (now >= targetDate) {
                setMessage('✦Feliz Cumpleaños al amort✦')
            }
            const timer = setInterval(updateMessage, 1000);
            return () => clearInterval(timer)
        }
    }, [targetDate])
    return (
        <main className='relative flex flex-col place-items-center justify-center h-2/3'>
            <section className='group relative flex justify-center overflow-hidden h-96 w-72 bg-gradient-to-b from-green-300 to-emerald-600 rounded-t-full'>
                <img className='w-full drop-shadow-xl group-hover:scale-105 transition-all duration-200' src="img/Main.png" alt="main-sofi" />
            </section>
            <h2 className='absolute top-8 md:top-18 text-3xl w-full text-sky-950 text-center '>Contando los minutos</h2>
            <Letter text={message} />
            <CountDown targetDate={targetDate} />
        </main>
    )
}
