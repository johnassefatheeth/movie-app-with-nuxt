<template>
    <div class="bg-gradient-to-r from-black to-gray-900 p-12 text-white ">
        <h2 class="text-center text-2xl">Movies</h2>
            <div class="flex w-full p-2">         
                Recent
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>
            <div class="w-full  px-14 ">
                <Movie/><Movie/><Movie/>
                <Movie/><Movie/>
            </div>
            <div class="flex w-full  p-2">         
                Top
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>
            <div class="w-full  px-14 ">
                <Movie/><Movie/><Movie/>
                <Movie/><Movie/>
            </div>

            <div class="flex w-full  p-2">         
                Legendary
                <hr class="m-4 w-full border-1 border-white mt-4">
            </div>
            <div class="w-full  px-14 ">
                <Movie/><Movie/><Movie/>
                <Movie/><Movie/>
            </div>

        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>