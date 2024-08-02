import React from 'react'

export const FlipImageCard = () => {
  const [state, setState] = useState([
    {msg: 'hola'},
    {msg2: 'chao'},
    {cat: 'yuyito'}
  ])

    const imageSrc = {
        frontImg: "/img/me-cupon.jpg",
        altFront: 'front',
        backImg: "/img/Me-cupon-back.jpg",
        altBack: 'back',
    };
  return (
    <div className="w-36 h-44 mx-auto relative [perspective:1000px] hover:[transform:rotateY(180deg)] transition-transform duration-500">
      <div className="w-full h-full relative [transform-style:preserve-3d]">
        {/* Cara frontal */}
        <div className="absolute w-full h-full backface-hidden">
          <img 
            src={imageSrc.frontImg} 
            alt={imageSrc.altFront} 
            className="w-full h-full object-cover rounded shadow-lg"
          />
        </div>
        {/* Cara trasera */}
        <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden">
          <img 
            src={imageSrc.backImg} 
            alt={imageSrc.altBack} 
            className="w-full h-full object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
