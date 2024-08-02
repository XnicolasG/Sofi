import { FlipImageCard } from "./FlipImageCard";

export const CardFace = ({ title, content, buttonText, onFlip, backgroundImage, backgroundGradient,flipped }) =>{ 
   
    
    return(
    <div className={`w-full h-full flex flex-col ${backgroundGradient || backgroundImage} bg-cover bg-center p-6 text-slate-100`}>
      <h1 className="text-center font-semibold text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-red-700 bg-clip-text text-transparent">{title}</h1>
      {content && <p className="text-md font-semibold mb-4 bg-black/60 p-1 rounded">{content}</p>}
      {flipped && <FlipImageCard  />}
      <button
        onClick={onFlip}
        className="mt-auto w-full max-w-xs mx-auto py-2 text-center font-semibold text-white rounded-xl bg-indigo-500 transition-all shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        {buttonText}
      </button>
    </div>
  )};