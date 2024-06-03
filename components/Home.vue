<template>
    <div class="w-full h-screen bg-black">
      <swiper class="h-full" 
        :spaceBetween="30"
        :centeredSlides="true"
        :modules="modules"
        :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
      >
        <swiper-slide>
          <img src="https://cdn.wallpapersafari.com/63/91/EGjUcK.jpg" class="w-full h-full object-fill opacity-40">
        </swiper-slide>
        <swiper-slide>
          <img src="https://ntvb.tmsimg.com/assets/p12676586_v_h8_ad.jpg?w=1280&h=720" class="w-full h-full object-fill opacity-40">
        </swiper-slide>
        <swiper-slide>
          <img src="https://i0.wp.com/viventeandante.com/wp-content/uploads/2021/12/Critica-Matrix-Resurrections.jpg?resize=1000%2C600&ssl=1" class="w-full h-full object-center opacity-40">
        </swiper-slide>
        <!-- ... -->
      </swiper>
    <div class="absolute top-0 z-10 w-full h-screen bg-opacity-25 bg-black  flex justify-center items-center sm:flex-col">
       <div class="mr-52 m-4 text-white font-extrabold text-8xl sm:text-6xl text-center w-1/2 h-full flex justify-center items-center backdrop-blur-sm sm:h-fit sm:mr-0 sm:mb-4">
            FIND WHAT YOU MISSING ON
       </div>
       <button class="w-[200px] h-[50px] m-4 bg-orange-700 rounded-full font-bold text-white lg:text-2xl lg:w-[300px] lg:h-[80px]">
        EXPLORE
       </button>

      </div>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  
  const modules = [Autoplay, Pagination, Navigation];
  
  </script>