<template>
 <div
      @mouseleave="hoverOnBrowse = false"
      class="absolute opacity-80 z-20 w-full h-20 bg-gray-400 top-0 transition-all duration-300 ease-in-out hover:opacity-100 "
    > 
      <div class="w-1/5  h-20 float-left">
        <img class="h-full ml-4" src="../assets/image/food.png" alt="">
      </div>
      <ul class="flex justify-evenly items-center h-full float-right mr-4">
        <li
          @mouseover="hoverOnBrowse = false"
          class="hover:text-white transition-all duration-300 ease-in-out m-4 mr-8"
        >
          <NuxtLink to="/" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">Home</NuxtLink>
        </li>
        <li
          class=" m-4 hover:text-white transition-all duration-300 ease-in-out mr-8"
        >
          <NuxtLink to="/about" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">MOVIES</NuxtLink>
        </li>
        <li
          class=" m-4 hover:text-white transition-all duration-300 ease-in-out mr-8"
        >
          <NuxtLink to="/RecipeListing" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">SERIES</NuxtLink>
        </li>
        <li
          class=" m-4 hover:text-white transition-all duration-300 ease-in-out mr-8"
        >
          <NuxtLink to="/login" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">ABOUT</NuxtLink>
        </li>
        
    </ul>
        
    </div>
</template>

<script setup>

</script>