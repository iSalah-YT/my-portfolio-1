import React from 'react'
import image from '../philip.jpg'

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='computer'
        className='absolute object-cover h-full w-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold font-abc leading-none lg:leading-snug home-name'>
          Aloha. I'm Salah.
        </h1>
      </section>
    </main>
  )
}
