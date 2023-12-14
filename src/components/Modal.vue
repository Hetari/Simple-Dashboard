<template>
  <div
    @click="closeModal"
    class="h-screen w-full fixed inset-0 bg-black bg-opacity-30 z-30"
  />
  <div
    id="default-modal"
    class="bg-white fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-40 w-[500px] h-fit rounded drop-shadow-xl"
  >
    <div class="flex items-center justify-between p-4">
      <button
        @click="closeModal"
        type="button"
        class="bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#F3AF1C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 9L9 15"
            stroke="#F3AF1C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 9L15 15"
            stroke="#F3AF1C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <Feature
      @addFeature="this.count++"
      v-for="i in count"
      :key="i"
      class="mb-5"
    />

    <div class="flex justify-end p-4">
      <button
        class="bg-[#1C23C0FC] font-bold capitalize text-white rounded-xl px-8 py-2"
        type="submit"
      >
        Ok
      </button>
    </div>
  </div>
</template>

<script>
import Feature from "@/components/Feature.vue";

export default {
  components: { Feature },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
</style>