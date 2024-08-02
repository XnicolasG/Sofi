
import './FlipImageCard.css'

export const FlipImageCard = ({imageSrc}) => {

  return (
    <div className="photo-card mx-auto my-auto ">
      <div className="photo-card__inner rounded-lg shadow-md">
        <div className="photo-card__front">
          <img
            src={imageSrc.frontImg}
            alt={imageSrc.altFront}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="photo-card__back">
          <img
            src={imageSrc.backImg}
            alt={imageSrc.altBack}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
