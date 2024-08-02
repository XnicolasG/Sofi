import React from 'react'

export const Title = () => (
    <div className=''>
        <svg width="100%" height="200" viewBox="0 0 500 200">
            <defs>
                <path id="curve" d="M 50,150 A 200,200 0 0,1 450,150" />
            </defs>
            <text className="text-5xl font-playground fill-current text-sky-950">
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Contando los minutos
                </textPath>
            </text>
        </svg>
    </div>
)
