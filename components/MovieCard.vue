<template>
    <div class="hover-wrapper">
        <NuxtLink :to="`/details/${movieId}`"> hasha
      <img :src="`https://image.tmdb.org/t/p/w500${imagepath}`" class="w-[200px] transition-opacity duration-300 ease-in-out hover:opacity-40 m-4">
      <div class="absolute top-0 right-0 bg-red-600 text-white p-1 text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {{ movieRating.toFixed(1) }}
      </div>
      <div class="absolute bottom-0 left-0 right-0 p-2 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 description-box">
        {{ overview }}
      </div>
    </NuxtLink>
    </div>
  </template>
  <script setup>

const props = defineProps({
  overview: {
    type: String,
    required: false,
    default: 'top_rated' // default value if not provided
  },
  imagepath: {
    type: String,
    required: true,
  },
  movieRating: {
    type: Number,
    required: false,
    default: 0 // default value if not provided
  },
  movieId: {
    type: Number,
    required: true,
  }
});

</script>
  
  <style scoped>
  .hover-wrapper {
    position: relative;
  }
  
  .hover-wrapper img:hover {
    opacity: 0.4;
  }
  
  .hover-wrapper .absolute {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .hover-wrapper:hover .absolute {
    opacity: 1;
  }
  
  .description-box {
    max-height: 200px; 
    overflow: hidden;
  }
  </style>