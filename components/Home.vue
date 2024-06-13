<template>
  <div class="w-full h-screen bg-black relative">
    <swiper class="h-full" 
      :spaceBetween="30"
      :centeredSlides="true"
      :modules="modules"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide v-for="movie in popularMovies" :key="movie.id">
        <img :src="'https://image.tmdb.org/t/p/w1280' + movie.poster_path" class="w-full h-full object-cover opacity-40">
      </swiper-slide>
    </swiper>
    <div class="absolute top-0 z-10 w-full h-screen bg-opacity-25 bg-black  flex justify-center items-center flex-col">
      <div class="m-4 text-white font-extrabold text-6xl  text-center w-1/2  flex justify-center items-center backdrop-blur-sm  sm:mr-0">
        FIND WHAT YOU'RE MISSING ON
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
import axios from 'axios';

const modules = [Autoplay, Pagination, Navigation];
const popularMovies = ref([]);

// Fetch popular movies from TMDB API
const fetchPopularMovies = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '83393ab8ab75bb658f2250fece439a12',
        language: 'en-US',
        page: 1, // You can adjust the page number as needed
      },
    });
    popularMovies.value = response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
};

onMounted(() => {
  fetchPopularMovies();
});
</script>
