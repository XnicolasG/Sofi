import React, { useEffect, useState } from 'react'

export const CountDown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date();
        const difference = targetDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (difference < 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <section className='flex gap-x-4 mt-4 text-center'>
            <div className='text-2xl'>
                <strong className='text-purple-500'>{timeLeft.days}</strong>
                <p className='border-t-2 border-teal-500'>Dias</p>
            </div>
            <div className='text-2xl'>
                <strong className='text-violet-500'>{timeLeft.hours}</strong>
                <p className='border-t-2 border-teal-500'>Horas</p>
            </div>
            <div className='text-2xl'>
                <strong className='text-indigo-500'>{timeLeft.minutes}</strong>
                <p className='border-t-2 border-teal-500'>Min</p>
            </div>
            <div className='text-2xl'>
                <strong className='text-blue-500'>{timeLeft.seconds}</strong>
                <p className='border-t-2 border-teal-500'>Seg</p>
            </div>
        </section>
    )
}
