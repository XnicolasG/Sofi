import React, { useState } from 'react';

export const Cupon = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => setFlipped(!flipped);

    return (
        <section className='flex mt-8 justify-center min-h-screen'>
            <article className='w-[90%] md:w-2/3 h-1/2 relative overflow-hidden bg-gradient-to-br from-emerald-200 to-sky-300 rounded-lg shadow-lg'>
                {/* Contenedor de la carta */}
                <div className={`w-full h-full flex transition-transform duration-500 ${flipped ? 'translate-x-[-100%]' : 'translate-x-0'}`}>
                    {/* Cara delantera */}
                    <section className='w-full h-full flex-shrink-0 flex overflow-hidden flex-row gap-y-2 '>
                        <div>

                        <h1 className='text-center font-semibold text-xl'>Cupon para desayuno</h1>
                        <article className='flex flex-col items-center gap-y-2 px-2'>
                            <p className='text-start text-sm'>Presenta este cupon el dia de tu cumpleaños para un desayuno en tu casa.</p>
                            <p className='text-pretty text-sm'>Se enviara alguien para cocinar el desayuno, haga click para saber quien sera enviado</p>
                            <button
                                onClick={handleFlip}
                                className='w-1/2 text-center my-2 font-semibold text-stone-200 rounded-xl bg-indigo-500 transition-all shadow-md duration-100 hover:bg-indigo-600'>
                                Ver cocinero
                            </button>
                        </article>
                                    </div>
                        <div className="w-full h-96 bg-cupon-image object-cover bg-cover bg-center"></div>
                    </section>

                    <section className='w-full h-full flex-shrink-0 flex flex-col items-center gap-y-1 bg-gradient-to-br from-green-200 to-teal-300'>
                        <h1 className='font-semibold text-xl'>Te amo</h1>
                        <img src="img/me-cupon.jpg" alt="desayuno" className="w-36 rounded shadow-lg mx-auto my-4" />
                        <button
                            className='w-1/2 text-center font-semibold text-stone-200 rounded-xl bg-indigo-500 transition-all shadow-md duration-100 hover:bg-indigo-600'
                            onClick={handleFlip}
                        >
                            Volver
                        </button>
                    </section>
                </div>
            </article>
        </section>
    );
}


