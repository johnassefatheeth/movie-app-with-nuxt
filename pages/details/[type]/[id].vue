<template>
  <div class="bg-gradient-to-r from-gray-900 to-black text-white">
    <div v-if="content" class="p-12">
      <h1 class="text-6xl font-bold font-mono text-center mb-4">{{ content.title || content.name }}</h1>
      <div class="w-full flex">
        <img :src="'https://image.tmdb.org/t/p/w500' + content.backdrop_path" alt="Backdrop" class="w-[500px] mx-12 object-cover float-left">
        <div class="mt-2 w-[500px] float-end h-[500px] ml-24">
          <div class="flex w-full">
            <div v-for="genre in content.genres" :key="genre.id">
              <div class="bg-gray-700 w-fit m-3 p-2 rounded-lg">{{ genre.name }}</div>
            </div>
          </div>
          <p class="font-light text-2xl">{{ content.overview }}</p>
          <p class="text-3xl" v-if="content.first_air_date"><strong>First Air Date:</strong> {{ content.first_air_date }}</p>
          <p class="text-3xl" v-if="content.last_air_date"><strong>Last Air Date:</strong> {{ content.last_air_date }}</p>
          <p class="text-3xl"><strong>Rating:</strong> {{ content.vote_average }}</p>
          <p class="text-3xl"><strong>Status:</strong> {{ content.status }}</p>
          <p class="text-3xl"><strong>Tagline:</strong> {{ content.tagline }}</p>
          <p class="text-3xl"><strong>Type:</strong> {{ content.type }}</p>
          <p class="text-3xl"><strong>Number of Seasons:</strong> {{ content.number_of_seasons }}</p>
          <p class="text-3xl"><strong>Number of Episodes:</strong> {{ content.number_of_episodes }}</p>
        </div>
      </div>
      <div class="flex flex-wrap w-full ">
      <div class="m-12"  v-if="content.created_by && content.created_by.length">
        <h2 class="text-4xl mt-12">Created By</h2>
        <ul class="flex flex-wrap">
          <li v-for="creator in content.created_by" :key="creator.id" class="text-2xl m-4">
            <img v-if="creator.profile_path" :src="'https://image.tmdb.org/t/p/w200' + creator.profile_path" alt="Creator Image" class="w-24 h-24 rounded-full">
            <p>{{ creator.name }}</p>
          </li>
        </ul>
      </div>
      <div class="m-12"  v-if="content.networks && content.networks.length">
        <h2 class="text-4xl mt-12">Networks</h2>
        <ul class="flex flex-wrap bg-slate-700">
          <li v-for="network in content.networks" :key="network.id" class="text-2xl m-4">
            <img v-if="network.logo_path" :src="'https://image.tmdb.org/t/p/w200' + network.logo_path" alt="Network Logo" class="w-32 rounded">
            
          </li>
        </ul>
      </div>
      <div class="m-12"  v-if="content.production_companies && content.production_companies.length">
        <h2 class="text-4xl mt-12">Production</h2>
        <ul class="flex flex-wrap bg-slate-700">
          <li v-for="company in content.production_companies" :key="company.id" class="text-2xl m-4">
            <img v-if="company.logo_path" :src="'https://image.tmdb.org/t/p/w200' + company.logo_path" alt="Company Logo" class="w-32  rounded">
            
          </li>
        </ul>
      </div>
    </div>
      <div v-if="content.seasons && content.seasons.length">
        <h2 class="text-4xl m-12">Seasons</h2>
        <ul class="flex flex-wrap m-12">
          <li v-for="season in content.seasons" :key="season.id" class="text-2xl m-4">
            <img v-if="season.poster_path" :src="'https://image.tmdb.org/t/p/w200' + season.poster_path" alt="Season Poster" class="w-42  rounded">
            <p>{{ season.name }}</p>
          </li>
        </ul>
      </div>
      <div class="m-12" v-if="content.last_episode_to_air">
        <h2 class="text-4xl mt-12">Last Episode</h2>
        <p class="text-2xl"><strong>{{ content.last_episode_to_air.name }}</strong> (Season {{ content.last_episode_to_air.season_number }}, Episode {{ content.last_episode_to_air.episode_number }}): {{ content.last_episode_to_air.overview }}</p>
        <img v-if="content.last_episode_to_air.still_path" :src="'https://image.tmdb.org/t/p/w500' + content.last_episode_to_air.still_path" alt="Last Episode Image" class="w-52 mt-4  rounded">
      </div>
      <div class="m-12" v-if="content.next_episode_to_air">
        <h2 class="text-4xl mt-12">Next Episode to Air</h2>
        <p class="text-2xl"><strong>{{ content.next_episode_to_air.name }}</strong> (Season {{ content.next_episode_to_air.season_number }}, Episode {{ content.next_episode_to_air.episode_number }})</p>
      </div>
      <div v-if="trailer">
        <h2 class="text-4xl mt-12 ml-24">Watch Trailer</h2>
        <iframe
          class="m-6"
          :src="'https://www.youtube.com/embed/' + trailer.key"
          width="700"
          height="500"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const content = ref(null);
const trailer = ref(null);
const type = ref('');

const fetchDetails = async (id, type) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
      params: {
        api_key: '83393ab8ab75bb658f2250fece439a12'  // Replace with your actual TMDB API key
      }
    });
    content.value = response.data;
  } catch (error) {
    console.error(`Error fetching ${type} details:`, error);
  }
};

const fetchTrailer = async (id, type) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
      params: {
        api_key: '83393ab8ab75bb658f2250fece439a12'  // Replace with your actual TMDB API key
      }
    });
    const trailers = response.data.results;
    trailer.value = trailers.find(video => video.type === 'Trailer' && video.site === 'YouTube');
  } catch (error) {
    console.error(`Error fetching ${type} trailer:`, error);
  }
};

onMounted(() => {
  const id = route.params.id;
  type.value = route.params.type === 'movie' ? 'movie' : 'tv'; // Assuming 'type' is passed in the route params as either 'movie' or 'tv'
  fetchDetails(id, type.value);
  fetchTrailer(id, type.value);
});
</script>
