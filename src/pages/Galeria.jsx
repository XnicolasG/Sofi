import React from 'react'
import {GalleryItem} from '../components/Galeria/GalleryItem'

export const Galeria = () => {
  const photos = [
    {
      photo: '/img/galeria/galeria-1.jpg',
      msg: '',
      positon: 'one'
    },
    {
      photo: '/img/galeria/galeria-2.jpg',
      msg: '',
      positon: 'two'
    },
    {
      photo: '/img/galeria/galeria-3.jpg',
      msg: '',
      positon: 'three'
    },
    {
      photo: '/img/galeria/galeria-4.jpg',
      msg: '',
      positon: 'four'
    },
    {
      photo: '/img/galeria/galeria-5.jpg',
      msg: '',
      positon: 'five'
    },
    {
      photo: '/img/galeria/galeria-6.jpg',
      msg: '',
      positon: 'six'
    },
    {
      photo: '/img/galeria/galeria-7.jpg',
      msg: '',
      positon: 'seven'
    },
    
  ]
  return (
      <section className="flex flex-col w-full min-h-screen mt-8 items-center p-4">
        <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-600 bg-clip-text text-transparent  font-bold mb-6">Nuestro rincon de aventuras</h1>
        <main className="grid_gallery w-full max-w-4xl gap-4 rounded-lg shadow-lg ">
      {
        photos.map((photo ) => (
          <GalleryItem  key={photo.positon} photo={photo} className={photo.positon} />
        ))
      }
      </main>

    </section>
  )
}
