<template>
    <div class="bg-gradient-to-r from-black to-gray-900 p-12 text-white ">
        <h2 class="text-center text-2xl">Series</h2>
            <div class="flex w-full p-2">         
                Top Rated
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>
            <Lister />

            <div class="flex w-full  p-2">         
                popular
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>
            
            <Lister filterType="popular"/>

            <div class="flex w-full  p-2">         
                Airing Today
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>
           
            <Lister filterType="airing_today"/>

        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>