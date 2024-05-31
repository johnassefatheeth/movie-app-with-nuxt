<template>
 <div
      @mouseleave="hoverOnBrowse = false"
      class="absolute opacity-80 z-20 w-full h-20 bg-gray-800 top-0 transition-all duration-300 ease-in-out hover:opacity-100 "
    > 
      <div class="w-1/5  h-20 float-left">
        <!-- <img class="h-full ml-4" src="../assets/image/food.png" alt=""> -->
      </div>
      <ul class="flex justify-evenly items-center h-full float-right mr-4">
        <!-- <li
          @mouseover="hoverOnBrowse = false"
          class="hover:text-white transition-all duration-300 ease-in-out m-4 mr-8"
        >
          <NuxtLink to="/" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">HOME</NuxtLink>
        </li>
        <li
          class=" m-4 hover:text-white transition-all duration-300 ease-in-out mr-8"
        >
          <NuxtLink to="/movies" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">MOVIES</NuxtLink>
        </li> -->
        <li
          class=" m-4 hover:text-white transition-all duration-300 ease-in-out mr-8"
        >
          <NuxtLink to="/series" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">SERIES</NuxtLink>
        </li>
        <li
          class=" m-4 hover:text-white transition-all duration-300 ease-in-out mr-8"
        >
          <NuxtLink to="/about" class="text-gray-300 hover:text-white transition-all duration-300 ease-in-out">ABOUT</NuxtLink>
        </li>
        <li>
            <div class="w-[300px] h-[30px] bg-white rounded-full flex">
                <svg width="28px" height="28px" viewBox="0 0 24 24" class="ml-2" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p class="ml-2">|</p>
                <input type="text" placeholder="search" class="h-full float-end w-[250px] rounded-full p-2 pb-3">
            </div>
        </li>
        
    </ul>
        
    </div>
</template>

<script setup>

</script>