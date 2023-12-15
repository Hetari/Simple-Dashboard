<template>
  <div
    class="relative px-5 grid grid-cols-10 items-center transition-height delay-300"
  >
    <div class="col-span-2 uppercase font-semibold text-black">Feature</div>
    <div class="col-span-8 flex items-center">
      <input class="w-full pl-4 h-10 border border-solid rounded-lg" />
      <p
        class="absolute right-5 text-3xl text-center text-[#B9B5B5] cursor-pointer w-10 h-10 rounded-e-lg bg-[#e7e7e7]"
        @click="$emit('addFeature')"
      >
        +
      </p>
      <p
        class="absolute right-14 text-3xl text-center text-[#B9B5B5] cursor-pointer w-10 h-10 bg-[#e7e7e7]"
        @click="$emit('removeFeature')"
      >
        -
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
