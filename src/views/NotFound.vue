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
  <!-- <div class="box">
    <div class="box__ghost">
      <div class="symbol"></div>
      <div class="symbol"></div>
      <div class="symbol"></div>
      <div class="symbol"></div>
      <div class="symbol"></div>
      <div class="symbol"></div>

      <div class="box__ghost-container">
        <div class="box__ghost-eyes">
          <div class="box__eye-left"></div>
          <div class="box__eye-right"></div>
        </div>
        <div class="box__ghost-bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="box__ghost-shadow"></div>
    </div>

    <div class="box__description">
      <div class="box__description-container">
        <div class="box__description-title">Whoops!</div>
        <div class="box__description-text">
          It seems like we couldn't find the page you were looking for
        </div>
      </div>

      <a
        href="https://codepen.io/diogo_ml_gomes/"
        target="_blank"
        class="box__button"
        >Go back</a
      >
    </div>
  </div> -->
</template>

<script>
// var pageX = document.documentElement.clientWidth;
// var pageY = document.documentElement.clientHeight;
// var mouseY = 0;
// var mouseX = 0;

// document.addEventListener("mousemove", function (event) {
//   //verticalAxis
//   mouseY = event.pageY;
//   yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
//   //horizontalAxis
//   mouseX = event.pageX / -pageX;
//   xAxis = -mouseX * 100 - 100;

//   document.querySelector(".box__ghost-eyes").style.transform =
//     "translate(" + xAxis + "%,-" + yAxis + "%)";

//   // console.log("X: " + xAxis);
// });
</script>
