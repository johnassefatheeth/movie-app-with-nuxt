<template>
  <div class="w-full px-14 ease-in duration-500">
    <div v-if="data === null">Loading...</div>
    <div v-else class="flex flex-wrap">
      <!-- Handle the case for the 'latest' filter type -->
      <div v-if="props.filterType === 'latest'" class="bg-black flex-shrink-0 m-2">
        <img :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`" class="w-[200px]">
      </div>
      <!-- Handle the case for other filter types -->
      <div v-else v-for="(show, index) in displayedShows" :key="show.id" class="bg-black flex-shrink-0 m-2">
        <img :src="`https://image.tmdb.org/t/p/w500${show.poster_path}`" class="w-[200px]">
      </div>
    </div>
    <!-- Conditionally render the button only if not showing 'latest' -->
    <button v-if="props.filterType !== 'latest'" @click="showAll = !showAll" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">{{ showAll ? 'Less' : 'More' }}</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import { defineProps } from 'vue';

// Define the props
const props = defineProps({
  filterType: {
    type: String,
    required: false,
    default: 'top_rated' // default value if not provided
  },
  tvOrMovies: {
    type: String,
    required: false,
    default: 'tv' // default value if not provided
  }
});

const data = ref(null);
const showAll = ref(false);

const getShowsOrMovies = async (filterType, tvOrMovies) => {
  try {
    let url;
    if (filterType === 'latest') {
      url = `https://api.themoviedb.org/3/${tvOrMovies}/latest?api_key=83393ab8ab75bb658f2250fece439a12`;
    } else {
      url = `https://api.themoviedb.org/3/${tvOrMovies}/${filterType}?api_key=83393ab8ab75bb658f2250fece439a12`;
    }
    const response = await axios.get(url);
    return filterType === 'latest' ? response.data : response.data.results;
  } catch (error) {
    console.error(error);
    return filterType === 'latest' ? {} : [];
  }
};

// Fetch shows or movies whenever the component is mounted or the filterType or tvOrMovies changes
onMounted(async () => {
  data.value = await getShowsOrMovies(props.filterType, props.tvOrMovies);
});

// Watch for changes in the filterType or tvOrMovies prop and fetch new data accordingly
watch([() => props.filterType, () => props.tvOrMovies], async ([newFilterType, newTvOrMovies]) => {
  data.value = await getShowsOrMovies(newFilterType, newTvOrMovies);
});

const displayedShows = computed(() => {
  return showAll.value ? data.value : data.value.slice(0, 6);
});
</script>
