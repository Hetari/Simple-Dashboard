<template>
  <div class="flex items-center justify-center h-screen bg-gray-200">
    <div class="text-center">
      <div class="w-full max-w-sm mx-auto mb-8">
        <img
          src="../assets/404-Page-Blog-Cover.avif"
          alt="404 Error"
          class="w-full h-60 object-cover"
        />
      </div>
      <h1 class="text-3xl font-bold text-gray-800">Oops! Page Not Found</h1>
      <p class="text-gray-600 text-lg mb-4">
        The page you are looking for might be under construction or does not
        exist.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 text-white font-semibold bg-blue-500 rounded-md transition duration-300 hover:bg-blue-600"
      >
        Go back to Home
      </router-link>
    </div>
  </div>
</template>
  <script>
export default {};
</script>