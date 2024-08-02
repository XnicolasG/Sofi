export const GalleryItem = ({ photo, className }) => (
    <div className={`${className} rounded overflow-hidden`}>
      <img src={photo.photo} alt={`galeria-${photo.id}`} className="w-full h-full object-cover" />
      {photo.msg && <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">{photo.msg}</p>}
    </div>
  );  