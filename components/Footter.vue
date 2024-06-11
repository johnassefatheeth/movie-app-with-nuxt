<template>
    <footer class="bg-gray-800 text-white py-6 z-50">
      <div class="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div class="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 class="text-2xl font-bold">Movie App</h2>
          <p class="text-sm text-gray-400">Your ultimate destination for movies and TV series.</p>
        </div>
        <div class="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 class="text-xl font-semibold mb-2">Quick Links</h3>
          <ul>
            <li class="mb-1"><NuxtLink to="/" class="text-gray-400 hover:text-white">Home</NuxtLink></li>
            <li class="mb-1"><NuxtLink to="/movies" class="text-gray-400 hover:text-white">Movies</NuxtLink></li>
            <li class="mb-1"><NuxtLink to="/series" class="text-gray-400 hover:text-white">Series</NuxtLink></li>
            <li class="mb-1"><NuxtLink to="/about" class="text-gray-400 hover:text-white">About</NuxtLink></li>
          </ul>
        </div>
        <div class="w-full md:w-1/3">
          <h3 class="text-xl font-semibold mb-2">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3c-3.866 0-7 3.134-7 7v3H5v4h3v8h4v-8h3.2l.8-4H12V9c0-.552.448-1 1-1h3V4h-3C9.42 4 6 7.42 6 11v2H2v4h4v8h4v-8h3v-2.01h3c0 .552.448 1 1 1H18c.552 0 1-.448 1-1V3c0-.552-.448-1-1-1z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6.03c-.83.37-1.72.62-2.66.73a4.67 4.67 0 0 0 2.05-2.57c-.9.53-1.9.92-2.97 1.13a4.63 4.63 0 0 0-7.92 4.22A13.12 13.12 0 0 1 1.64 4.15a4.65 4.65 0 0 0 1.43 6.19 4.61 4.61 0 0 1-2.1-.58v.06a4.63 4.63 0 0 0 3.71 4.54 4.63 4.63 0 0 1-2.1.08 4.64 4.64 0 0 0 4.33 3.22 9.28 9.28 0 0 1-5.74 1.98A9.46 9.46 0 0 1 2 21.36a13.07 13.07 0 0 0 7.08 2.08c8.5 0 13.15-7.05 13.15-13.16v-.6a9.44 9.44 0 0 0 2.33-2.4z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.98c0 5.52-4.48 10-10 10s-10-4.48-10-10c0-5.52 4.48-10 10-10s10 4.48 10 10zM7.35 10.88c.58.1.94-.26 1.1-.67a4.53 4.53 0 0 0 .22-1.06c.02-.13.02-.23-.01-.33-.02-.1-.06-.2-.1-.28-.05-.08-.11-.15-.19-.21-.07-.06-.15-.1-.23-.13-.1-.03-.2-.05-.3-.07-.15-.03-.29-.05-.44-.06-.12-.01-.24 0-.35.02a1.69 1.69 0 0 0-.28.05c-.09.02-.17.05-.24.08-.08.03-.15.06-.21.1-.08.05-.15.11-.2.19-.05.07-.1.16-.14.25-.05.09-.08.18-.1.28-.03.1-.04.2-.03.3 0 .13.02.27.05.42.04.17.09.33.15.48.07.15.14.29.22.41.1.14.2.27.32.39.13.12.27.23.43.31.17.1.35.18.54.24.21.06.43.1.65.13.12.02.25.03.37.04h.01zm1.78-.42a5.22 5.22 0 0 1-1.46-.58 5.24 5.24 0 0 1-1.22-1.13 5.22 5.22 0 0 1-.76-1.46 5.24 5.24 0 0 1-.45-1.6c0-.06-.01-.12-.01-.18 0-.04-.01-.08-.01-.12.01-.08.02-.15.04-.23a1.96 1.96 0 0 1 .13-.38c.05-.11.12-.21.2-.29.08-.09.18-.16.28-.21.09-.05.19-.08.28-.1.12-.02.24-.03.37-.03.16.01.33.03.49.06.16.04.32.08.47.14.13.06.26.13.38.22.11.08.21.17.3.26.1.1.18.2.26.31.1.12.17.25.23.38.04.1.07.2.08.3.01.08.02.15.01.23 0 .02 0 .03-.01.05 0 .03-.01.05-.02.08-.02.04-.03.07-.04.11 0 .02-.01.04-.02.06a.63.63 0 0 1-.04.06.8.8 0 0 1-.05.09c-.02.02-.03.04-.04.05-.04.04-.07.07-.11.1a.6.6 0 0 1-.13.09c-.05.03-.1.06-.15.08-.04.02-.09.04-.14.05-.05.02-.1.03-.15.04-.06.01-.11.02-.17.02-.02 0-.03 0-.05.01-.01 0-.03.01-.04.01l-.01.01z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 mt-4 text-center text-sm text-gray-400">
        &copy; 2024 JOHN's App. All rights reserved.
      </div>
    </footer>
  </template>