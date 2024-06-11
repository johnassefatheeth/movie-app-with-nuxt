<template>
    <div class="bg-gradient-to-r from-black to-gray-900 p-12 text-white ">
        <h2 class="text-center text-2xl">Movies</h2>
            <div class="flex w-full p-2">         
                Popular
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>
            
            <Lister filterType="popular"  tvOrMovies="movie"/>

            <!-- <div class="flex w-full  p-2">         
                latest
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>

            <Lister filterType="latest" tvOrMovies="movie"/> -->
            <div class="flex w-full  p-2">         
                Top Rated
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>

            <Lister tvOrMovies="movie"/>
            
            <div class="flex w-full  p-2">         
                upcoming
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>

            <Lister filterType="upcoming" tvOrMovies="movie" />

            <div class="flex w-full  p-2">         
                Now Playing
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>

            <Lister filterType="now_playing" tvOrMovies="movie" />

        </div>
</template>

<script setup>


</script>