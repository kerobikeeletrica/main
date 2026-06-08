import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ProductImageCarousel({ images }) {
  if (!images || images.length === 0) return null

  return (
    <Swiper
      modules={[EffectFade, Autoplay, Navigation, Pagination]}
      effect={images.length > 1 ? 'fade' : 'slide'}
      navigation={images.length > 1}
      pagination={images.length > 1 ? { clickable: true } : false}
      autoplay={images.length > 1 ? { delay: 3000, disableOnInteraction: false } : false}
      loop={images.length > 1}
      style={{ width: '100%', borderRadius: '0.8rem', overflow: 'hidden' }}
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`Imagem do produto ${idx + 1}`}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '0.8rem' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
