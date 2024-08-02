import React, { useState } from 'react';
import { CardFace } from '../components/Cupon/CardFace';

export const Cupon = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => setFlipped(!flipped);
    
    

    return (
        <section className='flex justify-center mt-8  min-h-screen'>
            <article className="w-[90%] max-w-2xl h-[500px] relative overflow-hidden rounded-lg shadow-xl">
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${flipped ? '-translate-x-full' : 'translate-x-0'}`}>
                    <CardFace
                        title="Cupón para desayuno"
                        content="Presenta este cupón el día de tu cumpleaños para un desayuno en tu casa. Se enviará alguien para cocinar el desayuno, haga clic para saber quién será enviado."
                        buttonText="Ver cocinero"
                        onFlip={handleFlip}
                        backgroundImage="bg-cupon-image"
                        flipped={flipped}
                    />
                </div>
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${flipped ? 'translate-x-0' : 'translate-x-full'}`}>
                    <CardFace
                        title="Te amo"
                        buttonText="Volver"
                        onFlip={handleFlip}
                        backgroundGradient="bg-gradient-to-br from-green-200 to-teal-300"
                        flipped={flipped}

                    />
                </div>
            </article>
        </section>
    );
}


